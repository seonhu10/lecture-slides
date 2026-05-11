import { hello } from './lib.js';

try {
  document.getElementById('static').textContent = 'static load: ' + hello();
  const mod = await import('./dynamic.js');
  document.getElementById('dynamic').textContent = 'dynamic load: ' + mod.now();
} catch (e) {
  document.getElementById('error').textContent = 'ERROR: ' + e.message;
}
