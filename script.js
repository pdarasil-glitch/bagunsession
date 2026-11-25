/* ==========================================================================
   BAGUNSESSION (BSS) — DADOS & INTERAÇÕES (VANILLA JS)
   --------------------------------------------------------------------------
   Para atualizar artistas ou adicionar novas edições no futuro, basta
   editar os arrays ARTISTS_DATA e EDITIONS_DATA abaixo.
   ========================================================================== */

const ARTISTS_DATA = [
  {
    id: 'juye',
    name: 'Juyè',
    genre: 'Pocket Shows',
    genreTag: 'MPB / AFROGROOVE',
    edition: 'BSS-07',
    city: 'São Paulo, SP',
    code: 'BSS-ART-01',
    photo: 'assets/juyè.jpg',
    bio: 'Compositora e intérprete que funde percussão brasileira, soul e poesia contemporânea. Seu show na Bagunsession é pura catarse coletiva e balanço.',
    highlight: 'Puxou um coro coletivo que atravessou a pista e virou um dos registros mais marcantes da BSS.',
    spotify: 'https://open.spotify.com/search/Juy%C3%A8',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'taldibruna',
    name: 'taldiBruna',
    genre: 'Pocket Shows',
    genreTag: 'R&B / POP URBANO',
    edition: 'BSS-07',
    city: 'São Paulo, SP',
    code: 'BSS-ART-02',
    photo: 'assets/taldibruna.jpg',
    bio: 'Presença marcante, vocais envolventes e estética afiada. taldiBruna traz para o palco da Bagunsession a força do R&B contemporâneo com identidade de rua.',
    highlight: 'Dominou o palco com performance intensa e conexão direta com o público do começo ao fim.',
    spotify: 'https://open.spotify.com/search/taldiBruna',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'marina-na-voz',
    name: 'Marina na Voz',
    genre: 'Pocket Shows',
    genreTag: 'SOUL / MPB / VOZ',
    edition: 'BSS-06',
    city: 'São Paulo, SP',
    code: 'BSS-ART-03',
    photo: 'assets/marina-na-voz.jpg',
    bio: 'Timbre potente e interpretação cheia de verdade. Marian na Voz costura soul, brasilidades e refrões emocionantes que prendem a atenção da casa inteira.',
    highlight: 'Momento arrepiante na BSS-06 com a plateia acompanhando cada verso no gogó.',
    spotify: 'https://open.spotify.com/search/Marian%20na%20Voz',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'bistro',
    name: 'Bistro',
    genre: 'Pocket Shows',
    genreTag: 'INDIE / GROOVE ALT',
    edition: 'BSS-06',
    city: 'São Paulo, SP',
    code: 'BSS-ART-04',
    photo: 'assets/bistro.jpg',
    bio: 'Sonoridade autoral que mistura groove, guitarras atmosféricas e estética independente. Bistro leva para a BSS um show quente, dançante e cheio de personalidade.',
    highlight: 'Set vibrante que manteve a pista colada no palco sem deixar o clima cair em nenhum minuto.',
    spotify: 'https://open.spotify.com/search/Bistro',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-rxvena',
    name: 'DJ Rxvena',
    genre: 'DJ Sets',
    genreTag: 'DJ SET / PISTA URBANA',
    edition: 'BSS-05',
    city: 'São Paulo, SP',
    code: 'BSS-ART-05',
    photo: 'assets/dj-ravena.jpg',
    bio: 'Pesquisa afiada e transições cirúrgicas. DJ Rxvena conduz a pista misturando ritmos urbanos, graves pesados e pérolas da cena independente.',
    highlight: 'Incendiou a transição entre shows na BSS-05 transformando o espaço em pista fervendo.',
    spotify: 'https://open.spotify.com/search/DJ%20Rxvena',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-ayla',
    name: 'DJ Ayla',
    genre: 'DJ Sets',
    genreTag: 'DJ SET / R&B / AFROBEAT',
    edition: 'BSS-05',
    city: 'São Paulo, SP',
    code: 'BSS-ART-06',
    photo: 'assets/dj-ayla.jpg',
    bio: 'Curadoria magnética que passeia pelo R&B, afrobeat, funk e grooves contemporâneos. DJ Ayla dita o ritmo da noite com leitura impecável de pista.',
    highlight: 'Set inesquecível sob a luz vermelha da Bagunsession, mantendo todo mundo em movimento.',
    spotify: 'https://open.spotify.com/search/DJ%20Ayla',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-ellen-kellen',
    name: 'DJ Ellen Kellen',
    genre: 'DJ Sets',
    genreTag: 'DJ SET / BAILE & GROOVE',
    edition: 'Hora Extra',
    city: 'São Paulo, SP',
    code: 'BSS-ART-07',
    photo: 'assets/dj-ellen-kellen.jpg',
    bio: 'Energia lá no alto e pesquisa ousada que une sons da rua, beats pulsantes e clássicos revisitados para ninguém ficar parado.',
    highlight: 'Comandou a pista na Edição Hora Extra com sequência frenética celebrada pela casa inteira.',
    spotify: 'https://open.spotify.com/search/DJ%20Ellen%20Kellen',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-guto-brown',
    name: 'DJ Guto Brown',
    genre: 'DJ Sets',
    genreTag: 'GROOVE / RAP / FUNK',
    edition: 'Hora Extra',
    city: 'São Paulo, SP',
    code: 'BSS-ART-08',
    photo: 'assets/dj-guto-brown.jpg',
    bio: 'Swing pesado, referências de black music brasileira e carisma absurdo no microfone. Guto Brown transforma o palco em baile quente do início ao fim.',
    highlight: 'Botou todo mundo pra dançar na Edição Hora Extra com jam session reunindo artistas de edições anteriores.',
    spotify: 'https://open.spotify.com/search/Guto%20Brown',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'tierri',
    name: 'Tiérri',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-09',
    photo: 'assets/tiérri.jpg',
    bio: 'Presença marcante e som autoral na cena independente da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Ti%C3%A9rri',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'mari-torquato',
    name: 'Mari Torquato',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-10',
    photo: 'assets/mari-torquato.jpg',
    bio: 'Voz marcante e identidade autoral no palco da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Mari%20Torquato',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-augusto',
    name: 'DJ Augusto',
    genre: 'DJ Sets',
    genreTag: 'DJ SET',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-11',
    photo: 'assets/dj-augusto.jpg',
    bio: 'Pesquisa afiada e pista quente conduzida nos toca-discos da Bagunsession.',
    highlight: 'Set inesquecível na pista da Bagunsession.',
    spotify: 'https://open.spotify.com/search/DJ%20Augusto',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-anati',
    name: 'DJ Anati',
    genre: 'DJ Sets',
    genreTag: 'DJ SET',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-12',
    photo: 'assets/dj-anati.jpg',
    bio: 'Curadoria vibrante e energia lá no alto comandando a pista da Bagunsession.',
    highlight: 'Set inesquecível na pista da Bagunsession.',
    spotify: 'https://open.spotify.com/search/DJ%20Anati',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-macarte',
    name: 'DJ Macarte',
    genre: 'DJ Sets',
    genreTag: 'DJ SET',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-13',
    photo: 'assets/dj-macarte.jpg',
    bio: 'Transições cirúrgicas e groove pesado incendiando a noite na Bagunsession.',
    highlight: 'Set inesquecível na pista da Bagunsession.',
    spotify: 'https://open.spotify.com/search/DJ%20Macarte',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'kiah',
    name: 'Kiah',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-14',
    photo: 'assets/kiah.jpg',
    bio: 'Performance intensa e sonoridade autoral no palco da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Kiah',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-yaya',
    name: 'DJ Yaya',
    genre: 'DJ Sets',
    genreTag: 'DJ SET',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-15',
    photo: 'assets/dj-yaya.jpg',
    bio: 'Seleção quente e ritmo sem parar mantendo a casa inteira em movimento.',
    highlight: 'Set inesquecível na pista da Bagunsession.',
    spotify: 'https://open.spotify.com/search/DJ%20Yaya',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'dj-bryan-avs',
    name: 'DJ Bryan Avs',
    genre: 'DJ Sets',
    genreTag: 'DJ SET',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-16',
    photo: 'assets/dj-bryan-avs.jpg',
    bio: 'Batidas pesadas e leitura afiada de pista na Bagunsession.',
    highlight: 'Set inesquecível na pista da Bagunsession.',
    spotify: 'https://open.spotify.com/search/DJ%20Bryan%20Avs',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'isa-leall',
    name: 'Isa Leall',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-17',
    photo: 'assets/isa-leall.jpg',
    bio: 'Interpretação potente e conexão direta com o público da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Isa%20Leall',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'badaion',
    name: 'Badaion',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-18',
    photo: 'assets/artista-badaion.jpg',
    bio: 'Presença explosiva e sonoridade autoral marcante nos palcos da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Badaion',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'jess',
    name: 'Jess',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-19',
    photo: 'assets/artista-jess.jpg',
    bio: 'Flow marcante, lirismo urbano e presença forte no palco da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Jess',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'sollua',
    name: 'Sollua',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-20',
    photo: 'assets/artista-sollua.jpg',
    bio: 'Groove envolvente e identidade sonora única nos shows da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Sollua',
    instagram: 'https://instagram.com/bagunsession'
  },
  {
    id: 'bylucvs',
    name: 'Bylucv-s',
    genre: 'Pocket Shows',
    genreTag: 'POCKET SHOW',
    edition: 'BSS',
    city: 'Rio de Janeiro, RJ',
    code: 'BSS-ART-21',
    photo: 'assets/artista-bylucvs.jpg',
    bio: 'Estética afiada, vocais envolventes e atitude de rua no palco da Bagunsession.',
    highlight: 'Pocket show marcante na Bagunsession.',
    spotify: 'https://open.spotify.com/search/Bylucv-s',
    instagram: 'https://instagram.com/bagunsession'
  }
];

