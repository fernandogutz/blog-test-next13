// middleware.js
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

let locales = ['en', 'es'];
let defaultLocale = 'en';

function getLocale(request) {
  // Implementa la lógica para obtener el idioma preferido del usuario
  // Puedes utilizar el encabezado 'Accept-Language' de la solicitud o una biblioteca de detección de idioma
  // Retorna el idioma preferido (por ejemplo, 'en' para inglés, 'es' para español)
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    '/((?!_next).*)', // Skip all internal paths (_next)
    // Optional: only run on root (/) URL
    // '/'
  ],
};
