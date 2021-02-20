function toggleMode() {
  document.querySelector('body').classList.toggle('darkmode');
  document.querySelector('p').classList.toggle('dark-p');
}

document.querySelector('.toggle').addEventListener('click', toggleMode);
