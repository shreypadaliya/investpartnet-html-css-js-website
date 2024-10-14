
document.addEventListener('DOMContentLoaded', function () {
  const frameIcon = document.getElementById('whowenext');
  const nextSection = document.getElementById('ourachive');

  frameIcon.addEventListener('click', function () {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
});
