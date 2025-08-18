import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, cookies, redirect } = context;
  
  // Check if we're in development mode using multiple methods
  const isDev = import.meta.env.DEV || import.meta.env.NODE_ENV === 'development' || import.meta.env.MODE === 'development';
  
  // Skip authentication entirely in development
  if (isDev) {
    console.log('🔓 Development mode - skipping auth for:', url.pathname);
    return next();
  }
  
  console.log('🔒 Production mode - checking auth for:', url.pathname);
  
  // Allow access to the homepage, login, and logout pages without authentication
  if (url.pathname === '/' || 
      url.pathname === '/index.html' || 
      url.pathname === '/login' || 
      url.pathname === '/login/' ||
      url.pathname === '/logout' || 
      url.pathname === '/logout/') {
    return next();
  }
  
  // Allow access to static assets
  if (url.pathname.startsWith('/_astro/') || 
      url.pathname.startsWith('/favicon') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg')) {
    return next();
  }
  
  // Check if user is already authenticated
  const authCookie = cookies.get('wri-auth');
  if (authCookie?.value === 'authenticated') {
    return next();
  }
  
  // If no valid authentication, redirect to login page with return URL (use relative path)
  const loginPath = `/login?returnTo=${encodeURIComponent(url.pathname)}`;
  return redirect(loginPath);
};