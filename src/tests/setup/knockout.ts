/**
 * Include Knockout in the test environment if it was provided via script tag and comes out from public folder
 */
import fs from 'fs';
import path from 'path';

const knockoutPath = path.resolve(
  process.cwd(),
  'public/vendor/knockout-latest.js',
);
if (fs.existsSync(knockoutPath)) {
  const knockoutCode = fs.readFileSync(knockoutPath, 'utf8');

  if (!window.ko) window.eval(knockoutCode);
}
