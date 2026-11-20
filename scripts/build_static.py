#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Сборка статических языковых версий EasyItaly.
  ./            — русский (исходные страницы, шапка/подвал становятся статичными)
  en/<page>.html — английская версия
  it/<page>.html — итальянская версия

Словари берутся из коммита cc439da (последний с EN/IT-словарями в js/site.js).
Запуск:  python3 scripts/build_static.py   (из папки site/)
"""
import json
import os
import re
import subprocess
import sys
from xml.dom import minidom

BASE = "https://mzvgvit.github.io/easyitaly-site/"
SITEMAP_DATE = "2026-11-20"

# page_file, dict-prefix, sitemap priority, changefreq
PAGES = [
    ("index.html",          1.0, "monthly"),
    ("about.html",          0.8, "yearly"),
    ("brands.html",         0.9, "monthly"),
    ("markets.html",        0.9, "monthly"),
    ("producers.html",      0.8, "yearly"),
    ("partners.html",       0.8, "yearly"),
    ("contacts.html",       0.7, "yearly"),
    ("become-partner.html", 0.9, "monthly"),
]

# Навигация и CTA по-русски (для корневых страниц)
PAGES_RU = {
    "home": "Главная", "about": "О компании", "brands": "Бренды и портфель",
    "markets": "Рынки", "producers": "Производителям", "partners": "Партнёрам",
    "contacts": "Контакты",
}
RU = {
    "topbar.tagline": "EasyItaly Srl — международный дистрибьютор продуктов питания, Тоскана, Италия",
    "topbar.since": "Основана в 2019 · Тоскана, Италия",
    "cta.become": "Стать партнёром",
    "footer.nav": "Навигация", "footer.services": "Услуги", "footer.contacts": "Контакты",
    "footer.export": "Экспортная документация", "footer.customs": "Таможенное оформление",
    "footer.labelling": "Маркировка и переупаковка", "footer.logistics": "Логистический консалтинг",
    "footer.transport": "Международные перевозки",
    "footer.address": "Тоскана, Италия (полный адрес добавляется)",
    "footer.email": "manager@easyitaly.info",
    "footer.rights": "© 2026 EasyItaly Srl. Все права защищены.",
    "footer.about": "EasyItaly — международный дистрибьютор премиальных итальянских продуктов питания, соединяющий итальянских производителей с партнёрами в Азии и СНГ. Основана в 2019 году в Тоскане.",
}

META = {
    "index.html": {
        "en": ("EasyItaly — Connecting Italy to the World",
               "EasyItaly distributes premium Italian food products across 12+ categories — pasta, oils, wine and equipment — to markets in Asia and the CIS."),
        "it": ("EasyItaly — Connecting Italy to the World",
               "EasyItaly distribuisce prodotti alimentari italiani premium in oltre 12 categorie — dalla pasta alle attrezzature — verso Asia e CSI."),
    },
    "about.html": {
        "en": ("About — EasyItaly",
               "EasyItaly was founded in 2019 in Tuscany. Our story, values and mission: connecting Italian producers with partners in Asia and the CIS."),
        "it": ("Chi siamo — EasyItaly",
               "EasyItaly è stata fondata nel 2019 in Toscana. La nostra storia, i valori e la missione: unire i produttori italiani ai partner in Asia e CSI."),
    },
    "brands.html": {
        "en": ("Brands & Portfolio — EasyItaly",
               "The EasyItaly portfolio: pasta, sauces and oils, cheese and charcuterie, wine, coffee, tea, sweets, grocery, snacks and processing equipment."),
        "it": ("Brand e portafoglio — EasyItaly",
               "Il portafoglio EasyItaly: pasta, salse e oli, formaggi e salumi, vino, caffè, tè, dolci, generi alimentari, snack e attrezzature tecnologiche."),
    },
    "markets.html": {
        "en": ("Markets — EasyItaly",
               "Export to Asia and the CIS: certification, labelling, customs and logistics — comprehensive support from order to delivery."),
        "it": ("Mercati — EasyItaly",
               "Export verso Asia e CSI: certificazione, etichettatura, dogana e logistica — supporto completo dall’ordine alla consegna."),
    },
    "producers.html": {
        "en": ("For Producers — EasyItaly",
               "Enter new markets with EasyItaly: we promote Italian producers in Asia and the CIS — documentation, logistics, distribution."),
        "it": ("Per i produttori — EasyItaly",
               "Entrate nei nuovi mercati con EasyItaly: promuoviamo i produttori italiani in Asia e CSI — documenti, logistica, distribuzione."),
    },
    "partners.html": {
        "en": ("For Partners — EasyItaly",
               "Distribution terms for importers and distributors: Italian portfolio, turnkey logistics, marketing support, dedicated manager."),
        "it": ("Per i partner — EasyItaly",
               "Condizioni di distribuzione per importatori e distributori: portafoglio italiano, logistica chiavi in mano, supporto marketing, manager dedicato."),
    },
    "contacts.html": {
        "en": ("Contacts — EasyItaly",
               "Reach EasyItaly Srl, Tuscany: e-mail and working languages. We answer business inquiries within two working days."),
        "it": ("Contatti — EasyItaly",
               "Contatti EasyItaly Srl, Toscana: e-mail e lingue di lavoro. Rispondiamo alle richieste commerciali entro due giorni lavorativi."),
    },
    "become-partner.html": {
        "en": ("Become a Partner — EasyItaly",
               "Partnership application: importers, distributors and restaurateurs — an authentic Italian portfolio and turnkey logistics."),
        "it": ("Diventa partner — EasyItaly",
               "Richiesta di partnership: importatori, distributori e ristoratori — autentico portafoglio italiano e logistica chiavi in mano."),
    },
}

PAGE_KEY = {  # префикс data-i18n ключа навигации для страницы
    "index.html": "home", "about.html": "about", "brands.html": "brands",
    "markets.html": "markets", "producers.html": "producers",
    "partners.html": "partners", "contacts.html": "contacts",
}


def load_dicts():
    """EN/IT-словари из коммита cc439da."""
    js = subprocess.run(["git", "show", "cc439da:js/site.js"],
                        capture_output=True, text=True, check=True).stdout
    out = {}
    for lang, start_mark, end_mark in (
        ("en", "var EN = {", "/* ------------------- IT"),
        ("it", "var IT = {", "/* ------------------- Шапка"),
    ):
        body = js.split(start_mark)[1].split(end_mark)[0]
        body = body.split("};")[0]
        body = re.sub(r"/\*.*?\*/", "", body, flags=re.S)
        body = re.sub(r",(\s*[}\]])", r"\1", body)
        out[lang] = json.loads("{" + body + "}")
    return out


def esc(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;")
             .replace(">", "&gt;").replace('"', "&quot;"))


def build_header(page, lang, dicts):
    """Статическая шапка. lang=None → русский корень."""
    d = RU if lang is None else dicts[lang]
    nav_items = []
    for key, ru_name in PAGES_RU.items():
        label = ru_name if lang is None else d.get("nav." + key, ru_name)
        nav_items.append('<a href="%s.html">%s</a>' % (key if key != "home" else "index", label))
    nav_cta = ('<a class="btn btn-outline-dark btn-sm" href="become-partner.html?role=partner">%s</a>'
               % d["cta.become"])
    # Переключатель языков: IT | RU | EN
    links = []
    for lg, cap, path in (
        ("it", "IT", ("it/%s" % page) if lang is None else (("../it/" + page) if lang != "it" else None)),
        ("ru", "RU", None if lang is None else ("../" + page)),
        ("en", "EN", ("en/%s" % page) if lang is None else (("../en/" + page) if lang != "en" else None)),
    ):
        if lg == lang or path is None:
            links.append('<span class="active" data-lang="%s">%s</span>' % (lg, cap))
        else:
            links.append('<a data-lang="%s" href="%s">%s</a>' % (lg, path, cap))
    switch = "".join(links)
    return (
        '<div class="topbar"><div class="container">'
        '<span>%s</span><span>%s</span></div></div>'
        '<header class="site-header"><div class="container header-inner">'
        '<a class="logo" href="%sindex.html"><img src="img/logo.png" alt="EasyItaly"></a>'
        '<nav class="main-nav" id="main-nav">%s%s</nav>'
        '<div class="header-actions">'
        '<div class="lang-switch" id="lang-switch">%s</div>'
        '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>'
        '</div></div></header>'
    ) % (d["topbar.tagline"], d["topbar.since"], "" if lang is None else "../",
         "".join(nav_items), nav_cta, switch)


def build_footer(lang, dicts):
    d = RU if lang is None else dicts[lang]
    pre = "" if lang is None else "../"
    nav_items = []
    for key, ru_name in PAGES_RU.items():
        label = ru_name if lang is None else d.get("nav." + key, ru_name)
        nav_items.append('<li><a href="%s.html">%s</a></li>'
                         % ((key if key != "home" else "index"), label))
    services = "".join(
        '<li><a href="%smarkets.html">%s</a></li>' % (pre, d[k])
        for k in ("footer.export", "footer.customs", "footer.labelling",
                  "footer.logistics", "footer.transport"))
    return (
        '<footer class="site-footer"><div class="flag-stripe"></div>'
        '<div class="container"><div class="footer-grid">'
        '<div><a class="logo" href="%sindex.html"><img src="img/logo.png" alt="EasyItaly"></a>'
        '<p style="margin-top:18px;max-width:300px">%s</p></div>'
        '<div><h4>%s</h4><ul>%s</ul></div>'
        '<div><h4>%s</h4><ul>%s</ul></div>'
        '<div><h4>%s</h4><ul>'
        '<li>%s</li>'
        '<li><a href="mailto:%s">%s</a></li>'
        '<li>easyitaly.com &middot; Tuscany</li>'
        '</ul></div></div></div>'
        '<div class="footer-bottom"><div class="container">'
        '<span>%s</span></div></div></footer>'
    ) % (pre, d["footer.about"], d["footer.nav"], "".join(nav_items),
         d["footer.services"], services, d["footer.contacts"],
         d["footer.address"], d["footer.email"], d["footer.email"], d["footer.rights"])


HEAD_SEO_BLOCK = (
    '<link rel="canonical" href="{canon}">\n'
    '  <link rel="alternate" hreflang="ru" href="{ru}">\n'
    '  <link rel="alternate" hreflang="en" href="{en}">\n'
    '  <link rel="alternate" hreflang="it" href="{it}">\n'
    '  <link rel="alternate" hreflang="x-default" href="{ru}">'
)


def seo_urls(page, lang):
    ru = BASE + page
    en = BASE + "en/" + page
    it = BASE + "it/" + page
    mine = {"en": en, "it": it, None: ru}[lang]
    return mine, ru, en, it


def rewrite_head(html, page, lang, dicts):
    if lang:
        title, desc = META[page][lang]
        title = esc(title)
        desc = esc(desc)
        html = html.replace("<html lang=\"ru\">", "<html lang=\"%s\">" % lang)
        html = re.sub(r"<title>.*?</title>", "<title>%s</title>" % title, html, count=1)
        html = re.sub(r'(<meta name="description" content=")[^"]*(")',
                      r'\g<1>%s\g<2>' % desc, html, count=1)
        html = re.sub(r'(<meta property="og:title" content=")[^"]*(")',
                      r'\g<1>%s\g<2>' % title, html, count=1)
        html = re.sub(r'(<meta property="og:description" content=")[^"]*(")',
                      r'\g<1>%s\g<2>' % desc, html, count=1)
        html = re.sub(r'(<meta name="twitter:title" content=")[^"]*(")',
                      r'\g<1>%s\g<2>' % title, html, count=1)
        html = re.sub(r'(<meta name="twitter:description" content=")[^"]*(")',
                      r'\g<1>%s\g<2>' % desc, html, count=1)
        if lang == "en":
            html = re.sub(r'<meta property="og:locale:alternate" content="it_IT">',
                          '<meta property="og:locale:alternate" content="ru_RU">', html)
            html = re.sub(r'<meta property="og:locale:alternate" content="en_US">',
                          '<meta property="og:locale:alternate" content="it_IT">', html)
        elif lang == "it":
            html = re.sub(r'<meta property="og:locale:alternate" content="en_US">',
                          '<meta property="og:locale:alternate" content="ru_RU">', html)
        html = html.replace('<meta property="og:locale" content="ru_RU">',
                            '<meta property="og:locale" content="%s">'
                            % ("en_US" if lang == "en" else "it_IT"))
    mine, ru, en, it = seo_urls(page, lang)
    block = HEAD_SEO_BLOCK.format(canon=mine, ru=ru, en=en, it=it)
    html = re.sub(
        r'<link rel="canonical"[^>]*>\n(?:\s*<link rel="alternate"[^>]*>\n?)*',
        block + "\n", html, count=1)
    html = html.replace('<meta property="og:url" content="%s">' % (BASE + page),
                        '<meta property="og:url" content="%s">' % mine)
    # JSON-LD: url страницы (только внутри ld+json, чтобы не задевать hreflang)
    def ld_repl(m):
        inner = re.sub(r'(easyitaly-site/)((?:[a-z-]+\.html)?)(")',
                       r"\1" + ("" if lang is None else lang + "/") + r"\2\3", m.group(2))
        return m.group(1) + inner + m.group(3)
    html = re.sub(r'(<script type="application/ld\+json">)(.*?)(</script>)',
                  ld_repl, html, flags=re.S)
    return html


def rewrite_subdir_assets(html):
    """Ресурсы и ссылки уходят на уровень выше для en/, it/."""
    html = re.sub(r'(href="(?!https?://)(?:\.\./)?)(css|js|img)/', r"\1../\2/", html)
    html = re.sub(r'(src="(?!https?://)(?:\.\./)?)(css|js|img)/', r"\1../\2/", html)
    html = re.sub(r"(url\('(?!https?://)(?:\.\./)?)(?:\.\./)?(img|css|js)/", r"\1../\2/", html)
    html = re.sub(r'(url\("(?!https?://)(?:\.\./)?)(?:\.\./)?(img|css|js)/', r'\1../\2/', html)
    return html


def substitute_texts(html, lang, dicts):
    d = dicts[lang]
    def text_repl(m):
        pre, key, inner = m.group(1), m.group(2), m.group(3)
        val = d.get(key)
        return pre + ">" + (esc(val) if val else inner) + "<"
    html, n = re.subn(r'(\s)data-i18n="([a-z0-9.]+)"[^>]*>([^<]*)<',
                      text_repl, html)
    def ph_repl(m):
        key = m.group(1)
        val = d.get(key)
        return 'data-i18n-ph="%s" placeholder="%s"' % (key, esc(val) if val else m.group(2))
    html = re.sub(r'data-i18n-ph="([a-zA-Z0-9.]+)" placeholder="([^"]*)"', ph_repl, html)
    return html


def strip_i18n(html):
    return re.sub(r'\s*data-i18n(?:-ph)?="[^"]*"', "", html)


def build():
    dicts = load_dicts()
    for page, prio, freq in PAGES:
        src = open(page, encoding="utf-8").read()
        for lang in (None, "en", "it"):
            html = src
            header = build_header(page, lang, dicts)
            footer = build_footer(lang, dicts)
            html = re.sub(
                r'<div id="site-header"></div>|<div class="topbar">.*?</header>',
                header.replace("\\", "\\\\"), html, count=1, flags=re.S)
            html = re.sub(r'<div id="site-footer"></div>|<footer class="site-footer">.*?</footer>',
                          footer.replace("\\", "\\\\"), html, count=1, flags=re.S)
            if lang:
                html = substitute_texts(html, lang, dicts)
            html = strip_i18n(html)
            html = rewrite_head(html, page, lang, dicts)
            if lang:
                html = rewrite_subdir_assets(html)
            outdir = "" if lang is None else lang + "/"
            if outdir:
                os.makedirs(outdir, exist_ok=True)
            with open(outdir + page, "w", encoding="utf-8") as f:
                f.write(html)
            print("built", (outdir + page).ljust(26), lang or "ru")
    build_sitemap(dicts)


def build_sitemap(dicts):
    urls = []
    for page, prio, freq in PAGES:
        for lang in ("ru", "en", "it"):
            mine, ru, en, it = seo_urls(page, {"ru": None, "en": "en", "it": "it"}[lang])
            alts = ('<xhtml:link rel="alternate" hreflang="ru" href="%s"/>\n'
                    '    <xhtml:link rel="alternate" hreflang="en" href="%s"/>\n'
                    '    <xhtml:link rel="alternate" hreflang="it" href="%s"/>\n'
                    '    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>'
                    % (ru, en, it, ru))
            urls.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n'
                        '    <changefreq>%s</changefreq>\n    <priority>%s</priority>\n    %s\n  </url>\n'
                        % (mine, SITEMAP_DATE, freq, prio, alts))
    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n'
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n'
           + "".join(urls) + "</urlset>\n")
    minidom.parseString(xml)
    open("sitemap.xml", "w", encoding="utf-8").write(xml)
    print("sitemap.xml rebuilt: 24 URLs")


if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
    build()
