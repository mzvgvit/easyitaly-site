/* ============================================================
   EasyItaly — общий скрипт сайта
   Шапка/подвал, навигация, переключатель RU/EN, фильтры, форма
   ============================================================ */
(function () {
  "use strict";

  var PAGES = {
    home:      { file: "index.html",     ru: "Главная",             en: "Home" },
    about:     { file: "about.html",     ru: "О компании",          en: "About" },
    brands:    { file: "brands.html",    ru: "Бренды и портфель",   en: "Brands & Portfolio" },
    markets:   { file: "markets.html",   ru: "Рынки",               en: "Markets" },
    producers: { file: "producers.html", ru: "Производителям",      en: "For Producers" },
    partners:  { file: "partners.html",  ru: "Партнёрам",           en: "For Partners" },
    contacts:  { file: "contacts.html",  ru: "Контакты",            en: "Contacts" }
  };

  /* ------------------- EN словарь ------------------- */
  var EN = {
    /* навигация и общее */
    "nav.home": "Home", "nav.about": "About", "nav.brands": "Brands & Portfolio",
    "nav.markets": "Markets", "nav.producers": "For Producers", "nav.partners": "For Partners",
    "nav.contacts": "Contacts",
    "topbar.tagline": "EasyItaly Srl — international food distributor, Tuscany, Italy",
    "topbar.since": "Established 2019 · Tuscany, Italy",
    "cta.become": "Become a Partner",
    "footer.about": "EasyItaly is an international distributor of premium Italian food products, connecting Italian manufacturers with partners in Asia and the CIS region. Founded in 2019 in Tuscany.",
    "footer.nav": "Navigation", "footer.services": "Services", "footer.contacts": "Contacts",
    "footer.export": "Export documentation", "footer.customs": "Customs clearance", "footer.labelling": "Labelling & repacking",
    "footer.logistics": "Logistics consulting", "footer.transport": "International freight",
    "footer.address": "Tuscany, Italy (full address to be added)", "footer.email": "manager@easyitaly.info",
    "footer.rights": "© 2026 EasyItaly Srl. All rights reserved.",
    "footer.demo": "Draft website: contact details are placeholders.",

    /* index.html */
    "home.hero.eyebrow": "Tuscany, Italy · Established 2019",
    "home.hero.title": "Connecting Italy to the World",
    "home.hero.lead": "EasyItaly is an international distributor of Italian gourmet products. We bring the taste of Italy to Asia and the CIS region — quality, tradition and care in every delivery.",
    "home.hero.btn": "Become a Partner",
    "home.hero.btn2": "Our Portfolio",
    "home.stats.1num": "2019", "home.stats.1lbl": "Founded in Tuscany",
    "home.stats.2num": "2", "home.stats.2lbl": "Focus regions — Asia & CIS",
    "home.stats.3num": "10+", "home.stats.3lbl": "Product categories",
    "home.stats.4num": "5", "home.stats.4lbl": "Freight options",
    "home.mission.kicker": "Our Mission",
    "home.mission.title": "The taste of Italy, open to the world",
    "home.mission.p1": "EasyItaly was founded in 2019 in the very heart of Tuscany — a region rightly considered one of Italy's gastronomic jewels, renowned for its culinary traditions, product quality and culture of taste.",
    "home.mission.p2": "Our mission is to introduce international markets to the finest products of Italian manufacture. We connect Italy's producers with partners and consumers around the world.",
    "home.why.kicker": "Why Work With Us",
    "home.why.title": "A partner you can rely on",
    "home.why.sub": "We built our reputation on four principles:",
    "home.why.1t": "Trusted Manufacturers",
    "home.why.1p": "We collaborate with top-tier producers in Italy, France, Belgium and Spain.",
    "home.why.2t": "Reliable Logistics",
    "home.why.2p": "Ensuring timely and safe delivery of products.",
    "home.why.3t": "Comprehensive Support",
    "home.why.3p": "Dedicated partner support for your business.",
    "home.why.4t": "Premium Quality",
    "home.why.4p": "Offering only the best and checked products.",
    "home.portfolio.kicker": "Portfolio",
    "home.portfolio.title": "Categories we distribute",
    "home.portfolio.sub": "From bronze-drawn pasta to Chianti wines — a portfolio built around the traditions of Italian regions.",
    "home.portfolio.btn": "See all categories",
    "home.logistics.kicker": "Logistics",
    "home.logistics.title": "From Tuscany — to any point on the map",
    "home.logistics.text": "EasyItaly Srl offers comprehensive logistics solutions that go beyond standard distribution: labelling and repacking, export documentation, customs clearance and full support of your order from placement to delivery at destination.",
    "home.logistics.li1": "Sea freight", "home.logistics.li2": "Road haulage",
    "home.logistics.li3": "Air freight", "home.logistics.li4": "Rail freight",
    "home.logistics.li5": "Multimodal transport",
    "home.logistics.btn": "Logistics & documentation",
    "home.mission.btn": "More about the company",
    "home.cat.pasta.tag": "Pasta", "home.cat.pasta.t": "Pasta", "home.cat.pasta.p": "Bronze-drawn pasta of durum wheat from Italy’s leading mills.",
    "home.cat.oil.tag": "Oil", "home.cat.oil.t": "Olive Oil", "home.cat.oil.p": "Extra virgin, first cold press — the base of the Italian culture of taste.",
    "home.cat.cheese.tag": "Cheese", "home.cat.cheese.t": "Cheese", "home.cat.cheese.p": "Aged Italian cheeses for retail and gastronomy.",
    "home.cat.charcuterie.tag": "Charcuterie", "home.cat.charcuterie.t": "Meat Delicacies", "home.cat.charcuterie.p": "Prosciutto and salami — Italy’s gastronomic delicacies.",
    "home.cat.wine.tag": "Wine", "home.cat.wine.t": "Wine", "home.cat.wine.p": "Chianti, Vermentino and other Italian appellation wines.",
    "home.cat.coffee.tag": "Coffee", "home.cat.coffee.t": "Coffee", "home.cat.coffee.p": "Italian roasts: beans, ground and capsules.",
    "home.cat.sweets.tag": "Sweets", "home.cat.sweets.t": "Sweets", "home.cat.sweets.p": "Chocolate and classic Italian desserts.",
    "home.cat.grocery.tag": "Grocery", "home.cat.grocery.t": "Grocery", "home.cat.grocery.p": "Rice, polenta, legumes and the staples of Italian cuisine.",
    "cta.title": "Let’s connect Italy to your market",
    "home.cta.text": "We are open to new partners — manufacturers who want to enter Asian and CIS markets, and importers looking for a reliable Italian portfolio.",

    /* about.html */
    "about.hero.eyebrow": "About the Company",
    "about.hero.title": "Our Story",
    "about.hero.lead": "EasyItaly — the taste of Italy, open to the world.",
    "about.story.title": "From Tuscany — to international markets",
    "about.story.p1": "EasyItaly was founded in 2019 in the very heart of Tuscany — a region rightly considered one of Italy's gastronomic jewels, renowned for its culinary traditions, high product quality and culture of taste.",
    "about.story.p2": "From the very beginning our mission has been to introduce international markets to the best products of Italian manufacture. We started with food supplies to Asia and the CIS region, connecting Italy's producers with partners and consumers around the world.",
    "about.story.p3": "Thanks to deep knowledge of the Italian market, reliable partnerships and a drive for excellence, EasyItaly gradually grew into an international distribution company.",
    "about.story.p4": "Today EasyItaly represents and distributes products of renowned Italian brands across several countries, helping them expand their presence on international markets.",
    "about.story.p5": "We are proud of our Italian roots, we cherish traditions and we believe that true quality needs no borders.",
    "about.story.quote": "EasyItaly — connecting Italy to the world through quality, tradition and taste.",
    "about.timeline.kicker": "Milestones",
    "about.timeline.title": "Company path",
    "about.timeline.1t": "2019 — Founding in Tuscany",
    "about.timeline.1p": "The company is established in one of Italy's gastronomic capitals with a focus on export supplies.",
    "about.timeline.2t": "First shipments — Asia and the CIS",
    "about.timeline.2p": "The first food-supply projects to Asian and CIS markets. Practical knowledge of import requirements and certification.",
    "about.timeline.3t": "Growing into an international distributor",
    "about.timeline.3p": "Reliable partnerships and market knowledge let us scale the product portfolio and geography of deliveries.",
    "about.timeline.4t": "Today — brands of Italy around the world",
    "about.timeline.4p": "EasyItaly represents and distributes products of renowned Italian brands, helping them grow in international markets.",
    "about.values.kicker": "Values",
    "about.values.title": "What we believe in",
    "about.values.1t": "Quality without borders",
    "about.values.1p": "We believe that true quality needs no borders. Every product in our portfolio is verified.",
    "about.values.2t": "Traditions and taste",
    "about.values.2p": "We cherish the culinary traditions of Italian regions and pass them on to new markets.",
    "about.values.3t": "Long-term partnership",
    "about.values.3p": "We build relationships in which both the manufacturer and the importer grow.",
    "about.values.4t": "Professionalism in details",
    "about.values.4p": "From export documentation to pallet labelling — attention to detail at every step.",
    "about.cta.text": "The story continues — and your brand or your market can become part of it.",

    /* brands.html */
    "brands.hero.eyebrow": "Brands & Portfolio",
    "brands.hero.title": "The taste of Italy — by category",
    "brands.hero.lead": "EasyItaly distributes products of renowned Italian brands and helps them enter new markets. Below are the categories of our portfolio.",
    "brands.filter.all": "All",
    "brands.filter.pasta": "Pasta",
    "brands.filter.sauces": "Sauces & Oils",
    "brands.filter.gastronomy": "Gastronomy",
    "brands.filter.sweets": "Sweets & Tea",
    "brands.filter.drinks": "Drinks",
    "brands.filter.grocery": "Grocery & Snacks",
    "brands.note": "The grid shows the portfolio categories. Specific brand names are added upon request under an NDA — please contact us.",
    "brands.c1tag": "Pasta",
    "brands.c1t": "Pasta",
    "brands.c1p": "Bronze-drawn pasta of durum wheat from leading producers of Tuscany, Campania and Gragnano.",
    "brands.c2tag": "Sauces & Oils",
    "brands.c2t": "Cream & Sauces",
    "brands.c2p": "Tomato sauces, cream bases and ready sauces for the gastronomy of Italian cuisine.",
    "brands.c3tag": "Sauces & Oils",
    "brands.c3t": "Seasoning, Oil & Dressing",
    "brands.c3p": "Extra virgin olive oil, balsamic vinegar of Modena, seasonings and dressings.",
    "brands.c4tag": "Gastronomy",
    "brands.c4t": "Cheese",
    "brands.c4p": "Aged Italian cheeses — for retail, HoReCa and gourmet shops.",
    "brands.c4btag": "Gastronomy",
    "brands.c4bt": "Meat Delicacies",
    "brands.c4bp": "Prosciutto, salami and aged meat delicacies — the gastronomy line of the portfolio.",
    "brands.c5tag": "Drinks",
    "brands.c5t": "Wine",
    "brands.c5p": "Chianti, Brunello di Montalcino, Vermentino and other wines of Tuscan and Italian appellations.",
    "brands.c6tag": "Drinks",
    "brands.c6t": "Coffee",
    "brands.c6p": "Italian roasts in beans, ground and capsule formats for home and the HORECA channel.",
    "brands.c7tag": "Drinks",
    "brands.c7t": "Beverages",
    "brands.c7p": "Mineral waters, sparkling drinks, Italian aperitivi and juices.",
    "brands.c8tag": "Sweets & Tea",
    "brands.c8t": "Sweets & Confectionery",
    "brands.c8p": "Chocolate, pralines, panettone, cantucci and classic Italian pastries.",
    "brands.c9tag": "Sweets & Tea",
    "brands.c9t": "Tea",
    "brands.c9p": "Premium line of leaf teas and herbal infusions for retail and HORECA.",
    "brands.c10tag": "Grocery & Snacks",
    "brands.c10t": "Grocery",
    "brands.c10p": "Rice, polenta, flour, legumes, preserves and pantry staples of Italian cuisine.",
    "brands.c11tag": "Grocery & Snacks",
    "brands.c11t": "Snacks",
    "brands.c11p": "Grisini, taralli, crackers and savoury snacks in modern packaging formats.",
    "brands.cta.text": "Would you like to receive the current price list and assortment on your market?",

    /* markets.html */
    "markets.hero.eyebrow": "Markets",
    "markets.hero.title": "Asia and the CIS — our focus geography",
    "markets.hero.lead": "EasyItaly started with supplies to the countries of Asia and the CIS. We know the requirements of these markets from the inside: certification, labelling, culture of trade.",
    "markets.regions.kicker": "Geography",
    "markets.regions.title": "Where the products travel to",
    "markets.regions.1t": "Asia",
    "markets.regions.1p": "Supplies of Italian food products to Asian markets: adapting documentation, certification and packaging to the requirements of each country.",
    "markets.regions.2t": "CIS region",
    "markets.regions.2p": "Established supply corridors and a deep understanding of the region's trade specifics, customs rules and import culture.",
    "markets.entry.kicker": "Market Entry",
    "markets.entry.title": "How we enter a new market",
    "markets.entry.sub": "A transparent process — you always know at which stage your product is:",
    "markets.entry.1t": "Product audit",
    "markets.entry.1p": "We assess the potential of the assortment in the target market: demand, competition, price segment.",
    "markets.entry.2t": "Certification & documents",
    "markets.entry.2p": "We prepare the export documentation, certificates of origin and conformance required by the destination country.",
    "markets.entry.3t": "Adaptation & labelling",
    "markets.entry.3p": "Labelling and repacking in line with the requirements of the destination market, including adaptation of packaging.",
    "markets.entry.4t": "Trial shipment",
    "markets.entry.4p": "A pilot batch with full logistics support — from placement of the order to delivery at destination.",
    "markets.entry.5t": "Distribution development",
    "markets.entry.5p": "Search for partners and distributors, support of regular supplies and assortment growth.",
    "markets.logistics.kicker": "Documentation & Logistics",
    "markets.logistics.title": "Comprehensive logistics solutions",
    "markets.logistics.p1": "EasyItaly Srl offers comprehensive logistics solutions that go beyond standard distribution. We accompany our clients at every stage of export deliveries, providing professional service and an individual approach to every order.",
    "markets.logistics.p2": "Our experience and knowledge of international markets let clients be confident in a professional approach, reliability and attention to detail.",
    "markets.logistics.i1t": "Labelling and repacking",
    "markets.logistics.i1p": "Preparation of products in line with the requirements of the destination market, including labelling and packaging adaptation.",
    "markets.logistics.i2t": "Manual loading",
    "markets.logistics.i2p": "Organization of manual loading, taking into account the specifics of the products and the client's requirements.",
    "markets.logistics.i3t": "Logistics consulting",
    "markets.logistics.i3p": "Selection of optimal logistics solutions with regard to deadlines, budget and shipment specifics.",
    "markets.logistics.i4t": "Customs clearance",
    "markets.logistics.i4p": "Preparation of export documentation and support of customs procedures.",
    "markets.logistics.mtitle": "International freight",
    "markets.logistics.mtext": "We arrange deliveries by all modes of transport and select the optimal route for each client, taking into account the specifics of the cargo, geography, deadlines and budget.",
    "markets.logistics.m1": "Sea freight", "markets.logistics.m2": "Road haulage",
    "markets.logistics.m3": "Air freight", "markets.logistics.m4": "Rail freight",
    "markets.logistics.m5": "Multimodal transport",
    "markets.logistics.quote": "EasyItaly Srl — we make international trade simpler, providing full-cycle support of your products from Italy to the final market.",
    "markets.logistics.p2": "Our experience and knowledge of international markets let clients be confident in a professional approach, reliability and attention to detail.",
    "markets.cta.text": "Let’s discuss supplies to your market — from documents to the last mile.",

    /* producers.html */
    "producers.hero.eyebrow": "For Manufacturers",
    "producers.hero.title": "How to enter our portfolio",
    "producers.hero.lead": "We open new opportunities for your products and help increase sales — with full support at every stage of cooperation.",
    "producers.offers.kicker": "What We Offer",
    "producers.offers.title": "Your export department without hiring one",
    "producers.offers.1t": "Access to growth markets",
    "producers.offers.1p": "Established supply channels in Asia and the CIS region and understanding of their trade specifics.",
    "producers.offers.2t": "Export regulation",
    "producers.offers.2p": "Export documentation, customs procedures, certification — we take all documentary routine on ourselves.",
    "producers.offers.3t": "Product adaptation",
    "producers.offers.3p": "Labelling and repacking to the requirements of the destination market, packaging adaptation.",
    "producers.offers.4t": "Distribution support",
    "producers.offers.4p": "Search of partners and distributors, promotion of your brand in the target markets.",
    "producers.steps.kicker": "How It Works",
    "producers.steps.title": "Way to the portfolio — five steps",
    "producers.steps.1t": "Introduction",
    "producers.steps.1p": "You send information about the company and the product line: assortment, certificates, production photos.",
    "producers.steps.2t": "Evaluation",
    "producers.steps.2p": "We assess quality, export potential and compliance with the requirements of target markets.",
    "producers.steps.3t": "Commercial terms",
    "producers.steps.3p": "We agree on the format of cooperation: distribution, FCA/FOB terms, minimum volumes.",
    "producers.steps.4t": "Documents & logistics",
    "producers.steps.4p": "We prepare the export documentation and choose the optimal transport scheme.",
    "producers.steps.5t": "Launch & growth",
    "producers.steps.5p": "Pilot shipment, distribution development and expansion into new countries.",
    "producers.req.kicker": "Requirements",
    "producers.req.title": "What matters to us",
    "producers.req.li1": "Consistent product quality and a stable production process",
    "producers.req.li2": "HACCP / ISO certification and readiness for export documentation",
    "producers.req.li3": "Capacity for regular export volumes",
    "producers.req.li4": "Competitive pricing policy for the target market",
    "producers.req.li5": "Readiness for long-term partnership and brand building",
    "producers.cta.text": "Ready to discuss the entry of your products into our portfolio? Submit a request — and we will get back to you.",
    "producers.offers.sub": "EasyItaly takes over the entire journey of your product beyond Italy — from documents to a shop shelf on another continent.",
    "cta.submit": "Submit a Request",

    /* partners.html */
    "partners.hero.eyebrow": "For Importers & Distributors",
    "partners.hero.title": "Distribution terms",
    "partners.hero.lead": "For importer companies and distributors who want to bring an authentic Italian assortment to their market.",
    "partners.benefits.kicker": "Your Gains",
    "partners.benefits.sub": "We lead the partner through the whole chain — from the first order to regular supplies.",
    "partners.benefits.title": "What a partner gets",
    "partners.benefits.1t": "Italian portfolio",
    "partners.benefits.1p": "A curated assortment of Italian brands across 10+ categories — from pasta and oils to wines and coffee.",
    "partners.benefits.2t": "Logistics turnkey",
    "partners.benefits.2p": "Export documentation, customs, labelling and delivery by sea, road, air, rail or multimodal transport.",
    "partners.benefits.3t": "Marketing support",
    "partners.benefits.3p": "Materials, product training, help with launches and work with retail chains.",
    "partners.benefits.4t": "Personal manager",
    "partners.benefits.4p": "Dedicated partner support for your business — from the first request to every shipment.",
    "partners.why.kicker": "Why Work With Us",
    "partners.why.title": "Four reasons",
    "partners.why.1t": "Trusted Manufacturers",
    "partners.why.1p": "We collaborate with top-tier producers in Italy, France, Belgium and Spain.",
    "partners.why.2t": "Reliable Logistics",
    "partners.why.2p": "Ensuring timely and safe delivery of products.",
    "partners.why.3t": "Comprehensive Support",
    "partners.why.3p": "Dedicated partner support for your business.",
    "partners.why.4t": "Premium Quality",
    "partners.why.4p": "Offering only the best and checked products.",
    "partners.terms.kicker": "Cooperation Format",
    "partners.terms.title": "Distribution conditions",
    "partners.terms.li1": "Framework contract with fixed terms and price transparency",
    "partners.terms.li2": "Consolidated and trial shipments for the start of cooperation",
    "partners.terms.li3": "Flexible minimum volumes depending on the category and market",
    "partners.terms.li4": "Incoterms: EXW / FCA / FOB / CIF — as agreed",
    "partners.terms.li5": "Territorial exclusivity possible upon reaching agreed volumes",
    "partners.terms.li6": "Support with assortment selection under the specifics of your market",
    "partners.cta.text": "Write to us to receive the commercial offer adapted to your market.",

    /* contacts.html */
    "contacts.hero.eyebrow": "Contacts",
    "contacts.hero.title": "Get in touch",
    "contacts.hero.lead": "Submit a request in Russian or English — we answer business inquiries within two working days.",
    "contacts.form.kicker": "Request Form",
    "contacts.form.title": "Write to us",
    "contacts.form.name": "Your name",
    "contacts.form.namePh": "Name and surname",
    "contacts.form.company": "Company",
    "contacts.form.companyPh": "Company name",
    "contacts.form.country": "Country / market",
    "contacts.form.countryPh": "e.g. Kazakhstan",
    "contacts.form.email": "E-mail",
    "contacts.form.emailPh": "name@company.com",
    "contacts.form.role": "You are",
    "contacts.form.role1": "Manufacturer (wants to enter the portfolio)",
    "contacts.form.role2": "Importer / distributor (wants the portfolio)",
    "contacts.form.role3": "Other request",
    "contacts.form.lang": "Preferred language",
    "contacts.form.msg": "Message",
    "contacts.form.msgPh": "Briefly about your request: products, volumes, market…",
    "contacts.form.btn": "Send request",
    "contacts.form.success": "The form is prepared. To send, press “Send” — your e-mail client will open with a prefilled request.",
    "contacts.form.note": "The form works via e-mail. For the website's production version, hook it up to a mail service.",
    "contacts.info.kicker": "Direct Contacts",
    "contacts.info.title": "EasyItaly Srl",
    "contacts.info.role": "International food distributor",
    "contacts.info.since": "Established 2019 · Tuscany, Italy",
    "contacts.info.addressT": "Office",
    "contacts.info.address": "Tuscany, Italy (address to be added from the documents)",
    "contacts.info.emailT": "E-mail",
    "contacts.info.email": "manager@easyitaly.info",
    "contacts.info.phoneT": "Phone",
    "contacts.info.phone": "+39 XXX XXX XXXX — to be added",
    "contacts.info.langsT": "Languages",
    "contacts.info.langs": "Russian, English, Italian — we run negotiations in the language convenient for you",
    "contacts.markets.kicker": "Directions",
    "contacts.markets.title": "Markets we serve",
    "contacts.markets.title": "We work with markets",
    "contacts.markets.p": "The main focus is the countries of Asia and the CIS region. If your market is not in the list — write anyway: we open new directions regularly."
  };


  /* ------------------- IT словарь ------------------- */
  var IT = {
    "nav.home": "Home", "nav.about": "Chi siamo", "nav.brands": "Brand e portafoglio",
    "nav.markets": "Mercati", "nav.producers": "Per i produttori", "nav.partners": "Per i partner",
    "nav.contacts": "Contatti",
    "topbar.tagline": "EasyItaly Srl — distributore internazionale di prodotti alimentari, Toscana, Italia",
    "topbar.since": "Fondata nel 2019 · Toscana, Italia",
    "cta.become": "Diventa partner", "cta.submit": "Invia richiesta",
    "cta.title": "Colleghiamo l’Italia al vostro mercato",
    "footer.about": "EasyItaly è un distributore internazionale di prodotti alimentari italiani premium: collega i produttori italiani ai partner in Asia e nella CSI. Fondata nel 2019 in Toscana.",
    "footer.nav": "Navigazione", "footer.services": "Servizi", "footer.contacts": "Contatti",
    "footer.export": "Documentazione di esportazione", "footer.customs": "Sdoganamento", "footer.labelling": "Etichettatura e riconfezionamento",
    "footer.logistics": "Consulenza logistica", "footer.transport": "Trasporti internazionali",
    "footer.address": "Toscana, Italia (indirizzo completo da aggiungere)", "footer.email": "manager@easyitaly.info",
    "footer.rights": "© 2026 EasyItaly Srl. Tutti i diritti riservati.",
    "footer.demo": "Sito in bozza: i dati di contatto sono segnaposto.",

    "home.hero.eyebrow": "Toscana, Italia · Fondata nel 2019",
    "home.hero.title": "Connecting Italy to the World",
    "home.hero.lead": "EasyItaly è un distributore internazionale di prodotti gourmet italiani. Portiamo il gusto dell’Italia in Asia e nella CSI — qualità, tradizione e cura in ogni consegna.",
    "home.hero.btn": "Diventa partner", "home.hero.btn2": "Il nostro portafoglio",
    "home.stats.1num": "2019", "home.stats.1lbl": "anno di fondazione in Toscana",
    "home.stats.2num": "2", "home.stats.2lbl": "regioni focus — Asia e CSI",
    "home.stats.3num": "10+", "home.stats.3lbl": "categorie di prodotto in portafoglio",
    "home.stats.4num": "5", "home.stats.4lbl": "tipi di trasporto internazionale",
    "home.mission.kicker": "La nostra missione", "home.mission.title": "Il gusto dell’Italia, aperto al mondo",
    "home.mission.p1": "EasyItaly è stata fondata nel 2019 nel cuore della Toscana — una regione giustamente considerata una delle perle gastronomiche d’Italia, rinomata per le tradizioni culinarie, la qualità dei prodotti e la cultura del gusto.",
    "home.mission.p2": "La nostra missione è presentare ai mercati internazionali i migliori prodotti di manifattura italiana. Uniamo i produttori italiani a partner e consumatori di tutto il mondo.",
    "home.mission.btn": "Di più sull’azienda",
    "home.why.kicker": "Perché scegliere noi", "home.why.title": "Un partner su cui contare",
    "home.why.sub": "La nostra reputazione si fonda su quattro principi:",
    "home.why.1t": "Produttori affidabili", "home.why.1p": "Lavoriamo con produttori di primo livello in Italia, Francia, Belgio e Spagna.",
    "home.why.2t": "Logistica affidabile", "home.why.2p": "Consegna puntuale e sicura dei prodotti.",
    "home.why.3t": "Supporto completo", "home.why.3p": "Supporto dedicato ai partner per la vostra attività.",
    "home.why.4t": "Qualità premium", "home.why.4p": "Offriamo solo i prodotti migliori e verificati.",
    "home.portfolio.kicker": "Portafoglio", "home.portfolio.title": "Le categorie che distribuiamo",
    "home.portfolio.sub": "Dalla pasta trafilata al bronzo ai vini del Chianti — un portafoglio costruito sulle tradizioni delle regioni italiane.",
    "home.portfolio.btn": "Tutte le categorie",
    "home.cat.pasta.tag": "Pasta", "home.cat.pasta.t": "Pasta", "home.cat.pasta.p": "Pasta di grano duro trafilata al bronzo dai principali molini italiani.",
    "home.cat.oil.tag": "Olio", "home.cat.oil.t": "Olio di oliva", "home.cat.oil.p": "Extravergine, prima spremitura a freddo — la base della cultura del gusto italiana.",
    "home.cat.cheese.tag": "Formaggi", "home.cat.cheese.t": "Formaggi", "home.cat.cheese.p": "Formaggi italiani stagionati per retail e gastronomia.",
    "home.cat.charcuterie.tag": "Salumi", "home.cat.charcuterie.t": "Delizie di carne", "home.cat.charcuterie.p": "Prosciutto e salame — le delizie gastronomiche d’Italia.",
    "home.cat.wine.tag": "Vino", "home.cat.wine.t": "Vino", "home.cat.wine.p": "Chianti, Vermentino e altri vini delle denominazioni italiane.",
    "home.cat.coffee.tag": "Caffè", "home.cat.coffee.t": "Caffè", "home.cat.coffee.p": "Tostature italiane: in grani, macinato e capsule.",
    "home.cat.sweets.tag": "Dolci", "home.cat.sweets.t": "Dolci", "home.cat.sweets.p": "Cioccolato e dolci classici italiani.",
    "home.cat.grocery.tag": "Alimenti", "home.cat.grocery.t": "Generi alimentari", "home.cat.grocery.p": "Riso, polenta, legumi e capisaldi della cucina italiana.",
    "home.logistics.kicker": "Logistica", "home.logistics.title": "Dalla Toscana — a qualsiasi punto della mappa",
    "home.logistics.text": "EasyItaly Srl offre soluzioni logistiche complete che vanno oltre la distribuzione standard: etichettatura e riconfezionamento, documentazione di esportazione, sdoganamento e supporto completo dell’ordine — dal piazzamento alla consegna a destinazione.",
    "home.logistics.li1": "Trasporti marittimi", "home.logistics.li2": "Trasporti su strada",
    "home.logistics.li3": "Trasporti aerei", "home.logistics.li4": "Trasporti ferroviari",
    "home.logistics.li5": "Trasporti multimodali",
    "home.logistics.btn": "Logistica e documentazione",
    "home.cta.text": "Siamo aperti a nuovi partner — produttori che vogliono entrare nei mercati asiatici e della CSI, e importatori in cerca di un portafoglio italiano affidabile.",

    "about.hero.eyebrow": "Chi siamo", "about.hero.title": "La nostra storia",
    "about.hero.lead": "EasyItaly — il gusto dell’Italia, aperto al mondo.",
    "about.story.title": "Dalla Toscana — ai mercati internazionali",
    "about.story.p1": "EasyItaly è stata fondata nel 2019 nel cuore della Toscana — una regione giustamente considerata una delle perle gastronomiche d’Italia, rinomata per le tradizioni culinarie, l’alta qualità dei prodotti e la cultura del gusto.",
    "about.story.p2": "Fin dall’inizio la nostra missione è stata presentare al mercato internazionale i migliori prodotti di manifattura italiana. Abbiamo incominciato con le forniture alimentari verso l’Asia e la CSI, unendo i produttori italiani a partner e consumatori di tutto il mondo.",
    "about.story.p3": "Grazie alla profonda conoscenza del mercato italiano, a partnership affidabili e alla ricerca dell’eccellenza, EasyItaly è cresciuta fino a diventare una società di distribuzione internazionale.",
    "about.story.p4": "Oggi EasyItaly rappresenta e distribuisce i prodotti di rinomati brand italiani in diversi paesi del mondo, aiutandoli ad ampliare la presenza sui mercati internazionali.",
    "about.story.p5": "Siamo orgogliosi delle nostre radici italiane, custodiamo le tradizioni e crediamo che la vera qualità non conosca confini.",
    "about.story.quote": "EasyItalia — colleghiamo l’Italia al mondo attraverso qualità, tradizione e gusto.",
    "about.timeline.kicker": "Tappe", "about.timeline.title": "Il percorso dell’azienda",
    "about.timeline.1t": "2019 — Fondazione in Toscana",
    "about.timeline.1p": "L’azienda nasce in una delle capitali gastronomiche d’Italia, con un focus sulle forniture all’estero.",
    "about.timeline.2t": "Prime spedizioni — Asia e CSI",
    "about.timeline.2p": "I primi progetti di fornitura alimentare ai mercati asiatici e della CSI. Conoscenza pratica dei requisiti d’importazione e di certificazione.",
    "about.timeline.3t": "Crescita fino a distributore internazionale",
    "about.timeline.3p": "Partnership affidabili e conoscenza dei mercati permettono di ampliare il portafoglio e la geografia delle consegne.",
    "about.timeline.4t": "Oggi — i brand italiani nel mondo",
    "about.timeline.4p": "EasyItaly rappresenta e distribuisce i prodotti di rinomati brand italiani, aiutandoli a crescere sui mercati internazionali.",
    "about.values.kicker": "Valori", "about.values.title": "In cosa crediamo",
    "about.values.1t": "Qualità senza confini", "about.values.1p": "Crediamo che la vera qualità non conosca confini. Ogni prodotto del portafoglio è verificato.",
    "about.values.2t": "Tradizione e gusto", "about.values.2p": "Custodiamo le tradizioni culinarie delle regioni italiane e le portiamo sui nuovi mercati.",
    "about.values.3t": "Partnership di lungo periodo", "about.values.3p": "Costruiamo relazioni in cui crescono sia il produttore sia l’importatore.",
    "about.values.4t": "Professionalità nei dettagli", "about.values.4p": "Dalla documentazione di esportazione all’etichettatura dei pallet — attenzione ai dettagli a ogni passo.",
    "about.cta.text": "La storia continua — e il vostro marchio o il vostro mercato possono diventarne parte.",

    "brands.hero.eyebrow": "Brand e portafoglio", "brands.hero.title": "Il gusto dell’Italia — per categoria",
    "brands.hero.lead": "EasyItaly distribuisce i prodotti di rinomati brand italiani e li aiuta a entrare su nuovi mercati. Di seguito le categorie del nostro portafoglio.",
    "brands.filter.all": "Tutti", "brands.filter.pasta": "Pasta", "brands.filter.sauces": "Salse e oli",
    "brands.filter.gastronomy": "Gastronomia", "brands.filter.sweets": "Dolci e tè",
    "brands.filter.drinks": "Bevande", "brands.filter.grocery": "Alimenti e snack",
    "brands.note": "La griglia mostra le categorie del portafoglio. I nomi dei brand specifici si comunicano su richiesta con NDA — contattateci.",
    "brands.c1tag": "Pasta", "brands.c1t": "Pasta", "brands.c1p": "Pasta di grano duro trafilata al bronzo dai principali produttori di Toscana, Campania e Gragnano.",
    "brands.c2tag": "Salse", "brands.c2t": "Creme e salse", "brands.c2p": "Salse di pomodoro, creme e basi pronte per la gastronomia della cucina italiana.",
    "brands.c3tag": "Oli", "brands.c3t": "Condimenti, olio e dressing", "brands.c3p": "Olio extravergine di oliva, aceto balsamico di Modena, condimenti e dressing.",
    "brands.c4tag": "Gastronomia", "brands.c4t": "Formaggi", "brands.c4p": "Formaggi italiani stagionati — per retail, HoReCa e boutique gastronomiche.",
    "brands.c4btag": "Gastronomia", "brands.c4bt": "Salumi", "brands.c4bp": "Prosciutto, salame e salumi stagionati — la linea gastronomia del portafoglio.",
    "brands.c5tag": "Bevande", "brands.c5t": "Vino", "brands.c5p": "Chianti, Vermentino e altri vini delle denominazioni toscane e italiane.",
    "brands.c6tag": "Bevande", "brands.c6t": "Caffè", "brands.c6p": "Tostature italiane in grani, macinato e capsule — per la casa e l’HoReCa.",
    "brands.c7tag": "Bevande", "brands.c7t": "Bevande", "brands.c7p": "Acque minerali, bibite gassate, aperitivi italiani e succhi.",
    "brands.c8tag": "Dolci", "brands.c8t": "Dolci e pasticceria", "brands.c8p": "Cioccolato, praline, panettone, cantucci e dolci classici italiani.",
    "brands.c9tag": "Tè", "brands.c9t": "Tè", "brands.c9p": "Tè in foglia e infusi premium — per retail e HoReCa.",
    "brands.c10tag": "Alimenti", "brands.c10t": "Generi alimentari", "brands.c10p": "Riso, polenta, legumi, conserve e capisaldi della cucina italiana.",
    "brands.c11tag": "Snack", "brands.c11t": "Snack", "brands.c11p": "Grissini, taralli, cracker e snack in formati di confezionamento moderni.",
    "brands.cta.text": "Volete ricevere il listino prezzi aggiornato e l’assortimento per il vostro mercato?",

    "markets.hero.eyebrow": "Mercati", "markets.hero.title": "Asia e CSI — la nostra geografia focus",
    "markets.hero.lead": "EasyItaly è nata con le forniture ai paesi dell’Asia e della CSI. Conosciamo dall’interno i requisiti di questi mercati: certificazione, etichettatura, cultura commerciale.",
    "markets.regions.kicker": "Geografia", "markets.regions.title": "Dove viaggiano i prodotti",
    "markets.regions.1t": "Asia", "markets.regions.1p": "Forniture di prodotti alimentari italiani ai mercati asiatici: adattamento di documentazione, certificazione e packaging ai requisiti di ogni paese.",
    "markets.regions.2t": "CSI", "markets.regions.2p": "Corridoi di fornitura consolidati e profonda comprensione delle specificità commerciali della regione, delle regole doganali e della cultura d’importazione.",
    "markets.entry.kicker": "Ingresso sul mercato", "markets.entry.title": "Come entriamo su un nuovo mercato",
    "markets.entry.sub": "Un processo trasparente — sapete sempre in quale fase si trova il vostro prodotto:",
    "markets.entry.1t": "Audit del prodotto", "markets.entry.1p": "Valutiamo il potenziale dell’assortimento sul mercato di riferimento: domanda, concorrenza, segmento di prezzo.",
    "markets.entry.2t": "Certificazione e documenti", "markets.entry.2p": "Prepariamo la documentazione di esportazione, i certificati di origine e di conformità richiesti dal paese di destinazione.",
    "markets.entry.3t": "Adattamento ed etichettatura", "markets.entry.3p": "Etichettatura e riconfezionamento secondo i requisiti del mercato di destinazione, compreso l’adattamento del packaging.",
    "markets.entry.4t": "Spedizione pilota", "markets.entry.4p": "Un lotto pilota con supporto logistico completo — dal piazzamento dell’ordine alla consegna a destinazione.",
    "markets.entry.5t": "Sviluppo della distribuzione", "markets.entry.5p": "Ricerca di partner e distributori, supporto delle forniture regolari e crescita dell’assortimento.",
    "markets.logistics.kicker": "Documentazione e logistica", "markets.logistics.title": "Soluzioni logistiche complete",
    "markets.logistics.p1": "EasyItaly Srl offre soluzioni logistiche complete che vanno oltre la distribuzione standard. Accompagniamo i clienti in tutte le fasi delle spedizioni all’estero, garantendo un servizio professionale e un approccio individuale a ogni ordine.",
    "markets.logistics.i1t": "Etichettatura e riconfezionamento", "markets.logistics.i1p": "Preparazione dei prodotti secondo i requisiti del mercato di destinazione, inclusa l’etichettatura e l’adattamento del packaging.",
    "markets.logistics.i2t": "Carico manuale", "markets.logistics.i2p": "Organizzazione del carico manuale, tenendo conto delle caratteristiche dei prodotti e dei requisiti del cliente.",
    "markets.logistics.i3t": "Consulenza logistica", "markets.logistics.i3p": "Scelta delle soluzioni logistiche ottimali in base ai termini, al budget e alle specificità della spedizione.",
    "markets.logistics.i4t": "Sdoganamento", "markets.logistics.i4p": "Preparazione della documentazione di esportazione e assistenza nelle procedure doganali.",
    "markets.logistics.mtitle": "Trasporti internazionali",
    "markets.logistics.mtext": "Organizziamo la consegna con diversi mezzi di trasporto. Per ogni cliente scegliamo il percorso e il mezzo ottimali, tenendo conto delle caratteristiche del carico, della geografia, dei termini e del budget.",
    "markets.logistics.m1": "Trasporti marittimi", "markets.logistics.m2": "Trasporti su strada",
    "markets.logistics.m3": "Trasporti aerei", "markets.logistics.m4": "Trasporti ferroviari",
    "markets.logistics.m5": "Trasporti multimodali",
    "markets.logistics.quote": "EasyItaly Srl — rendiamo il commercio internazionale più semplice, garantendo il supporto a ciclo completo dei vostri prodotti dall’Italia al mercato finale.",
    "markets.logistics.p2": "La nostra esperienza e la conoscenza dei mercati internazionali danno ai clienti la certezza di un approccio professionale, affidabilità e attenzione ai dettagli.",
    "markets.cta.text": "Parliamo delle forniture al vostro mercato — dai documenti all’ultimo miglio.",

    "producers.hero.eyebrow": "Per i produttori", "producers.hero.title": "Come entrare nel nostro portafoglio",
    "producers.hero.lead": "Apriamo nuove opportunità ai vostri prodotti e aiutiamo ad aumentare le vendite — con il supporto completo a ogni fase della collaborazione.",
    "producers.offers.kicker": "Cosa offriamo", "producers.offers.title": "Il vostro ufficio export — senza assumere personale",
    "producers.offers.sub": "EasyItaly si assume tutto il percorso del prodotto oltre i confini italiani — dai documenti allo scaffale di un altro continente.",
    "producers.offers.1t": "Accesso a mercati in crescita", "producers.offers.1p": "Canali di fornitura consolidati in Asia e CSI e comprensione delle specificità commerciali delle regioni.",
    "producers.offers.2t": "Regolamentazione export", "producers.offers.2p": "Documentazione di esportazione, procedure doganali, certificazione — tutta la routine documentale ci assumiamo noi.",
    "producers.offers.3t": "Adattamento del prodotto", "producers.offers.3p": "Etichettatura e riconfezionamento secondo i requisiti del mercato di destinazione, adattamento del packaging.",
    "producers.offers.4t": "Sostegno alla distribuzione", "producers.offers.4p": "Ricerca di partner e distributori, sostegno al vostro marchio sui mercati di riferimento.",
    "producers.steps.kicker": "Come funziona", "producers.steps.title": "La via al portafoglio — cinque passi",
    "producers.steps.1t": "Conoscenza", "producers.steps.1p": "Trasmettete le informazioni sull’azienda e la linea di prodotti: assortimento, certificati, foto della produzione.",
    "producers.steps.2t": "Valutazione", "producers.steps.2p": "Valutiamo la qualità, il potenziale export e la conformità ai requisiti dei mercati di riferimento.",
    "producers.steps.3t": "Condizioni commerciali", "producers.steps.3p": "Concordiamo il formato di collaborazione: distribuzione, termini di consegna, volumi minimi.",
    "producers.steps.4t": "Documenti e logistica", "producers.steps.4p": "Prepariamo la documentazione di esportazione e scegliamo lo schema di trasporto ottimale.",
    "producers.steps.5t": "Lancio e crescita", "producers.steps.5p": "Spedizione pilota, sviluppo della distribuzione ed espansione verso nuovi paesi.",
    "producers.req.kicker": "Requisiti", "producers.req.title": "Cosa è importante per noi",
    "producers.req.li1": "Qualità stabile del prodotto e processo produttivo consolidato",
    "producers.req.li2": "Certificazione HACCP / ISO e prontezza al flusso documentale export",
    "producers.req.li3": "Capacità di sostenere volumi export regolari",
    "producers.req.li4": "Politica dei prezzi competitiva per il mercato di riferimento",
    "producers.req.li5": "Orientamento alla partnership di lungo periodo e allo sviluppo del marchio",
    "producers.cta.text": "Pronti a discutere l’ingresso dei vostri prodotti nel nostro portafoglio? Inviate una richiesta — vi ricontatteremo.",

    "partners.hero.eyebrow": "Per importatori e distributori", "partners.hero.title": "Condizioni di distribuzione",
    "partners.hero.lead": "Per le aziende importatrici e i distributori che vogliono portare un assortimento italiano autentico sul proprio mercato.",
    "partners.benefits.kicker": "I vostri vantaggi", "partners.benefits.title": "Cosa riceve il partner",
    "partners.benefits.sub": "Guidiamo il partner attraverso l’intera catena — dal primo ordine alle forniture regolari.",
    "partners.benefits.1t": "Portafoglio italiano", "partners.benefits.1p": "Assortimento selezionato di brand italiani in 10+ categorie — dalla pasta e dagli oli ai vini e al caffè.",
    "partners.benefits.2t": "Logistica chiavi in mano", "partners.benefits.2p": "Documentazione di esportazione, dogana, etichettatura e consegna via mare, strada, aereo, ferrovia o multimodale.",
    "partners.benefits.3t": "Supporto marketing", "partners.benefits.3p": "Materiali, formazione sull’assortimento, aiuto nei lanci e nel lavoro con le catene retail.",
    "partners.benefits.4t": "Manager personale", "partners.benefits.4p": "Un manager dedicato alla vostra attività — dalla prima richiesta a ogni spedizione.",
    "partners.why.kicker": "Perché noi", "partners.why.title": "Quattro ragioni",
    "partners.why.1t": "Produttori affidabili", "partners.why.1p": "Lavoriamo con produttori di primo livello in Italia, Francia, Belgio e Spagna.",
    "partners.why.2t": "Logistica affidabile", "partners.why.2p": "Consegna puntuale e sicura dei prodotti.",
    "partners.why.3t": "Supporto completo", "partners.why.3p": "Supporto dedicato ai partner in ogni fase.",
    "partners.why.4t": "Qualità premium", "partners.why.4p": "Solo i prodotti migliori e verificati.",
    "partners.terms.kicker": "Formato di collaborazione", "partners.terms.title": "Condizioni di distribuzione",
    "partners.terms.li1": "Contratto quadro con condizioni e formazione dei prezzi trasparenti",
    "partners.terms.li2": "Spedizioni consolidate e pilota per l’inizio della collaborazione",
    "partners.terms.li3": "Volumi minimi flessibili a seconda della categoria e del mercato",
    "partners.terms.li4": "Incoterms: EXW / FCA / FOB / CIF — come concordato",
    "partners.terms.li5": "Esclusività territoriale possibile al raggiungimento dei volumi concordati",
    "partners.terms.li6": "Selezione dell’assortimento secondo le specificità del vostro mercato",
    "partners.cta.text": "Scriveteci per ricevere un’offerta commerciale adattata al vostro mercato.",

    "contacts.hero.eyebrow": "Contatti", "contacts.hero.title": "Scriveteci",
    "contacts.hero.lead": "Inviate una richiesta in russo o in inglese — le richieste commerciali le esaminiamo entro due giorni lavorativi.",
    "contacts.form.kicker": "Modulo di richiesta", "contacts.form.title": "Scrivete a noi",
    "contacts.form.name": "Il vostro nome", "contacts.form.namePh": "Nome e cognome",
    "contacts.form.company": "Azienda", "contacts.form.companyPh": "Nome dell’azienda",
    "contacts.form.country": "Paese / mercato", "contacts.form.countryPh": "ad es. Kazakhstan",
    "contacts.form.email": "E-mail", "contacts.form.emailPh": "nome@azienda.com",
    "contacts.form.role": "Voi siete",
    "contacts.form.role1": "Produttore (voglio entrare nel portafoglio)",
    "contacts.form.role2": "Importatore / distributore (mi interessa il portafoglio)",
    "contacts.form.role3": "Altra richiesta",
    "contacts.form.lang": "Lingua preferita",
    "contacts.form.msg": "Messaggio", "contacts.form.msgPh": "In breve la vostra richiesta: prodotti, volumi, mercato…",
    "contacts.form.btn": "Invia richiesta",
    "contacts.form.success": "Il modulo è pronto. Premete «Invia» — si aprirà il client di posta con la richiesta precompilata.",
    "contacts.form.note": "Il modulo funziona via e-mail. Per la versione di produzione, collegarlo a un servizio di posta.",
    "contacts.info.kicker": "Contatti diretti", "contacts.info.title": "EasyItaly Srl",
    "contacts.info.role": "Distributore internazionale di prodotti alimentari",
    "contacts.info.since": "Fondata nel 2019 · Toscana, Italia",
    "contacts.info.addressT": "Ufficio", "contacts.info.address": "Toscana, Italia (indirizzo da aggiungere dai documenti aziendali)",
    "contacts.info.emailT": "E-mail", "contacts.info.email": "manager@easyitaly.info",
    "contacts.info.phoneT": "Telefono", "contacts.info.phone": "+39 XXX XXX XXXX — da aggiungere",
    "contacts.info.langsT": "Lingue", "contacts.info.langs": "Russo, inglese, italiano — conduciamo le trattative nella lingua più comoda per voi",
    "contacts.markets.kicker": "Direzioni", "contacts.markets.title": "Con quali mercati lavoriamo",
    "contacts.markets.p": "Il focus principale sono i paesi dell’Asia e della CSI. Se il vostro mercato non è nell’elenco — scrivete comunque: apriamo regolarmente nuove direzioni."
  };


  /* ------------------- UZ словарь ------------------- */
  var UZ = {
    "nav.home": "Bosh sahifa", "nav.about": "Kompaniya haqida", "nav.brands": "Brendlar va portfel",
    "nav.markets": "Bozorlar", "nav.producers": "Ishlab chiqaruvchilarga", "nav.partners": "Hamkorlarga",
    "nav.contacts": "Aloqa",
    "topbar.tagline": "EasyItaly Srl — xalqaro oziq-ovqat distributori, Toskana, Italiya",
    "topbar.since": "2019-yilda tashkil etilgan · Toskana, Italiya",
    "cta.become": "Hamkor boʻlish", "cta.submit": "Ariza yuborish",
    "cta.title": "Italiyani sizning bozoringiz bilan bogʻlaymiz",
    "footer.about": "EasyItaly — Italiyaning premium oziq-ovqat mahsulotlari xalqaro distributori: Italiya ishlab chiqaruvchilarini Osiyo va MDH hamkorlari bilan bogʻlaydi. 2019-yilda Toskanada tashkil etilgan.",
    "footer.nav": "Navigatsiya", "footer.services": "Xizmatlar", "footer.contacts": "Aloqa",
    "footer.export": "Eksport hujjatlari", "footer.customs": "Bojxona rasmiylashtiruvi", "footer.labelling": "Belgilash va qayta qadoqlash",
    "footer.logistics": "Logistika maslahati", "footer.transport": "Xalqaro tashish",
    "footer.address": "Toskana, Italiya (toʷliq manzil qoʷshiladi)".replace("ʷ", "ʻ"),
    "footer.email": "manager@easyitaly.info",
    "footer.rights": "© 2026 EasyItaly Srl. Barcha huquqlar himoyalangan.",
    "footer.demo": "Sayt loyihasi: aloqa maʻlumotlari vaqtincha.",

    "home.hero.eyebrow": "Toskana, Italiya · 2019-yilda tashkil etilgan",
    "home.hero.title": "Connecting Italy to the World",
    "home.hero.lead": "EasyItaly — Italiya gastronomik mahsulotlarining xalqaro distributori. Italiya taʻmini Osiyo va MDH bozorlariga olib boramiz — sifat, anʻana va har bir yetkazib berishga eʻtibor.",
    "home.hero.btn": "Hamkor boʻlish", "home.hero.btn2": "Bizning portfel",
    "home.stats.1num": "2019", "home.stats.1lbl": "Toskanada tashkil etilgan yil",
    "home.stats.2num": "2", "home.stats.2lbl": "asosiy yoʻnalish — Osiyo va MDH",
    "home.stats.3num": "10+", "home.stats.3lbl": "portfeldagi mahsulot toifasi",
    "home.stats.4num": "5", "home.stats.4lbl": "xalqaro tashish turi",
    "home.mission.kicker": "Bizning missiya", "home.mission.title": "Italiya taʻmi — dunyoga ochiq",
    "home.mission.p1": "EasyItaly 2019-yilda Toskananing oʻrtasida — oshpazlik anʻanalari, mahsulot sifati va taʻm madaniyati bilan mashhur, Italiyaning gastronomik marvaridlaridan biri hisoblanadigan viloyatda tashkil etilgan.",
    "home.mission.p2": "Bizning missiyamiz — xalqaro bozorlarni Italiyada ishlab chiqarilgan eng yaxshi mahsulotlar bilan tanishtirish. Italiya ishlab chiqaruvchilarini butun dunyodagi hamkorlar va isteʻmolchilar bilan birlashtiramiz.",
    "home.mission.btn": "Kompaniya haqida batafsil",
    "home.why.kicker": "Nega biz", "home.why.title": "Suyanadigan hamkor",
    "home.why.sub": "Obroʻmiz toʻrt tamoyilga asoslangan:",
    "home.why.1t": "Ishonchli ishlab chiqaruvchilar", "home.why.1p": "Italiya, Fransiya, Belgiya va Ispaniyadagi yetakchi ishlab chiqaruvchilar bilan hamkorlik qilamiz.",
    "home.why.2t": "Ishonchli logistika", "home.why.2p": "Mahsulotlarni oʻz vaqtida va xavfsiz yetkazib berish.",
    "home.why.3t": "Toʻliq qoʻllab-quvvatlash", "home.why.3p": "Biznesingiz uchun shaxsiy hamkor yordami.",
    "home.why.4t": "Premium sifat", "home.why.4p": "Faqat eng yaxshi va tekshirilgan mahsulotlar.",
    "home.portfolio.kicker": "Portfel", "home.portfolio.title": "Distributsiya qiladigan toifalarimiz",
    "home.portfolio.sub": "Bronza bosqa makarondan Chianti vinolariga qadar — Italiya viloyatlari anʻanalariga asoslangan portfel.",
    "home.portfolio.btn": "Barcha toifalar",
    "home.cat.pasta.tag": "Makaron", "home.cat.pasta.t": "Makaron", "home.cat.pasta.p": "Italiya yetakchi zavodlaridan durum bugʻdoyi, bronza bosqa makaroni.",
    "home.cat.oil.tag": "Yogʻ", "home.cat.oil.t": "Zaytun yogʻi", "home.cat.oil.p": "Extra virgin — birinchi sovuq siqish, Italiya taʻm madaniyatining asosi.",
    "home.cat.cheese.tag": "Pishloq", "home.cat.cheese.t": "Pishloqlar", "home.cat.cheese.p": "Italiya yetishtirilgan pishloqlar — chakana savdo va gastronomiya uchun.",
    "home.cat.charcuterie.tag": "Gastronomiya", "home.cat.charcuterie.t": "Goʻsht delikatessalari", "home.cat.charcuterie.p": "Proshutto va salyami — Italiya gastronomik delikatessalari.",
    "home.cat.wine.tag": "Vino", "home.cat.wine.t": "Vino", "home.cat.wine.p": "Chianti, Vermentino va boshqa Italiya apellyatsiya vinolari.",
    "home.cat.coffee.tag": "Kofe", "home.cat.coffee.t": "Kofe", "home.cat.coffee.p": "Italiya kofe qovurmalari: don, maydalangan va kapsulada.",
    "home.cat.sweets.tag": "Shirinliklar", "home.cat.sweets.t": "Shirinliklar", "home.cat.sweets.p": "Shokolad va Italiya klassik shirinliklari.",
    "home.cat.grocery.tag": "Bakaleya", "home.cat.grocery.t": "Bakaleya", "home.cat.grocery.p": "Guruch, polenta, dukkakli va Italiya oshxonasi asoslari.",
    "home.logistics.kicker": "Logistika", "home.logistics.title": "Toskanadan — xaritadagi har qanday nuqtaga",
    "home.logistics.text": "EasyItaly Srl standart distributsiyadan tashqari kompleks logistika yechimlarini taklif etadi: belgilash va qayta qadoqlash, eksport hujjatlari, bojxona rasmiylashtiruvi va buyurtmani toʻliq kuzatish — joylashtirishdan yetkazib berishgacha.",
    "home.logistics.li1": "Dengiz tashishlari", "home.logistics.li2": "Avtotransport tashishlari",
    "home.logistics.li3": "Aviatsiya tashishlari", "home.logistics.li4": "Temir yoʻl tashishlari",
    "home.logistics.li5": "Multimodal tashishlar",
    "home.logistics.btn": "Logistika va hujjatlar",
    "home.cta.text": "Biz yangi hamkorlarga ochiqmiz — Osiyo va MDH bozorlariga chiqmoqchi boʻlgan ishlab chiqaruvchilar hamda ishonchli Italiya portfelini izlovchi importyorlar uchun.",

    "about.hero.eyebrow": "Kompaniya haqida", "about.hero.title": "Bizning tarix",
    "about.hero.lead": "EasyItaly — Italiya taʻmi, dunyoga ochiq.",
    "about.story.title": "Toskanadan — xalqaro bozorlarga",
    "about.story.p1": "EasyItaly 2019-yilda Toskananing oʻrtasida — oshpazlik anʻanalari, yuqori mahsulot sifati va taʻm madaniyati bilan mashhur, Italiyaning gastronomik marvaridlaridan biri hisoblanadigan viloyatda tashkil etilgan.",
    "about.story.p2": "Dastlabki kundan missiyamiz xalqaro bozorlarni Italiyada ishlab chiqarilgan eng yaxshi mahsulotlar bilan tanishtirish boʻlgan. Oziq-ovqat mahsulotlarini Osiyo va MDH davlatlariga yetkazib berishdan boshlaganmiz, Italiya ishlab chiqaruvchilarini butun dunyo hamkorlari va isteʻmolchilari bilan birlashtirganmiz.",
    "about.story.p3": "Italiya bozorini chuqur bilish, ishonchli hamkorlik aloqalari va mukammallikka intilish tufayli EasyItaly asta-sekin xalqaro distributsion kompaniyaga aylandi.",
    "about.story.p4": "Bugun EasyItaly mashhur Italiya brendlarining mahsulotlarini dunyoning turli davlatlarida taqdim etadi va distributsiya qiladi, ularga xalqaro bozorlarda faoliyatini kengaytirishda yordam beradi.",
    "about.story.p5": "Italya ildizlarimizdan faxrlanamiz, anʻanalarni qadrlaymiz va hakikiy sifat chegaralarni tanimaydi, deb ishonamiz.",
    "about.story.quote": "EasyItaly — sifat, anʻana va taʻm orqali Italiyani dunyo bilan bogʻlaymiz.",
    "about.timeline.kicker": "Bosqichlar", "about.timeline.title": "Kompaniya yoʻli",
    "about.timeline.1t": "2019 — Toskanada tashkil etilishi",
    "about.timeline.1p": "Kompaniya Italiyaning gastronomik poytaxtlaridan birida, eksport yetkazib berishga fokus bilan tashkil etildi.",
    "about.timeline.2t": "Birinchi yetkazib berishlar — Osiyo va MDH",
    "about.timeline.2p": "Osiyo va MDH bozorlariga oziq-ovqat yetkazib berishning birinchi loyihalari. Import talablari va sertifikatlashtirish boʻyicha amaliy bilimlar.",
    "about.timeline.3t": "Xalqaro distributorga aylanish",
    "about.timeline.3p": "Ishonchli hamkorlik va bozorlarni bilish portfelni va yetkazib berish geografiyasini kengaytirish imkonini berdi.",
    "about.timeline.4t": "Bugun — Italiya brendlari butun dunyoda",
    "about.timeline.4p": "EasyItaly mashhur Italiya brendlari mahsulotlarini taqdim etadi va distributsiya qiladi, ularga xalqaro bozorlarda oʻsishga yordam beradi.",
    "about.values.kicker": "Qadriyatlar", "about.values.title": "Nimaga ishonamiz",
    "about.values.1t": "Chegarasiz sifat", "about.values.1p": "Hakikiy sifat chegaralarni tanimaydi, deb ishonamiz. Portfeldagi har bir mahsulot tekshirilgan.",
    "about.values.2t": "Anʻana va taʻm", "about.values.2p": "Italiya viloyatlari oshpazlik anʻanalarini asraymiz va ularni yangi bozorlarga yetkazamiz.",
    "about.values.3t": "Uzoq muddatli hamkorlik", "about.values.3p": "Ham ishlab chiqaruvchi, ham importyor oʻsadigan munosabatlarni quramiz.",
    "about.values.4t": "Tafsilotlarda professionalizm", "about.values.4p": "Eksport hujjatlaridan pallet belgilashigacha — har bir bosqichda tafsilotlarga eʻtibor.",
    "about.cta.text": "Tarix davom etadi — va sizning brendingiz yoki bozoringiz uning bir qismi boʻlishi mumkin.",

    "brands.hero.eyebrow": "Brendlar va portfel", "brands.hero.title": "Italiya taʻmi — toifalar boʻyicha",
    "brands.hero.lead": "EasyItaly mashhur Italiya brendlarining mahsulotlarini distributsiya qiladi va ularga yangi bozorlarga chiqishda yordam beradi. Quyida portfelimiz toifalari.",
    "brands.filter.all": "Barchasi", "brands.filter.pasta": "Makaron", "brands.filter.sauces": "Souslar va yogʻlar",
    "brands.filter.gastronomy": "Gastronomiya", "brands.filter.sweets": "Shirinliklar va choy",
    "brands.filter.drinks": "Ichimliklar", "brands.filter.grocery": "Bakaleya va yengil yeyishlar",
    "brands.note": "Jadval portfel toifalarini koʻrsatadi. Aniq brend nomlari NDA shartida soʻrov boʻyicha beriladi — biz bilan bogʻlaning.",
    "brands.c1tag": "Makaron", "brands.c1t": "Makaron", "brands.c1p": "Toskana, Kampaniya va Granyano yetakchi ishlab chiqaruvchilaridan durum bugʻdoyi, bronza bosqa makaroni.",
    "brands.c2tag": "Souslar", "brands.c2t": "Krem va souslar", "brands.c2p": "Pomidor souslari, kremlar va Italiya oshxonasi gastronomiyasi uchun tayyor asoslar.",
    "brands.c3tag": "Yogʻlar", "brands.c3t": "Ziravorlar, yogʻ va souslar", "brands.c3p": "Zaytun yogʻi extra virgin, Modena balsam sirka, ziravorlar va souslar.",
    "brands.c4tag": "Gastronomiya", "brands.c4t": "Pishloqlar", "brands.c4p": "Italiya yetishtirilgan pishloqlar — chakana savdo, HoReCa va gastro-butiklar uchun.",
    "brands.c4btag": "Gastronomiya", "brands.c4bt": "Goʻsht delikatessalari", "brands.c4bp": "Proshutto, salyami va yetishtirilgan goʻsht mahsulotlari — portfelning gastronomik yoʻnalishi.",
    "brands.c5tag": "Ichimliklar", "brands.c5t": "Vino", "brands.c5p": "Chianti, Vermentino va boshqa Toskana va Italiya apellyatsiya vinolari.",
    "brands.c6tag": "Ichimliklar", "brands.c6t": "Kofe", "brands.c6p": "Italiya kofe qovurmalari: don, maydalangan va kapsulada — uy va HoReCa uchun.",
    "brands.c7tag": "Ichimliklar", "brands.c7t": "Ichimliklar", "brands.c7p": "Mineral suvlar, gazlangan ichimliklar, Italiya aperitivlari va sharbatlar.",
    "brands.c8tag": "Shirinliklar", "brands.c8t": "Shirinliklar va qandolat", "brands.c8p": "Shokolad, pralin, panetton, kantuchchi va Italiya klassik shirinliklari.",
    "brands.c9tag": "Choy", "brands.c9t": "Choy", "brands.c9p": "Premyum barg choy va oʻtxona damlamalari — chakana savdo va HoReCa uchun.",
    "brands.c10tag": "Bakaleya", "brands.c10t": "Bakaleya", "brands.c10p": "Guruch, polenta, dukkakli, konservalar va Italiya oshxonasi asoslari.",
    "brands.c11tag": "Yengil yeyishlar", "brands.c11t": "Yengil yeyishlar", "brands.c11p": "Grissini, taralli, krekerlar va zamonaviy qadoq formatidagi yengil yeyishlar.",
    "brands.cta.text": "Bozoringiz uchun joriy narxlarni va assortimentni olishni istaysizmi?",

    "markets.hero.eyebrow": "Bozorlar", "markets.hero.title": "Osiyo va MDH — bizning asosiy geografiyamiz",
    "markets.hero.lead": "EasyItaly Osiyo va MDH davlatlariga yetkazib berishdan boshlangan. Bu bozorlar talablarini ichkaridan bilamiz: sertifikatlashtirish, belgilash, savdo madaniyati.",
    "markets.regions.kicker": "Geografiya", "markets.regions.title": "Mahsulotlar qayerga yoʻlaladi",
    "markets.regions.1t": "Osiyo", "markets.regions.1p": "Italiya oziq-ovqat mahsulotlarini Osiyo bozorlariga yetkazib berish: hujjatlar, sertifikatlashtirish va qadoqni har bir davlat talablariga moslashtirish.",
    "markets.regions.2t": "MDH", "markets.regions.2p": "Ishlangan yetkazib berish yoʻnalishlari va mintaqa savdo xususiyatlari, bojxona qoidalari va import madaniyatini chuqur tushunish.",
    "markets.entry.kicker": "Bozorga kirish", "markets.entry.title": "Yangi bozorga qanday chiqamiz",
    "markets.entry.sub": "Shaffof jarayon — mahsulotingiz qaysi bosqichdaligini har doim bilasiz:",
    "markets.entry.1t": "Mahsulot auditi", "markets.entry.1p": "Assortiment potensialini maqsadli bozorda baholaymiz: talab, raqobat, narx segmenti.",
    "markets.entry.2t": "Sertifikatlashtirish va hujjatlar", "markets.entry.2p": "Manzil davlati talab qiladigan eksport hujjatlarini, kelib chiqish va sifat sertifikatlarini tayyorlaymiz.",
    "markets.entry.3t": "Moslashtirish va belgilash", "markets.entry.3p": "Manzil bozori talablariga muvofiq belgilash va qayta qadoqlash, qadoqni moslashtirish bilan birga.",
    "markets.entry.4t": "Sinov yetkazib berishi", "markets.entry.4p": "Toʻliq logistika kuzatuvi bilan pilot partiya — buyurtma joylashtirishdan manzilga yetkazishgacha.",
    "markets.entry.5t": "Distributsiyani rivojlantirish", "markets.entry.5p": "Hamkorlar va distribyutorlarni izlash, muntazam yetkazib berishlarni qoʻllab-quvvatlash va assortimentni oshirish.",
    "markets.logistics.kicker": "Hujjatlar va logistika", "markets.logistics.title": "Kompleks logistika yechimlari",
    "markets.logistics.p1": "EasyItaly Srl standart distributsiyadan tashqari kompleks logistika yechimlarini taklif etadi. Mijozlarimizni eksport yetkazib berishlarining barcha bosqichlarida kuzatib boramiz, har bir buyurtmaga professional xizmat va individual yondashuv kafolatlaymiz.",
    "markets.logistics.i1t": "Belgilash va qayta qadoqlash", "markets.logistics.i1p": "Manzil bozori talablariga muvofiq mahsulotni tayyorlash, belgilashni qoʻyish va qadoqni moslashtirishni oʻz ichiga oladi.",
    "markets.logistics.i2t": "Qoʻlda yuklash", "markets.logistics.i2p": "Mahsulot xususiyatlari va mijoz talablarini hisobga olgan holda qoʻlda yuklashni tashkil etish.",
    "markets.logistics.i3t": "Logistika maslahati", "markets.logistics.i3p": "Muddat, byudjet va yetkazib berish xususiyatlarini hisobga olgan holda optimal logistika yechimlarini tanlash.",
    "markets.logistics.i4t": "Bojxona rasmiylashtiruvi", "markets.logistics.i4p": "Eksport hujjatlarini tayyorlash va bojxona protseduralarini kuzatib borish.",
    "markets.logistics.mtitle": "Xalqaro tashishlar",
    "markets.logistics.mtext": "Mahsulotni turli transport turlari bilan yetkazib beramiz. Har bir mijoz uchun yuk xususiyatlarini, geografiyani, muddat va byudjetni hisobga olgan holda optimal marshrut va tashish usulini tanlaymiz.",
    "markets.logistics.m1": "Dengiz tashishlari", "markets.logistics.m2": "Avtotransport tashishlari",
    "markets.logistics.m3": "Aviatsiya tashishlari", "markets.logistics.m4": "Temir yoʻl tashishlari",
    "markets.logistics.m5": "Multimodal tashishlar",
    "markets.logistics.quote": "EasyItaly Srl — mahsulotingizni Italiyadan yakuniy bozorgacha toʻliq tsikl kuzatuvi bilan xalqaro savdoni soddalashtiramiz.",
    "markets.logistics.p2": "Tajriba va xalqaro bozorlarni bilish mijozlarga professional yondashuv, ishonchlilik va tafsilotlarga eʻtiborga ishonch beradi.",
    "markets.cta.text": "Bozoringizga yetkazib berishni muhokama qilamiz — hujjatlardan soʻnggi miliga qadar.",

    "producers.hero.eyebrow": "Ishlab chiqaruvchilarga", "producers.hero.title": "Portfelga qanday kirish mumkin",
    "producers.hero.lead": "Mahsulotlaringiz uchun yangi imkoniyatlar ochamiz va savdoni oshirishga yordam beramiz — hamkorlikning har bir bosqichida toʻliq qoʻllab-quvvatlash bilan.",
    "producers.offers.kicker": "Nima taklif qilamiz", "producers.offers.title": "Sizning eksport boʻlimingiz — xodim yollamasdan",
    "producers.offers.sub": "EasyItaly mahsulotning Italiya chegaralaridan tashqaridagi butun yoʻlini oʻz zimmasiga oladi — hujjatlardan boshqa qitʻadagi doʻkon javonigacha.",
    "producers.offers.1t": "Oʻsayotgan bozorlarga kirish", "producers.offers.1p": "Osiyo va MDHda ishlangan yetkazib berish kanallari va mintaqa savdo xususiyatlarini tushunish.",
    "producers.offers.2t": "Eksport tartibga solish", "producers.offers.2p": "Eksport hujjatlari, bojxona protseduralari, sertifikatlashtirish — butun hujjat ishini oʻz zimmasiga olamiz.",
    "producers.offers.3t": "Mahsulotni moslashtirish", "producers.offers.3p": "Manzil bozori talablariga muvofiq belgilash va qayta qadoqlash, qadoqni moslashtirish.",
    "producers.offers.4t": "Distributsiyani qoʻllash", "producers.offers.4p": "Hamkorlar va distribyutorlarni izlash, brendingizni maqsadli bozorlarda qoʻllab-quvvatlash.",
    "producers.steps.kicker": "Bu qanday ishlaydi", "producers.steps.title": "Portfelga yoʻl — besh qadam",
    "producers.steps.1t": "Tanishuv", "producers.steps.1p": "Kompaniya va mahsulotlar liniyasi haqida maʻlumot berasiz: assortiment, sertifikatlar, ishlab chiqarish suratlari.",
    "producers.steps.2t": "Baholash", "producers.steps.2p": "Sifatni, eksport potensialini va maqsadli bozorlar talablariga muvofiqligini baholaymiz.",
    "producers.steps.3t": "Tijorat shartlari", "producers.steps.3p": "Hamkorlik formatini kelishib olamiz: distributsiya, yetkazib berish shartlari, minimal hajmlar.",
    "producers.steps.4t": "Hujjatlar va logistika", "producers.steps.4p": "Eksport hujjatlarini tayyorlaymiz va optimal transport sxemasini tanlaymiz.",
    "producers.steps.5t": "Ishga tushirish va oʻsish", "producers.steps.5p": "Sinov yetkazib berishi, distributsiyani rivojlantirish va yangi davlatlarga kengayish.",
    "producers.req.kicker": "Talablar", "producers.req.title": "Biz uchun nima muhim",
    "producers.req.li1": "Mahsulot sifatining barqarorligi va osoyishta ishlab chiqarish jarayoni",
    "producers.req.li2": "HACCP / ISO sertifikati va eksport hujjat aylanishiga tayyorgarlik",
    "producers.req.li3": "Muntazam eksport hajmlarini taʻminlash quvvatlari",
    "producers.req.li4": "Maqsadli bozor uchun raqobatbardosh narx siyosati",
    "producers.req.li5": "Uzoq muddatli hamkorlik va brendni rivojlantirishga yoʻnaltirilganlik",
    "producers.cta.text": "Mahsulotlaringizning portfelga kirishini muhokama qilishga tayyormisiz? Ariza yuboring — biz siz bilan bogʻlanamiz.",

    "partners.hero.eyebrow": "Importyorlar va distribyutorlarga", "partners.hero.title": "Distributsiya shartlari",
    "partners.hero.lead": "Sovunlari borki, oʻz bozoriga autentik Italiya assortimentini olib kelmoqchi boʻlgan import kompaniyalari va distribyutorlar uchun.",
    "partners.benefits.kicker": "Sizning foydangiz", "partners.benefits.title": "Hamkor nimani oladi",
    "partners.benefits.sub": "Hamkorni butun zanjir boʻylab olib boramiz — birinchi buyurtmadan muntazam yetkazib berishlargacha.",
    "partners.benefits.1t": "Italiya portfeli", "partners.benefits.1p": "10+ toifadagi Italiya brendlari assortimentining tanlangan roʻyxati — makaron va yogʻlardan vinolar va kofegacha.",
    "partners.benefits.2t": "Tayyor logistika", "partners.benefits.2p": "Eksport hujjatlari, bojxona, belgilash va dengiz, avto, avia, temir yoʻl yoki multimodal yetkazib berish.",
    "partners.benefits.3t": "Marketing qoʻllab-quvvatlash", "partners.benefits.3p": "Materiallar, assortiment boʻyicha oʻquv treninglari, ishga tushirishlarda va tarmoq savdosi bilan ishlashda yordam.",
    "partners.benefits.4t": "Shaxsiy menejer", "partners.benefits.4p": "Biznesingiz uchun ajratilgan menejer — birinchi soʻrovdan har bir yetkazib berishgacha.",
    "partners.why.kicker": "Nega biz", "partners.why.title": "Toʻrt sabab",
    "partners.why.1t": "Ishonchli ishlab chiqaruvchilar", "partners.why.1p": "Italiya, Fransiya, Belgiya va Ispaniyadagi yetakchi ishlab chiqaruvchilar bilan hamkorlik qilamiz.",
    "partners.why.2t": "Ishonchli logistika", "partners.why.2p": "Mahsulotlarni oʻz vaqtida va xavfsiz yetkazib berish.",
    "partners.why.3t": "Toʻliq qoʻllab-quvvatlash", "partners.why.3p": "Hamkorlikning har bir bosqichida shaxsiy yordam.",
    "partners.why.4t": "Premium sifat", "partners.why.4p": "Faqat eng yaxshi va tekshirilgan mahsulotlar.",
    "partners.terms.kicker": "Hamkorlik formati", "partners.terms.title": "Distributsiya shartlari",
    "partners.terms.li1": "Shaffof shartlar va narx shakllanishi bilan ramkaviy shartnoma",
    "partners.terms.li2": "Hamkorlik boshlanishi uchun konsolidatsiyalangan va sinov yetkazib berishlar",
    "partners.terms.li3": "Toifa va bozorga qarab moslashgan minimal hajmlar",
    "partners.terms.li4": "Incoterms: EXW / FCA / FOB / CIF — kelishuv boʻyicha",
    "partners.terms.li5": "Kelishilgan hajmlarga yetganda hududiy ekskluzivlik imkoni",
    "partners.terms.li6": "Bozoringiz xususiyatlariga mos assortimentni tanlashda qoʻllab-quvvatlash",
    "partners.cta.text": "Bozoringizga moslashtirilgan tijorat taklifini olish uchun yozing.",

    "contacts.hero.eyebrow": "Aloqa", "contacts.hero.title": "Biz bilan bogʻlaning",
    "contacts.hero.lead": "Rus yoki ingliz tilida soʻrov qoldiring — biznes soʻrovlarni ikki ish kuni ichida koʻrib chiqamiz.",
    "contacts.form.kicker": "Soʻrov formasi", "contacts.form.title": "Bizga yozing",
    "contacts.form.name": "Ismingiz", "contacts.form.namePh": "Ism va familiya",
    "contacts.form.company": "Kompaniya", "contacts.form.companyPh": "Kompaniya nomi",
    "contacts.form.country": "Davlat / bozor", "contacts.form.countryPh": "masalan, Qozogʻiston",
    "contacts.form.email": "E-mail", "contacts.form.emailPh": "ism@kompaniya.com",
    "contacts.form.role": "Siz",
    "contacts.form.role1": "Ishlab chiqaruvchi (portfelga kirishni xohlayman)",
    "contacts.form.role2": "Importyor / distribyutor (portfel qiziqtiradi)",
    "contacts.form.role3": "Boshqa soʻrov",
    "contacts.form.lang": "Afzal koʻrilgan til",
    "contacts.form.msg": "Xabar", "contacts.form.msgPh": "Soʻrovingiz haqida qisqacha: mahsulotlar, hajmlar, bozor…",
    "contacts.form.btn": "Soʻrov yuborish",
    "contacts.form.success": "Forma tayyor. «Yuborish»ni bosing — tayyor xat bilan e-mail dasturi ochiladi.",
    "contacts.form.note": "Forma e-mail orqali ishlaydi. Saytni ishlab chiqarish versiyasi uchun pochta xizmatiga ulash kerak.",
    "contacts.info.kicker": "Toʻgʻridan-toʻgʻri aloqa", "contacts.info.title": "EasyItaly Srl",
    "contacts.info.role": "Oziq-ovqat mahsulotlarining xalqaro distributori",
    "contacts.info.since": "2019-yilda tashkil etilgan · Toskana, Italiya",
    "contacts.info.addressT": "Ofis", "contacts.info.address": "Toskana, Italiya (manzil kompaniya hujjatlaridan qoʻshiladi)",
    "contacts.info.emailT": "E-mail", "contacts.info.email": "manager@easyitaly.info",
    "contacts.info.phoneT": "Telefon", "contacts.info.phone": "+39 XXX XXX XXXX — qoʻshiladi",
    "contacts.info.langsT": "Tillar", "contacts.info.langs": "Rus, ingliz, italiya — sizga qulay tilda muzokara olib boramiz",
    "contacts.markets.kicker": "Yoʻnalishlar", "contacts.markets.title": "Qaysi bozorlar bilan ishlaymiz",
    "contacts.markets.p": "Asosiy fokus — Osiyo va MDH davlatlari. Bozoringiz roʻyxatda yoʼq boʻlsa — baribir yozing: yangi yoʻnalishlarni muntazam ochamiz."
  };

  /* ------------------- Шапка ------------------- */
  function buildHeader(page) {
    var el = document.getElementById("site-header");
    if (!el) return null;
    var nav = Object.keys(PAGES).map(function (k) {
      return '<a href="' + PAGES[k].file + '"' + (k === page ? ' class="active"' : '') + ' data-i18n="nav.' + k + '">' + PAGES[k].ru + '</a>';
    }).join("");
    el.innerHTML =
      '<div class="topbar"><div class="container">' +
        '<span data-i18n="topbar.tagline">EasyItaly Srl — международный дистрибьютор продуктов питания, Тоскана, Италия</span>' +
        '<span data-i18n="topbar.since">Основана в 2019 · Тоскана, Италия</span>' +
      '</div></div>' +
      '<header class="site-header"><div class="container header-inner">' +
        '<a class="logo" href="index.html"><img src="img/logo.png" alt="EasyItaly"></a>' +
        '<nav class="main-nav" id="main-nav">' + nav +
          '<a class="btn btn-primary btn-sm" href="contacts.html" data-i18n="cta.become">Стать партнёром</a>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<div class="lang-switch" id="lang-switch"><button data-lang="ru" class="active">RU</button><button data-lang="en">EN</button><button data-lang="it">IT</button><button data-lang="uz">UZ</button></div>' +
          '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div></header>';
    return el;
  }

  /* ------------------- Подвал ------------------- */
  function buildFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var nav = Object.keys(PAGES).map(function (k) {
      return '<li><a href="' + PAGES[k].file + '" data-i18n="nav.' + k + '">' + PAGES[k].ru + '</a></li>';
    }).join("");
    el.innerHTML =
      '<footer class="site-footer"><div class="flag-stripe"></div>' +
      '<div class="container"><div class="footer-grid">' +
        '<div><a class="logo" href="index.html"><img src="img/logo.png" alt="EasyItaly"></a>' +
          '<p style="margin-top:18px;max-width:300px" data-i18n="footer.about">EasyItaly — международный дистрибьютор премиальных итальянских продуктов питания, соединяющий итальянских производителей с партнёрами в Азии и СНГ. Основана в 2019 году в Тоскане.</p></div>' +
        '<div><h4 data-i18n="footer.nav">Навигация</h4><ul>' + nav + '</ul></div>' +
        '<div><h4 data-i18n="footer.services">Услуги</h4><ul>' +
          '<li><a href="markets.html" data-i18n="footer.export">Экспортная документация</a></li>' +
          '<li><a href="markets.html" data-i18n="footer.customs">Таможенное оформление</a></li>' +
          '<li><a href="markets.html" data-i18n="footer.labelling">Маркировка и переупаковка</a></li>' +
          '<li><a href="markets.html" data-i18n="footer.logistics">Логистический консалтинг</a></li>' +
          '<li><a href="markets.html" data-i18n="footer.transport">Международные перевозки</a></li>' +
        '</ul></div>' +
        '<div><h4 data-i18n="footer.contacts">Контакты</h4><ul>' +
          '<li data-i18n="footer.address">Тоскана, Италия (полный адрес добавляется)</li>' +
          '<li data-i18n="footer.email">manager@easyitaly.info</li>' +
          '<li>easyitaly.com &middot; Tuscany</li>' +
        '</ul></div>' +
      '</div></div>' +
      '<div class="footer-bottom"><div class="container" style="display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap">' +
        '<span data-i18n="footer.rights">© 2026 EasyItaly Srl. Все права защищены.</span>' +
        '<span data-i18n="footer.demo">Черновик сайта: контактные данные — плейсхолдеры.</span>' +
      '</div></div>' +
      '</footer>';
  }

  /* ------------------- Переключение языка ------------------- */
  var DICTS = { en: EN, it: IT, uz: UZ };
  var LANGS = ["ru", "en", "it", "uz"];
  var currentLang = "ru";
  function isValidLang(l) { return LANGS.indexOf(l) !== -1; }

  /* Переписываем внутренние ссылки: /страница.html?lang=xx (ru — без параметра) */
  function rewriteLinks(lang) {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute("href");
      if (!/^[a-z]+\.html(\?[^\s]*)?$/.test(href)) return;
      var base = href.split("?")[0];
      if (!a.getAttribute("data-base")) a.setAttribute("data-base", base);
      a.setAttribute("href", a.getAttribute("data-base") + (lang === "ru" ? "" : "?lang=" + lang));
    });
  }

  function setLang(lang) {
    if (!isValidLang(lang)) return;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    var dict = lang === "ru" ? null : DICTS[lang];
    var els = document.querySelectorAll("[data-i18n]");
    els.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var val = dict ? dict[key] : null;
      if (lang === "ru" || val === undefined || val === null) {
        if (node.getAttribute("data-ru")) node.textContent = node.getAttribute("data-ru");
        return;
      }
      if (!node.getAttribute("data-ru")) node.setAttribute("data-ru", node.textContent);
      node.textContent = val;
    });
    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-ph");
      var val = dict ? dict[key] : null;
      if (lang === "ru" || !val) {
        if (node.getAttribute("data-ru-ph")) node.setAttribute("placeholder", node.getAttribute("data-ru-ph"));
        return;
      }
      if (!node.getAttribute("data-ru-ph")) node.setAttribute("data-ru-ph", node.getAttribute("placeholder") || "");
      node.setAttribute("placeholder", val);
    });
    document.querySelectorAll("#lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    rewriteLinks(lang);
    try { localStorage.setItem("easyitaly-lang", lang); } catch (e) {}
    // Адресная строка: ?lang=xx (на ru — чистый адрес)
    if (window.history && history.replaceState) {
      var pageFile = (location.pathname.split("/").pop() || "index.html").replace(/[\?#].*$/, "");
      var newUrl = pageFile + (lang === "ru" ? "" : "?lang=" + lang) + (location.hash || "");
      try { history.replaceState(null, "", newUrl); } catch (e) {}
    }
  }

  /* ------------------- Форма контактов ------------------- */
  function wireForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = form;
      var subject = "EasyItaly request — " + (d.role.value || "general") + " / " + (d.country.value || "-");
      var body =
        "Name: " + d.name.value + "\n" +
        "Company: " + d.company.value + "\n" +
        "Country/market: " + d.country.value + "\n" +
        "Type: " + d.role.value + "\n" +
        "Preferred language: " + d.lang.value + "\n\n" +
        d.message.value + "\n";
      window.location.href = "mailto:manager@easyitaly.info?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var ok = document.getElementById("form-success");
      if (ok) ok.style.display = "block";
    });
  }

  /* ------------------- Фильтры портфеля ------------------- */
  function wireFilters() {
    var wrap = document.getElementById("brand-filters");
    if (!wrap) return;
    var cards = document.querySelectorAll("[data-cat]");
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      wrap.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (c) {
        var cats = (c.getAttribute("data-cat") || "").split(" ");
        c.style.display = (f === "all" || cats.indexOf(f) !== -1) ? "" : "none";
      });
    });
  }

  /* ------------------- Появление при скролле ------------------- */
  function wireReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ------------------- Инициализация ------------------- */
  function init() {
    var page = document.body.getAttribute("data-page") || "home";
    buildHeader(page);
    buildFooter();
    wireForm();
    wireFilters();
    wireReveal();

    var burger = document.getElementById("burger");
    var nav = document.getElementById("main-nav");
    if (burger && nav) {
      burger.addEventListener("click", function () { nav.classList.toggle("open"); });
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") nav.classList.remove("open");
      });
    }
    var ls = document.getElementById("lang-switch");
    if (ls) {
      ls.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-lang]");
        if (b) setLang(b.getAttribute("data-lang"));
      });
    }
    // Язык: сначала из URL (?lang=xx), затем из сохранённого, по умолчанию ru
    var initial = "ru";
    try {
      var urlLang = new URLSearchParams(window.location.search).get("lang");
      if (urlLang && isValidLang(urlLang)) initial = urlLang;
    } catch (e) {}
    if (initial === "ru") {
      var saved = null;
      try { saved = localStorage.getItem("easyitaly-lang"); } catch (e) {}
      if (saved && isValidLang(saved)) initial = saved;
    }
    setLang(initial);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
