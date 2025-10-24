const checkbox = document.getElementById('privacyCheck');
const submitBtn = document.getElementById('submitBtn');

checkbox.addEventListener('change', () => {
  submitBtn.disabled = !checkbox.checked;
});
