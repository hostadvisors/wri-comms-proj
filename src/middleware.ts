import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, cookies, redirect } = context;
  
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
  
  // If no valid authentication, redirect to login page with return URL
  const loginUrl = new URL('/login', url.origin);
  loginUrl.searchParams.set('returnTo', url.pathname);
  return redirect(loginUrl.toString());
};