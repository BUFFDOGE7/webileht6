// ── Working Process accordion ──
function toggleProc(header) {
  const item = header.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.process-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── Testimonials slider ──
let tCur = 0, tMax = 2;

function tUpdateSlider() {
  const track = document.getElementById('testiTrack');
  const w = track.children[0].offsetWidth + 28;
  track.style.transform = `translateX(-${tCur * w}px)`;
  document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === tCur));
}

function tSlide(d) {
  tCur = Math.max(0, Math.min(tMax, tCur + d));
  tUpdateSlider();
}

function tGo(i) {
  tCur = i;
  tUpdateSlider();
}

setInterval(() => {
  tCur = tCur >= tMax ? 0 : tCur + 1;
  tUpdateSlider();
}, 5500);
