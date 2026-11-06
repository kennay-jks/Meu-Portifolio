<script>
(() => {
  const section = document.querySelector('.abo');
  if (!section) return;

  const INTERVAL = 5000;   // tempo parado em cada slide (ms)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DURATION = reduce ? 0 : 900;  // duração da transição (ms)
  let playing = !reduce;

  const cols = [...section.querySelectorAll('.ccon')].map(el => ({
    slides: [...el.querySelectorAll('.slide')],
    i: 0,
    busy: false,
    timer: null,
    dir: el.dataset.dir === 'up' ? 1 : -1,   // up: entra por baixo | down: entra por cima
    offset: Number(el.dataset.offset) || 0
  }));

  function go(c, step) {
    const n = c.slides.length;
    if (n < 2 || c.busy) return;
    c.busy = true;

    const cur = c.slides[c.i];
    c.i = (c.i + step + n) % n;
    const nxt = c.slides[c.i];

    const s = step * c.dir * 100;
    const opts = { duration: DURATION, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' };

    nxt.classList.add('is-active');
    const a1 = cur.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-s}%)` }], opts);
    const a2 = nxt.animate([{ transform: `translateY(${s}%)` }, { transform: 'translateY(0)' }], opts);

    a2.finished.then(() => {
      cur.classList.remove('is-active');
      a1.cancel();
      a2.cancel();
      c.busy = false;
    });
  }

  function schedule(c, delay = INTERVAL) {
    clearTimeout(c.timer);
    if (!playing) return;
    c.timer = setTimeout(() => { go(c, 1); schedule(c); }, delay);
  }
  const start = () => cols.forEach(c => schedule(c, INTERVAL + c.offset));
  const stop  = () => cols.forEach(c => clearTimeout(c.timer));

  const toggleBtn = section.querySelector('[data-act="toggle"]');
  function setPlaying(v) {
    playing = v;
    toggleBtn.setAttribute('aria-pressed', String(!v));
    toggleBtn.setAttribute('aria-label', v ? 'Pausar' : 'Reproduzir');
    v ? start() : stop();
  }

  function manual(step) {
    cols.forEach(c => go(c, step));
    if (playing) start();   // reinicia a contagem depois de avançar manualmente
  }

  section.querySelector('.slider-ctrl').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.act === 'toggle') setPlaying(!playing);
    else manual(b.dataset.act === 'next' ? 1 : -1);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') manual(1);
    if (e.key === 'ArrowLeft')  manual(-1);
  });

  // não gasta processamento com a aba em segundo plano
  document.addEventListener('visibilitychange', () => {
    if (!playing) return;
    document.hidden ? stop() : start();
  });

  setPlaying(playing);
})();
</script>