const EDITIONS_DATA = [
  {
    id: 'bss-01',
    code: 'BSS-01',
    title: 'Bagunsession #01 — O início',
    date: 'JUL 2025',
    fullDate: '12 de Julho de 2025',
    venue: 'Estúdio Independente • Centro, SP',
    lineup: 'Primeira Formação BSS',
    crowd: '120+ pessoas',
    description: 'Onde tudo começou: dois amplificadores, amigos operando luz na mão e a certeza de que a gente precisava abrir nosso próprio espaço ao invés de pedir.',
    highlights: [
      'Edição inaugural 100% DIY com produção colaborativa.',
      'Semente da comunidade que hoje move todas as edições da BSS.'
    ],
    photos: [
      { src: 'assets/manifesto-bss.jpg', caption: 'Primeiro microfone ligado na BSS-01' },
      { src: 'assets/hero-bss-live.jpg', caption: 'O começo da bagunssa' }
    ]
  },
  {
    id: 'bss-02',
    code: 'BSS-02',
    title: 'Bagunsession #02 — Repara na Bagunssa',
    date: 'SET 2025',
    fullDate: '06 de Setembro de 2025',
    venue: 'Garagem Criativa • Vila Madalena, SP',
    lineup: 'Showcase 4 Artistas Autorais',
    crowd: '170+ pessoas',
    description: 'A confirmação de que a Bagunsession não era um evento isolado, mas um movimento recorrente crescendo no boca a boca.',
    highlights: [
      'Quatro shows autorais inéditos em sequência sem intervalos longos.',
      'Primeiro cartaz colado em postes da região no estilo fanzine.'
    ],
    photos: [
      { src: 'assets/hero-bss.jpg', caption: 'Garagem cheia na segunda edição' },
      { src: 'assets/dj-guto-brown.jpg', caption: 'Troca direta entre artistas e público' }
    ]
  },
  {
    id: 'bss-03',
    code: 'BSS-03',
    title: 'Bagunsession #03 — Dia dos Namorados',
    date: 'NOV 2025',
    fullDate: '15 de Novembro de 2025',
    venue: 'Espaço Subsolo • Bela Vista, SP',
    lineup: 'Ravena + Bandas Convidadas',
    crowd: '210+ pessoas',
    description: 'Guitarras altas, amplificadores no talo e a força do rock alternativo independente ocupando o subsolo.',
    highlights: [
      'Primeira edição com registro oficial em filme 35mm.',
      'Performance catártica de Ravena encerrando a madrugada.'
    ],
    photos: [
      { src: 'assets/dj-ravena.jpg', caption: 'DJ Rxvena no Subsolo' },
      { src: 'assets/badaion.jpg', caption: 'Volume no máximo na BSS-03' }
    ]
  },
  {
    id: 'bss-04',
    code: 'BSS-04',
    title: 'Bagunsession #04 — Esquenta',
    date: 'FEV 2026',
    fullDate: '07 de Fevereiro de 2026',
    venue: 'Terraço Aberto • Santa Cecília, SP',
    lineup: 'Sollua + Sets de Vinil',
    crowd: '240+ pessoas',
    description: 'Edição de verão começando no fim de tarde, unindo MPB psicodélica, groove e discotecagem 100% em vinil entre os shows.',
    highlights: [
      'Abertura ao ar livre com pôr do sol e transição para pista noturna.',
      'Discotecagem exclusiva em discos de 7 e 12 polegadas.'
    ],
    photos: [
      { src: 'assets/sollua.jpg', caption: 'Sollua na virada da noite' },
      { src: 'assets/dj-ayla.jpg', caption: 'Clima quente no terraço da Santa Cecília' }
    ]
  },
  {
    id: 'bss-05',
    code: 'BSS-05',
    title: 'Bagunsession #05 — Nostalgia',
    date: 'ABR 2026',
    fullDate: '11 de Abril de 2026',
    venue: 'Porão Cultural • Pinheiros, SP',
    lineup: 'Juyè + Coletivo Percussivo',
    crowd: '260+ pessoas',
    description: 'A edição que batizou o bordão oficial do movimento. Muito groove, percussão na cara e zero distância entre palco e plateia.',
    highlights: [
      'Nascimento oficial da frase manifesto "Repara na Bagunssa".',
      'Coro espontâneo do público que viralizou nos reels da semana.'
    ],
    photos: [
      { src: 'assets/juyè.jpg', caption: 'Juyè conduzindo o coro na BSS-05' },
      { src: 'assets/hero-bss-live.jpg', caption: 'Pista colada no palco do início ao fim' }
    ]
  },
  {
    id: 'bss-06',
    code: 'BSS-06',
    title: 'Bagunsession #06 — Hora Extra',
    date: 'JUN 2026',
    fullDate: '13 de Junho de 2026',
    venue: 'Casa Independente • Centro, SP',
    lineup: 'Bylucy-s + Convidados R&B',
    crowd: '280+ pessoas',
    description: 'Noite dedicada às texturas eletrônicas, R&B contemporâneo e experimentos visuais ao vivo. Luz vermelha intensa e som impecável.',
    highlights: [
      'Set visual sincronizado com câmeras VHS ao vivo.',
      'Feirinha de zines, discos e roupas de marcas independentes na entrada.'
    ],
    photos: [
      { src: 'assets/juyè.jpg', caption: 'Luz vermelha & voz no centro da pista' },
      { src: 'assets/manifesto-bss.jpg', caption: 'Bastidores e passagem de som' }
    ]
  },
  {
    id: 'bss-07',
    code: 'BSS-07',
    title: 'Bagunsession #07 — Dia dos Namorados',
    date: 'AGO 2026',
    fullDate: '22 de Agosto de 2026',
    venue: 'Estúdio Rua • Barra Funda, SP',
    lineup: 'Badaion, Ayla, DJ Set Cena',
    crowd: '320+ pessoas',
    description: 'A sétima edição consolidou a estética de colagem e crachá da BSS, cruzando o peso das guitarras de Badaion com a sofisticação R&B de Ayla numa mesma noite.',
    highlights: [
      'Cenografia DIY feita com recortes de jornal, fita crepe e projeções analógicas.',
      'Estreia do selo oval BSS nos crachás de palco e merch independente.',
      'Bis coletivo puxado pelo público na virada da meia-noite.'
    ],
    photos: [
      { src: 'assets/badaion.jpg', caption: 'Badaion na BSS-07' },
      { src: 'assets/dj-ayla.jpg', caption: 'DJ Ayla comandando o som' }
    ]
  }
];

