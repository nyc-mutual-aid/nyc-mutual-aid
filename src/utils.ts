import { l as baseL } from 'astro-i18n';
import astroConfig from '../astro.config.mjs';

export function l(path: string, options?: any) {
  const localePath = baseL(path, undefined, options);
  const reg = RegExp(`${astroConfig.base}/?`);
  return `/${astroConfig.base}${localePath.replace(reg, '')}`
}
