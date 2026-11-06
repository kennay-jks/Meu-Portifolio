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
            contact_text: 'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica. Lorem Ipsum é o texto padrão da indústria desde 1966, quando designers da Letraset e James Mosley, bibliotecário da St Bride Printing Library, em Londres, pegaram uma tradução de Cícero de 1914'
        },
        en: {
            nav_about: 'About', nav_work: 'Work', nav_contact: 'Contact',
            about_title: 'About', work_title: 'Work', contact_title: 'Contact',
            about_text: "Unsettled by seeing so many ideas remain nothing more than ideas, Jack Kennedy envisioned in 2018 what would become Vanitas, officially founded in 2019. A branding studio dedicated to creating memorable brands, driven by the belief that the fundamental principles of design have the power to transform concepts into timeless visual identities.",
            work_text: "Since its founding in 2019, Vanitas has been driven by the mission of creating meaning and telling stories through lines and shapes. In its early years, the brand maintained a strong connection to minimalist design and the principles of Gestalt, influences deeply rooted in the vision of its creator and founder, Jack Kennedy. Over the years, as the team grew, we broadened our horizons and explored new aesthetic and conceptual possibilities, embracing different design styles to meet new ideas, perspectives, and demands.",
            contact_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation"
        },
        zh: {
            nav_about: '关于', nav_work: '作品', nav_contact: '联系',
            about_title: '关于', work_title: '作品', contact_title: '联系',
            about_text: '由于不愿看到如此多的创意仅仅停留在构想阶段，Jack Kennedy 于 2018 年构思了 Vanitas，并于 2019 年正式创立了这一品牌设计工作室。Vanitas 致力于打造令人难忘的品牌，坚信通过恰当地运用设计的基本原则，能够将理念转化为历久弥新的视觉形象。',
            work_text: '自2019年创立以来，Vanitas 始终秉持着通过线条与形态创造意义、讲述故事的使命。在发展的初期，品牌与极简主义设计及格式塔原理有着深厚的联系，这些理念深受创始人兼创意主导者 Jack Kennedy 的个人设计理念影响。随着时间的推移和团队的不断壮大，我们逐渐拓展了设计视野，探索更多美学与概念上的可能性，并融入不同的设计风格，以满足更多元的创意、观点与需求。',
            contact_text: 'Lorem Ipsum 只是印刷和排版行业的占位文本。自 1966 年以来，Lorem Ipsum 一直是行业标准的占位文本，当时 Letraset 的设计师与伦敦圣布莱德印刷图书馆的馆员 James Mosley 取用了一段 1914 年的西塞罗译文'
        },
        ja: {
            nav_about: '概要', nav_work: '作品', nav_contact: '連絡先',
            about_title: '概要', work_title: '作品', contact_title: '連絡先',
            about_text: '数多くのアイデアが構想のまま終わってしまうことに疑問を感じたJack Kennedyは、2018年にVanitasの構想を描き、2019年に正式に設立しました。Vanitasは、記憶に残るブランドの創造に取り組むブランディングスタジオです。デザインの基本原則を的確に活用することで、コンセプトを時代を超えて愛されるビジュアルアイデンティティへと昇華できると信じています。',
            work_text: '2019年の設立以来、Vanitasは線と形を通じて意味を創造し、物語を紡ぐことを使命としてきました。活動初期、ブランドはミニマリズムデザインとゲシュタルトの原則に強く結びついていました。これらは、創設者でありクリエイティブディレクターでもあるJack Kennedyのビジョンに深く根ざしたものです。年月を重ね、チームが成長するにつれて、私たちは視野を広げ、美的・概念的な新たな可能性を探求してきました。そして、多様なデザインスタイルを取り入れることで、より幅広いアイデア、視点、ニーズに応えています。',
            contact_text: 'Lorem Ipsum は印刷・組版業界で使われるダミーテキストです。1966 年以降、Letraset のデザイナーと、ロンドンのセント・ブライド印刷図書館の司書ジェームズ・モズレーが 1914 年のキケロの翻訳文を'
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