const TEAM_DATA = [
  {
    code: 'CREW // 01',
    name: 'Jess',
    role: 'Membro fundador',
    area: 'PRODUÇÃO',
    photo: 'assets/Jess.jpg',
    bio: 'Cantora e compositora carioca. Jess expressa seu lado criativo exibindo sua versatilidade musical.',
    instagramHandle: '@falatujess',
    instagramUrl: 'https://instagram.com/falatujess'
  },
  {
    code: 'CREW // 02',
    name: 'Badaion',
    role: 'Membro fundador',
    area: 'CURADORIA',
    photo: 'assets/badaion.jpg',
    bio: 'Criado em favela com nome de bicho, cantor, instrumentista e produtor musical.',
    instagramHandle: '@badaion',
    instagramUrl: 'https://instagram.com/badaion'
  },
  {
    code: 'CREW // 03',
    name: 'Bylucv-s',
    role: 'Membro fundador',
    area: 'DESIGN / ZINE',
    photo: 'assets/bylucvs.jpg',
    bio: 'DJ, Beatmaker e Produtor Musical. Há mais de 6 anos ele é um arquiteto de experiências sonoras.',
    instagramHandle: '@bylucv_s',
    instagramUrl: 'https://instagram.com/bylucv_s'
  },
  {
    code: 'CREW // 04',
    name: 'Sollua',
    role: 'Membro fundador',
    area: 'MÍDIA / 35MM',
    photo: 'assets/sollua.jpg',
    bio: 'Artista da Zona Norte carioca. Sollua experimenta diferentes sonoridades e através de suas guerras, folias e amores.',
    instagramHandle: '@sollua77',
    instagramUrl: 'https://instagram.com/sollua77'
  }
];

