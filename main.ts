import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// hello, fading 1% phone: this batch of orders, one slot of attention too many.
const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const lastWords = '1% remaining. I am going to sleep now. Please stop opening apps to just check one thing. I can feel each one.';
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, lastWords, 'utf8');

console.log(`${statSync(entryPath).size} bytes`);
void here;
