
document.addEventListener('DOMContentLoaded', function () {
  const frameIcon = document.getElementById('clientnext');
  const nextSection = document.getElementById('fingernext');

  frameIcon.addEventListener('click', function () {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
});