/* ==========================================================================
   ESTADO & ELEMENTOS DOM
   ========================================================================== */

let activeGenreFilter = 'Todos';
let activeEditionFilter = EDITIONS_DATA[0].code;
let selectedEditionId = EDITIONS_DATA[0].id;

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initHeroTitleFit();
  initScrollToTopLinks();
  initArtistFilters();
  renderArtists();
  initEditionFilters();
  renderEditionsList();
  renderEditionSpotlight(selectedEditionId);
  renderTeam();
  initCopyButtons();
  setFooterYear();
});

function initHeroTitleFit() {
  const title = document.querySelector('.hero-title');
  const span = title ? title.querySelector('.display-outline') : null;
  if (!title || !span) return;

  const fit = () => {
    const targetWidth = title.clientWidth;
    if (!targetWidth) return;
    span.style.fontSize = '100px';
    const naturalWidth = span.getBoundingClientRect().width;
    if (naturalWidth > 0) {
      let fittedSize = (targetWidth / naturalWidth) * 100;
      span.style.fontSize = `${fittedSize.toFixed(2)}px`;
      // Ajuste fino pela borda direita real para cravar no mesmo alinhamento do botão à direita
      const diffRight = span.getBoundingClientRect().right - title.getBoundingClientRect().right;
      if (Math.abs(diffRight) > 0.5) {
        fittedSize = fittedSize * (targetWidth / (targetWidth + diffRight));
        span.style.fontSize = `${fittedSize.toFixed(2)}px`;
      }
    }
  };

  fit();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fit);
  }
  window.addEventListener('resize', fit);
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const heroStage = document.querySelector('.hero-stage');
  if (!header) return;

  const updateHeaderState = () => {
    const threshold = heroStage
      ? Math.max(80, heroStage.offsetHeight - header.offsetHeight)
      : 280;
    header.classList.toggle('is-scrolled', window.scrollY >= threshold);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('resize', updateHeaderState);
}

