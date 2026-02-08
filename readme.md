\# École de Tréméoc - Repository Statique



\## 🚀 Déploiement Cloudflare Pages

1\. Push ce dépôt sur GitHub.

2\. Sur Cloudflare Pages :

&nbsp;  - Build Command : `npm run build`

&nbsp;  - Output Directory : `.`

&nbsp;  - Environment Variable : `NODE\_VERSION` = `20`



\## ✅ Conformité

\- Pas de CDN (Tailwind compilé dans `/assets/css/styles.css`)

\- Chemins absolus racine `/`

\- Performance Google Fonts via Preconnect

