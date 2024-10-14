
document.addEventListener('DOMContentLoaded', function () {
  const frameIcon = document.getElementById('frameIconid');
  const nextSection = document.getElementById('nextSection');

  frameIcon.addEventListener('click', function () {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
});
