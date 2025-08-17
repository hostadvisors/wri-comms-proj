// Client-side authentication check for static pages
(function() {
  // Check if we're on a protected page (not login, logout, or homepage)
  const currentPath = window.location.pathname;
  const isHomepage = currentPath === '/' || currentPath === '/index.html';
  const isAuthPage = currentPath.startsWith('/login') || currentPath.startsWith('/logout');
  
  if (isHomepage || isAuthPage) {
    return; // No auth check needed
  }
  
  // Check for authentication cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return null;
  }
  
  const authCookie = getCookie('wri-auth');
  
  if (authCookie !== 'authenticated') {
    // Not authenticated - redirect to login with return URL
    const loginUrl = `/login?returnTo=${encodeURIComponent(currentPath)}`;
    window.location.href = loginUrl;
  }
})();