function initScrollToTopLinks() {
  document.querySelectorAll('a[href="#topo"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */

function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const header = document.querySelector('.site-header');
  if (!toggleBtn || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggleBtn.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (header) header.classList.remove('menu-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    if (header) header.classList.toggle('menu-open', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   VITRINE DE ARTISTAS + FILTROS
   ========================================================================== */

function initArtistFilters() {
  const container = document.getElementById('artist-filters');
  if (!container) return;

  const genres = ['Todos', 'DJ Sets', 'Pocket Shows'];
  container.innerHTML = genres
    .map(
      (genre) => `
      <button
        type="button"
        class="filter-chip ${genre === activeGenreFilter ? 'is-active' : ''}"
        data-genre="${genre}"
        role="tab"
        aria-selected="${genre === activeGenreFilter}"
      >
        ${genre}
      </button>
    `
    )
    .join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;

    activeGenreFilter = btn.dataset.genre;
    container.querySelectorAll('.filter-chip').forEach((chip) => {
      const active = chip.dataset.genre === activeGenreFilter;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-selected', String(active));
    });

    renderArtists();
  });
}

function buildArtistCardHTML(artist) {
  return `
    <article class="artist-badge-card">
      <div class="artist-photo-frame">
        <img src="${artist.photo}" alt="Foto de ${artist.name} na Bagunsession" loading="lazy">
      </div>

      <div class="artist-card-info">
        <h3 class="card-artist-name">${artist.name}</h3>
      </div>
    </article>
  `;
}

function renderArtists() {
  const track = document.getElementById('artists-grid');
  const countEl = document.getElementById('artists-count');
  if (!track) return;

  const filtered =
    activeGenreFilter === 'Todos'
      ? ARTISTS_DATA
      : ARTISTS_DATA.filter((artist) => artist.genre === activeGenreFilter);

  if (countEl) {
    countEl.textContent = String(filtered.length).padStart(2, '0');
  }

  // Garante largura suficiente para preencher telas grandes sem buracos no loop infinito
  let baseSet = [...filtered];
  while (baseSet.length < 8 && filtered.length > 0) {
    baseSet = baseSet.concat(filtered);
  }

  const groupOneHTML = baseSet.map((artist) => buildArtistCardHTML(artist)).join('');
  const groupTwoHTML = baseSet.map((artist) => buildArtistCardHTML(artist)).join('');

  track.innerHTML = `
    <div class="artists-marquee-group">${groupOneHTML}</div>
    <div class="artists-marquee-group" aria-hidden="true">${groupTwoHTML}</div>
  `;

  // Velocidade constante e fluida proporcional ao número de cards
  const durationSeconds = Math.max(24, baseSet.length * 4);
  track.style.setProperty('--marquee-duration', `${durationSeconds}s`);
}

/* ==========================================================================
   ARQUIVO DE EDIÇÕES (FILTRO + LISTA + POLAROIDS)
   ========================================================================== */

function initEditionFilters() {
  const container = document.getElementById('edition-filters');
  if (!container) return;

  const options = EDITIONS_DATA.map((ed) => ed.code);
  container.innerHTML = options
    .map(
      (code) => `
      <button
        type="button"
        class="edition-chip ${code === activeEditionFilter ? 'is-active' : ''}"
        data-edition-code="${code}"
        role="tab"
        aria-selected="${code === activeEditionFilter}"
      >
        ${code}
      </button>
    `
    )
    .join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.edition-chip');
    if (!btn) return;

    activeEditionFilter = btn.dataset.editionCode;
    container.querySelectorAll('.edition-chip').forEach((chip) => {
      const active = chip.dataset.editionCode === activeEditionFilter;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-selected', String(active));
    });

    const filtered = getFilteredEditions();
    if (filtered.length > 0 && !filtered.some((ed) => ed.id === selectedEditionId)) {
      selectedEditionId = filtered[0].id;
    }

    renderEditionsList();
    renderEditionSpotlight(selectedEditionId);
  });
}

