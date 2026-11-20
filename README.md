# Mehrabi Website

Static bilingual landing and Android APK download page for Mehrabi.

## Files
- `index.html` — page content
- `styles.css` — responsive styling
- `script.js` — language toggle, download links and optional AdSense integration
- `config.js` — update links and version details
- `assets/mehrabi-mark.svg` — temporary vector mark for the website

## Before publishing
1. Replace the temporary mark with the official Mehrabi app icon/logo.
2. Add genuine app screenshots if desired.
3. Set `apkUrl`, `version`, and `apkSize` in `config.js` after choosing the final APK.
4. Verify the privacy policy URL and replace the contact email with the official address.
5. Leave AdSense fields empty until the website is approved and real ad slot IDs are available.

## Deploy to Render
1. Create a separate GitHub repository named `Mehrabi-Website`.
2. Upload the contents of this folder to its root (not the folder itself).
3. In Render, choose **New + → Static Site**, connect the repository.
4. Build command: leave empty. Publish directory: `.`.
5. Deploy. Render will provide an `onrender.com` URL and redeploy on commits.

No app repository files are changed by this project.
