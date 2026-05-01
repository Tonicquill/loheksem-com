# Deploy to Netlify — Loh Ek Sem Archive

## Option 1: Drag & Drop (Easiest, 2 minutes)

1. Go to **https://app.netlify.com/drop**
2. Drag the entire `loheksem_deploy` folder onto the drop zone
3. Netlify will upload and deploy instantly
4. Your site will be live at: `https://[random-name].netlify.app`

### Change the site name:
1. Click **Site settings** → **Change site name**
2. Enter: `loheksem` (or any available name)
3. Your URL becomes: `https://loheksem.netlify.app`

## Option 2: Netlify CLI (More control)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from the deploy folder
cd loheksem_deploy
netlify deploy --prod
```

## What's Included

- ✅ Full HTML/CSS brutalist gallery design
- ✅ Artist signature in navigation
- ✅ Asymmetric hero layout (artist + artwork)
- ✅ Painting series cards
- ✅ Paper cast process section
- ✅ Exhibition history
- ✅ Mobile responsive
- ✅ Free SSL (HTTPS)
- ✅ Global CDN

## Custom Domain (Optional)

After deployment:
1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `loheksem.com`)
4. Follow DNS setup instructions

## Next Steps

- Add more artwork images to the `loheksem_deploy` folder
- Update image paths in `index.html` as needed
- Set up Google Analytics (optional)
- Submit sitemap to Google Search Console
