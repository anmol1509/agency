document.querySelector('#year').textContent = new Date().getFullYear();
const panels = [...document.querySelectorAll('.accordion details')];
panels.forEach(panel => panel.addEventListener('toggle', () => {
  if (!panel.open) return;
  panels.forEach(other => { if (other !== panel) other.open = false; });
  document.querySelector('#graph-title').textContent = panel.querySelector('summary').lastChild.textContent.trim();
}));
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Project inquiry from ${data.get('firstName')} ${data.get('lastName')}`);
  const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('firstName')} ${data.get('lastName')}\nEmail: ${data.get('email')}`);
  window.location.href = `mailto:hello@stallion.com?subject=${subject}&body=${body}`;
  document.querySelector('.form-status').textContent = 'Your email app will open with your message. Send it there to complete your inquiry.';
});
