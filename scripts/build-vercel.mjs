import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'vercel-output');
await mkdir(output, { recursive: true });
const html = await readFile(resolve(root, 'landing-preview.html'), 'utf8');
const deployHtml = html.replaceAll('public/huaguan-logo-transparent.png', 'huaguan-logo-transparent.png');
await writeFile(resolve(output, 'index.html'), deployHtml);
await cp(resolve(root, 'public/huaguan-logo-transparent.png'), resolve(output, 'huaguan-logo-transparent.png'));
await cp(resolve(root, 'public/huaguan-logo-transparent.png'), resolve(output, 'huaguan-logo-share.png'));
