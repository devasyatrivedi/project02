// Add a class to .img-wrapper if min-width is 995px or more
function handleMinWidth995() {
  const wrappers = document.querySelectorAll('.img-wrapper');
  if (window.matchMedia('(min-width: 995px)').matches) {
    wrappers.forEach(w => w.classList.add('min-width-995'));
  } else {
    wrappers.forEach(w => w.classList.remove('min-width-995'));
  }
}

window.addEventListener('resize', handleMinWidth995);
window.addEventListener('DOMContentLoaded', handleMinWidth995);
