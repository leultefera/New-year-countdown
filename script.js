const day = document.getElementById('days');
const hrs = document.getElementById('hours');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const load = document.getElementById('firework');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Coming year background 
year.innerText = currentYear + 1;

// countdown 
function countingDown() {
  const currentTime = new Date();
  const rem = newYearTime - currentTime;

  const d = Math.floor(rem / 1000 / 60 / 60 / 24);
  const h = Math.floor(rem / 1000 / 60 / 60) % 24;
  const m = Math.floor(rem / 1000 / 60) % 60;
  const s = Math.floor(rem / 1000) % 60;

  day.innerHTML = d;
  hrs.innerHTML = h < 10 ? '0' + h : h;
  min.innerHTML = m < 10 ? '0' + m : m;
  sec.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
  load.remove();
  countdown.style.display = 'flex';
}, 3000);
setInterval(countingDown, 3000);