function getFilteredEditions() {
  return EDITIONS_DATA.filter((ed) => ed.code === activeEditionFilter);
}

function renderEditionsList() {
  const listEl = document.getElementById('editions-list');
  if (!listEl) return;

  const editions = getFilteredEditions();
  listEl.innerHTML = editions
    .map(
      (ed) => `
      <button
        type="button"
        class="edition-row ${ed.id === selectedEditionId ? 'is-selected' : ''}"
        data-edition-id="${ed.id}"
      >
        <span class="edition-row-date">
          <strong>${ed.code}</strong>
          ${ed.date}
        </span>
        <span>
          <span class="edition-row-title">${ed.title}</span>
          <span class="edition-row-sub">${ed.venue} • ${ed.lineup}</span>
        </span>
        <span class="edition-row-arrow" aria-hidden="true">→</span>
      </button>
    `
    )
    .join('');

  listEl.querySelectorAll('.edition-row').forEach((row) => {
    row.addEventListener('click', () => {
      selectedEditionId = row.dataset.editionId;
      renderEditionsList();
      renderEditionSpotlight(selectedEditionId);
    });
  });
}

function renderEditionSpotlight(editionId) {
  const container = document.getElementById('edition-spotlight');
  const ed = EDITIONS_DATA.find((item) => item.id === editionId);
  if (!container || !ed) return;

  container.innerHTML = `
    <div class="spotlight-copy">
      <div class="spotlight-meta">
        <span class="kicker-badge">${ed.code}</span>
        <span class="mono-code">${ed.fullDate}</span>
      </div>
      <h3 class="spotlight-title">${ed.title}</h3>
      <p class="spotlight-desc">${ed.description}</p>

      <div class="spotlight-details">
        <div class="spotlight-detail-item">
          <span>LOCAL</span>
          <strong>${ed.venue}</strong>
        </div>
        <div class="spotlight-detail-item">
          <span>LINE-UP / DESTAQUE</span>
          <strong>${ed.lineup}</strong>
        </div>
      </div>

      <p class="spotlight-highlights-title">DESTAQUES DA NOITE</p>
      <ul class="spotlight-highlights">
        ${ed.highlights.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div class="polaroid-gallery">
      ${ed.photos
      .map(
        (photo) => `
          <figure class="polaroid-card">
            <img src="${photo.src}" alt="${photo.caption}" class="polaroid-photo" loading="lazy">
            <figcaption class="polaroid-caption">${photo.caption}</figcaption>
          </figure>
        `
      )
      .join('')}
    </div>
  `;
}

