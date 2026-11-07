(() => {
    const LANGS = ['pt', 'en', 'zh', 'ja'];           // ordem do botão
    const LABEL = { pt: 'PT', en: 'EN', zh: '中文', ja: '日本語' };
    const HTML_LANG = { pt: 'pt-BR', en: 'en', zh: 'zh-CN', ja: 'ja' };
    const T = {
        pt: {
            nav_about: 'Sobre', nav_work: 'Trabalho', nav_contact: 'Contato',
            about_title: 'Sobre', work_title: 'Trabalho', contact_title: 'Contato',
            about_text: 'Incomodado ao ver tantas ideias permanecerem apenas no papel, Jack Kennedy idealizou, em 2018, o que viria a se tornar a Vanitas, fundada em 2019. Um estúdio de branding dedicado à criação de marcas memoráveis, que acredita no poder dos princípios fundamentais do design para transformar conceitos em identidades visuais atemporais.',
            work_text: 'Desde sua criação, em 2019, a Vanitas tem como missão criar significados e contar histórias por meio de linhas e formas. Em seus primeiros anos no mercado, a marca manteve uma forte conexão com o design minimalista e o uso dos princípios da Gestalt, influências diretamente ligadas à visão de seu idealizador e fundador, Jack Kennedy. Com o passar dos anos e o crescimento da equipe, ampliamos nossos horizontes e exploramos novas possibilidades estéticas e conceituais, incorporando diferentes estilos de design para atender a novas ideias, perspectivas e demandas.',
            contact_text: 'Em um mundo em constante transformação, destacar-se exige mais do que uma boa identidade visual: exige estratégia. Para conquistar um posicionamento sólido e diferenciado, é fundamental unir estética, pesquisa, gestão e acompanhamento contínuo. Entre em contato conosco e descubra como transformar sua marca em uma presença única e memorável, garantindo que ela não seja apenas mais uma entre tantas outras.'
        },
        en: {
            nav_about: 'About', nav_work: 'Work', nav_contact: 'Contact',
            about_title: 'About', work_title: 'Work', contact_title: 'Contact',
            about_text: "Unsettled by seeing so many ideas remain nothing more than ideas, Jack Kennedy envisioned in 2018 what would become Vanitas, officially founded in 2019. A branding studio dedicated to creating memorable brands, driven by the belief that the fundamental principles of design have the power to transform concepts into timeless visual identities.",
            work_text: "Since its founding in 2019, Vanitas has been driven by the mission of creating meaning and telling stories through lines and shapes. In its early years, the brand maintained a strong connection to minimalist design and the principles of Gestalt, influences deeply rooted in the vision of its creator and founder, Jack Kennedy. Over the years, as the team grew, we broadened our horizons and explored new aesthetic and conceptual possibilities, embracing different design styles to meet new ideas, perspectives, and demands.",
            contact_text: "In a constantly evolving world, standing out requires more than just a strong visual identity it requires strategy. Building a solid and distinctive market position means bringing together aesthetics, research, management, and continuous guidance. Get in touch with us and discover how to transform your brand into a unique and memorable presence, ensuring it never becomes just another name among many."
        },
        zh: {
            nav_about: '关于', nav_work: '作品', nav_contact: '联系',
            about_title: '关于', work_title: '作品', contact_title: '联系',
            about_text: '由于不愿看到如此多的创意仅仅停留在构想阶段，Jack Kennedy 于 2018 年构思了 Vanitas，并于 2019 年正式创立了这一品牌设计工作室。Vanitas 致力于打造令人难忘的品牌，坚信通过恰当地运用设计的基本原则，能够将理念转化为历久弥新的视觉形象。',
            work_text: '自2019年创立以来，Vanitas 始终秉持着通过线条与形态创造意义、讲述故事的使命。在发展的初期，品牌与极简主义设计及格式塔原理有着深厚的联系，这些理念深受创始人兼创意主导者 Jack Kennedy 的个人设计理念影响。随着时间的推移和团队的不断壮大，我们逐渐拓展了设计视野，探索更多美学与概念上的可能性，并融入不同的设计风格，以满足更多元的创意、观点与需求。',
            contact_text: '在一个不断变化的世界中，脱颖而出需要的不仅仅是优秀的视觉识别，更需要战略思维。要建立稳固且独特的品牌定位，必须将美学、调研、管理与持续跟进融为一体。 欢迎联系我们，探索如何将您的品牌打造为独特而令人难忘的存在，让它不再只是众多品牌中的普通一员。'
        },
        ja: {
            nav_about: '概要', nav_work: '作品', nav_contact: '連絡先',
            about_title: '概要', work_title: '作品', contact_title: '連絡先',
            about_text: '数多くのアイデアが構想のまま終わってしまうことに疑問を感じたJack Kennedyは、2018年にVanitasの構想を描き、2019年に正式に設立しました。Vanitasは、記憶に残るブランドの創造に取り組むブランディングスタジオです。デザインの基本原則を的確に活用することで、コンセプトを時代を超えて愛されるビジュアルアイデンティティへと昇華できると信じています。',
            work_text: '2019年の設立以来、Vanitasは線と形を通じて意味を創造し、物語を紡ぐことを使命としてきました。活動初期、ブランドはミニマリズムデザインとゲシュタルトの原則に強く結びついていました。これらは、創設者でありクリエイティブディレクターでもあるJack Kennedyのビジョンに深く根ざしたものです。年月を重ね、チームが成長するにつれて、私たちは視野を広げ、美的・概念的な新たな可能性を探求してきました。そして、多様なデザインスタイルを取り入れることで、より幅広いアイデア、視点、ニーズに応えています。',
            contact_text: '絶えず変化し続ける世界において、他社との差別化には優れたビジュアルアイデンティティだけでなく、戦略が必要です。確固たる独自のブランドポジショニングを確立するには、美学、リサーチ、マネジメント、そして継続的なサポートを融合させることが重要です。 ぜひ私たちにご相談ください。あなたのブランドを唯一無二の、記憶に残る存在へと導き、数あるブランドの中に埋もれない価値を生み出します。'
        }
    };

    const btn = document.getElementById('langBtn');
    const code = document.getElementById('langCode');
    let cur = 'en';
    try { const s = localStorage.getItem('vanitas-lang'); if (LANGS.includes(s)) cur = s; } catch (e) {}

    function apply(lang) {
        cur = lang;
        document.documentElement.lang = HTML_LANG[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = T[lang][el.dataset.i18n];
            if (v) el.textContent = v;
        });
        code.textContent = LABEL[lang];
        btn.setAttribute('aria-label', 'Language: ' + LABEL[lang]);
        try { localStorage.setItem('vanitas-lang', lang); } catch (e) {}
    }
    btn.addEventListener('click', () => apply(LANGS[(LANGS.indexOf(cur) + 1) % LANGS.length]));
    apply(cur);

    // destaca no menu a seção visível
    const links = document.querySelectorAll('.menu a[href^="#"]');
    const io = new IntersectionObserver(es => {
        es.forEach(e => {
            if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('.sec').forEach(s => io.observe(s));
})();
