import { register } from 'node:module';
process.versions.tsNodeMaintained = '10.9.4';
register('../esm.mjs', import.meta.url);
