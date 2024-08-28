/*
 * Cookies.js TypeScript Declaration File
 * https://github.com/ScottHamper/Cookies
 *
 * This is free and unencumbered software released into the public domain.
 */
interface CookieOptions {
    path?: string;
    domain?: string;
    expires?: any;
    secure?: boolean;
    sameSite: string;
}

interface CookiesStatic {
    (key:string, value?:any, options?:CookieOptions): any;

    get(key:string): string;
    set(key:string, value:any, options?:CookieOptions): CookiesStatic;
    expire(key:string, options?:CookieOptions): CookiesStatic;

    defaultOptions: CookieOptions;
    enabled: boolean;
}

declare var Cookies:CookiesStatic;

declare module "@ziflow/cookies" {
    export = Cookies;
}
