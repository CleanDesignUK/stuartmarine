// cookie.js
(function(){
  const name = 'cookie_consent';
  function getCookie(n) {
    return document.cookie.split('; ').find(row => row.startsWith(n + '='))?.split('=')[1];
  }

  // If we already have consent (accepted or declined), do nothing
  if (getCookie(name)) return;

  // Otherwise, show the banner
  const banner = document.getElementById('cookie-banner');
  banner.style.display = 'block';

  // helper to set cookie
  function setConsent(value) {
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${name}=${value};path=/;max-age=${maxAge}`;
    banner.remove();
  }

  document.getElementById('accept-cookies')
    .addEventListener('click', () => setConsent('accepted'));

  document.getElementById('decline-cookies')
    .addEventListener('click', () => setConsent('declined'));
})();
