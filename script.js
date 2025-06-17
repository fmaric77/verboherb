document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            title: "VerboHerb - Natural Vegan Toner",
            brandName: "VerboHerb",
            heroTitle: "Naturally Radiant Skin Awaits",
            heroSubtitle: "Discover VerboHerb, your vegan herbal toner for a fresh, balanced glow.",
            heroCta: "Shop Now",
            benefitsTitle: "Why You'll Love VerboHerb",
            benefit1Title: "Purely Vegan",
            benefit1Desc: "Crafted with 100% plant-based ingredients.",
            benefit2Title: "Plastic-Free",
            benefit2Desc: "Sustainable packaging for a healthier planet.",
            benefit3Title: "Local Ingredients",
            benefit3Desc: "Sourced responsibly from Croatian nature.",
            benefit4Title: "For All Skin Types",
            benefit4Desc: "Gentle and effective, even for sensitive skin.",
            aboutTitle: "Our Commitment",
            aboutDesc: "VerboHerb was born from a love for nature and a desire for clean, effective skincare. We are dedicated to sustainability, using locally sourced Croatian herbs and eco-friendly packaging. Our mission is to bring you the best of nature, bottled with care.",
            testimonialsTitle: "What Our Customers Say",
            testimonial1Quote: '"My skin has never felt so balanced and refreshed! Love that it\'s local and vegan."',
            testimonial1Author: "- Ana K., Zagreb",
            testimonial2Quote: '"Finally, a toner that\'s gentle yet effective. The sustainable packaging is a huge plus!"',
            testimonial2Author: "- Ivana P., Split",
            testimonial3Quote: '"Obsessed with this toner! It smells amazing and makes my skin glow. Highly recommend!"',
            testimonial3Author: "- Petra M., Rijeka",
            newsletterTitle: "Get 10% Off Your First Order",
            newsletterDesc: "Sign up for our newsletter for exclusive offers and skincare tips.",
            newsletterSubmit: "Subscribe",
            footerPrivacy: "Privacy Policy",
            footerContact: "Contact Us",
            footerLanguage: "Language:",
            footerRights: "All rights reserved.",
            // Thank you page translations
            thankYouTitle: "Thank You!",
            thankYouMessage: "Thank you for subscribing to our newsletter. You'll receive your 10% discount code via email shortly.",
            backHome: "Back to Home",
            // Added Privacy Page Translations
            privacyTitle: "Privacy Policy - VerboHerb",
            privacyContent: `
                VerboHerb is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.

                Data Collection

                We collect the following types of data:

                Email Address: When you subscribe to our newsletter.
                Browsing Information: We use cookies to understand how you interact with our website.

                Data Usage

                We use the collected data to:

                Send you newsletters and promotional materials.
                Improve our website and services.

                Data Security

                We implement security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include:

                Secure Socket Layer (SSL) encryption
                Regular security audits

                Cookies

                We use cookies to track website usage and improve user experience. You can disable cookies in your browser settings, but this may affect the functionality of our website.

                User Rights

                You have the right to:

                Access your personal data.
                Correct inaccuracies in your personal data.
                Withdraw your consent to receive newsletters.

                Contact

                If you have any questions or concerns about our Privacy Policy, please contact us at privacy@verboherb.com.

                Last updated: May 1, 2025
            `
        },
        hr: {
            title: "VerboHerb - Prirodni Veganski Tonik",
            brandName: "VerboHerb",
            heroTitle: "Prirodno Blistava Koža Vas Čeka",
            heroSubtitle: "Otkrijte VerboHerb, vaš veganski biljni tonik za svjež, uravnotežen sjaj.",
            heroCta: "Kupi Odmah",
            benefitsTitle: "Zašto Ćete Voljeti VerboHerb",
            benefit1Title: "Potpuno Veganski",
            benefit1Desc: "Napravljen od 100% biljnih sastojaka.",
            benefit2Title: "Bez Plastike",
            benefit2Desc: "Održivo pakiranje za zdraviji planet.",
            benefit3Title: "Lokalni Sastojci",
            benefit3Desc: "Odgovorno nabavljeni iz hrvatske prirode.",
            benefit4Title: "Za Sve Tipove Kože",
            benefit4Desc: "Nježan i učinkovit, čak i za osjetljivu kožu.",
            aboutTitle: "Naša Predanost",
            aboutDesc: "VerboHerb je rođen iz ljubavi prema prirodi i želje za čistom, učinkovitom njegom kože. Posvećeni smo održivosti, koristeći lokalno uzgojeno hrvatsko bilje i ekološki prihvatljivu ambalažu. Naša misija je donijeti vam najbolje iz prirode, pažljivo upakirano.",
            testimonialsTitle: "Što Kažu Naši Kupci",
            testimonial1Quote: '"Moja koža nikad nije bila tako uravnotežena i osvježena! Obožavam što je lokalno i vegansko."',
            testimonial1Author: "- Ana K., Zagreb",
            testimonial2Quote: '"Konačno, tonik koji je nježan, a učinkovit. Održivo pakiranje je ogroman plus!"',
            testimonial2Author: "- Ivana P., Split",
            testimonial3Quote: '"Opsjednuta sam ovim tonikom! Miriše nevjerojatno i čini moju kožu sjajnom. Toplo preporučujem!"',
            testimonial3Author: "- Petra M., Rijeka",
            newsletterTitle: "Ostvarite 10% Popusta Na Prvu Narudžbu",
            newsletterDesc: "Prijavite se na naš newsletter za ekskluzivne ponude i savjete o njezi kože.",
            newsletterSubmit: "Pretplati Se",
            footerPrivacy: "Pravila Privatnosti",
            footerContact: "Kontaktirajte Nas",
            footerLanguage: "Jezik:",
            footerRights: "Sva prava pridržana.",
            // Thank you page translations
            thankYouTitle: "Hvala Vam!",
            thankYouMessage: "Hvala vam što ste se pretplatili na naš newsletter. Uskoro ćete putem e-maila dobiti kod za 10% popusta.",
            backHome: "Nazad na Početnu",
            // Added Privacy Page Translations
            privacyTitle: "Pravila Privatnosti - VerboHerb",
            privacyContent: `
                VerboHerb je posvećen zaštiti vaše privatnosti. Ova Pravila privatnosti objašnjavaju kako prikupljamo, koristimo i štitimo vaše osobne podatke kada posjetite našu web stranicu ili koristite naše usluge.

                Prikupljanje Podataka

                Prikupljamo sljedeće vrste podataka:

                Email Adresa: Kada se pretplatite na naš newsletter.
                Informacije o pregledavanju: Koristimo kolačiće kako bismo razumjeli kako koristite našu web stranicu.

                Korištenje Podataka

                Prikupljene podatke koristimo za:

                Slanje newslettera i promotivnih materijala.
                Poboljšanje naše web stranice i usluga.

                Sigurnost Podataka

                Provodimo sigurnosne mjere kako bismo zaštitili vaše osobne podatke od neovlaštenog pristupa, korištenja ili otkrivanja. Ove mjere uključuju:

                Secure Socket Layer (SSL) enkripciju
                Redovite sigurnosne revizije

                Kolačići (Cookies)

                Koristimo kolačiće za praćenje korištenja web stranice i poboljšanje korisničkog iskustva. Možete onemogućiti kolačiće u postavkama preglednika, ali to može utjecati na funkcionalnost naše web stranice.

                Prava Korisnika

                Imate pravo na:

                Pristup svojim osobnim podacima.
                Ispravak netočnosti u svojim osobnim podacima.
                Povlačenje privole za primanje newslettera.

                Kontakt

                Ako imate bilo kakvih pitanja ili nedoumica u vezi s našim Pravilima privatnosti, kontaktirajte nas na privacy@verboherb.com.

                Datum zadnje izmjene: 1. svibnja 2025.
            `
        }
    };

    const languageToggles = [
        document.getElementById('lang-en'),
        document.getElementById('lang-hr'),
        document.getElementById('footer-lang-en'),
        document.getElementById('footer-lang-hr')
    ];
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const currentYearSpan = document.getElementById('current-year');

    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }

        // Update text content
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Handle specific elements like title
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}".`);
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update active class on toggles
        languageToggles.forEach(toggle => {
            if (toggle) {
                const toggleLang = toggle.id.includes('en') ? 'en' : 'hr';
                if (toggleLang === lang) {
                    toggle.classList.add('active');
                } else {
                    toggle.classList.remove('active');
                }
            }
        });


        // Store preference
        try {
            localStorage.setItem('preferredLanguage', lang);
        } catch (e) {
            console.warn("Could not save language preference to localStorage:", e);
        }
    };

    // Add event listeners to toggles
    languageToggles.forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', () => {
                const lang = toggle.id.includes('en') ? 'en' : 'hr';
                setLanguage(lang);
            });
        }
    });

    // Set initial language
    let preferredLanguage = 'hr'; // Default to Croatian
    try {
        const storedLang = localStorage.getItem('preferredLanguage');
        if (storedLang && translations[storedLang]) {
            preferredLanguage = storedLang;
        }
    } catch (e) {
        console.warn("Could not read language preference from localStorage:", e);
    }

    setLanguage(preferredLanguage);

    // Handle newsletter form submission (basic example)
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterFeedback = document.getElementById('newsletter-feedback'); // Get feedback element

    if (newsletterForm && newsletterFeedback) {
        newsletterForm.addEventListener('submit', (event) => {
            // Allow the form to submit naturally to Netlify
            // No event.preventDefault() - let Netlify handle the submission
            const emailInput = document.getElementById('email');
            const currentLang = document.documentElement.lang || 'hr';

            console.log(`Newsletter signup attempt: ${emailInput.value}`);
            
            // Show a brief loading message
            const loadingMessage = currentLang === 'hr'
                ? 'Šalje se...'
                : 'Submitting...';
            newsletterFeedback.textContent = loadingMessage;
        });
    }
});
