Changes applied:
- Simplified index.html main content to show only institution cards (UEPG, UTFPR).
- Updated navigation in uepg.html and utfpr.html: added 'Voltar para Página Inicial' link to index.html.
- Kept menu items: Início, UEPG, UTFPR, Voltar para Página Inicial.
- Updated CSS previously for visibility and uniform look.

Commands used to validate:
node -e "const s=require('fs').readFileSync('script.js','utf8'); new Function(s); console.log('script.js syntax ok');"

Test by opening index.html, uepg.html, utfpr.html in browser.