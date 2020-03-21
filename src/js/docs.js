(function () {
  const dropdowns = document.querySelectorAll('.dropdown__toggle');
  Array.prototype.forEach.call(dropdowns, (dropdown) => {
    dropdown.addEventListener('click', (event) => {
      event.target.parentNode.classList.toggle('is-open');
    });
  });
}());
