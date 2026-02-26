# Bradley Arikapu 2027 Campaign Website

Static multi-page campaign website for SHP Regional 2027.

## Local preview

```bash
python3 -m http.server 8000
```

Then open:
- `http://127.0.0.1:8000/index.html`
- `http://127.0.0.1:8000/meet-bradley.html`
- `http://127.0.0.1:8000/roadmap.html`
- `http://127.0.0.1:8000/voter-hub.html`
- `http://127.0.0.1:8000/transparency.html`
- `http://127.0.0.1:8000/volunteer.html`
- `http://127.0.0.1:8000/donate.html`

## Included features
- Responsive political branding with blue/gold color system.
- Hero campaign banner and CTA sections.
- Tok Pisin / English message toggle.
- Countdown to 2027 writ period.
- Expandable policy cards.
- Volunteer sign-up capture with CSV export.

## GitHub preview (GitHub Pages)

This repo includes `.github/workflows/deploy-pages.yml` to publish the static website on GitHub Pages.

### Steps
1. Push this branch to your GitHub repository.
2. In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and run **Deploy static site to GitHub Pages** (or push again).
4. Your live preview URL will appear in the workflow output under `page_url`.

## GitHub workspace setup (Codespaces)

This repo now includes `.devcontainer/devcontainer.json` so you can create a ready-to-use GitHub workspace.

### 1) Connect this project to your GitHub repo
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### 2) Create the workspace in GitHub
1. Open your repository on GitHub.
2. Click **Code → Codespaces → Create codespace on main**.
3. Wait for the workspace to build with the included devcontainer.

### 3) Preview inside Codespaces
In the Codespaces terminal:
```bash
python3 -m http.server 8000
```
Then open the forwarded **Static Site Preview** port.
