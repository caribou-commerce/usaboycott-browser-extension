/// <reference types="vite/client" />

declare module 'vite-plugin-crx' {
  import type { Plugin } from 'vite';
  export function crx(options: any): Plugin;
}
