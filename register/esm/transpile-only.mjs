import { register } from 'node:module';
process.versions.tsNodeMaintained = '10.9.7';
register('../../esm/transpile-only.mjs', import.meta.url);