/* ==========================================================================
   EQUIPE DESENVOLVEDORA / REALIZADORA DO EVENTO
   ========================================================================== */

function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = TEAM_DATA.map(
    (member) => `
      <article class="team-card">
        <div class="team-card-top">
          <span class="team-crew-code">${member.code}</span>
          <span class="team-area-tag">${member.area}</span>
        </div>

        <div class="team-photo-wrap">
          <img src="${member.photo}" alt="${member.name} — ${member.role}" class="team-photo" loading="lazy">
        </div>

        <h3 class="team-member-name">${member.name}</h3>
        <p class="team-member-role">${member.role}</p>
        <p class="team-member-bio">${member.bio}</p>

        <div class="team-member-footer">
          <a href="${member.instagramUrl}" target="_blank" rel="noopener noreferrer" class="team-social-link">
            <span>${member.instagramHandle}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    `
  ).join('');
}

/* ==========================================================================
   UTILITÁRIOS: COPIAR CONTATO / ANO ATUAL
   ========================================================================== */

function initCopyButtons() {
  const buttons = [
    document.getElementById('copy-insta-btn'),
    document.getElementById('copy-email-btn')
  ].filter(Boolean);

  buttons.forEach((btn) => {
    const originalText = btn.textContent.trim();
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = 'Copiado ✓';
      } catch {
        btn.textContent = value;
      }
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    });
  });
}

function setFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
