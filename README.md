# Zaryab Arif — Developer Portfolio

A responsive, single-page static portfolio using HTML, CSS and vanilla JavaScript. No build step or package installation is required.

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Edit all portfolio text, skills, project cards, links and experience in `data.js`.

## Before publishing
- Replace `YOUR_FORMSPREE_ID` in `data.js` with your Formspree endpoint.
- Add your CV as `assets/Zaryab-Arif-CV.pdf`; the Download CV link is already wired to this path.
- Add verified project links and dates in `data.js`.
- Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in `index.html`, `robots.txt` and `sitemap.xml` with the final GitHub Pages URL.
- Confirm Exytex's public URL is approved before adding it.
- Confirm the FYP title once selected.

## GitHub Pages
Create a new public repository, upload all files and folders in this directory to the repository root, then enable Settings → Pages → Deploy from a branch → `main` → `/ (root)`. The published address will be `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

## Custom domain later
Buy a domain from a registrar. In repository Settings → Pages → Custom domain, enter the domain (for example `www.example.com`) and save. At the registrar, add the DNS records GitHub Pages currently specifies for your chosen hostname. For a `www` subdomain, this is typically a CNAME to `YOUR-USERNAME.github.io`; for an apex/root domain, GitHub Pages provides four A records and an optional AAAA set. Use the exact current values shown in GitHub's documentation/settings. Wait for DNS propagation, then enable Enforce HTTPS in Pages settings. Do not remove the generated `CNAME` file after GitHub creates it.

## Contact form
The form is intentionally not active until you create a Formspree form and replace the placeholder endpoint in `data.js`. Test a submission after deployment.

## Notes
This is a static frontend. It does not include a private database, login system or server-side API. Do not put secrets or API keys in `data.js`.
