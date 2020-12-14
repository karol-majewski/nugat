# Next + Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed50f56e-4fc2-4c98-8b66-1e5074c6f3d3/deploy-status)](https://app.netlify.com/sites/next-starter/deploys)

This is a [Next.js](https://nextjs.org/) v10.0.1 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://url.netlify.com/Bk4UicocL)!

This project is a very minimal starter that includes 2 sample components, a global stylesheet, a `netlify.toml` for deployment, and a `jsconfig.json` for setting up absolute imports and aliases.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/cassidoo/next-netlify-starter.git`
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

- Przekierowanie widoczne
- Przekierowanie niewidoczne (powinno dzialac?)

- <embed> nie dziala
- iframe nie dziala
- <object> nie dziala

- http://preview.themeforest.net/item/bake-bakery-cake-elementor-template-kit/full_screen_preview/28697513 to mozna 100% zagniezdzic
- http://hn.arrowpress.net/bakery-kit/product/chocolate-and-blackcurrant-cake-gsk6v2t/ jest zablokowane do zagniezdzania?
- znalezc ten sam motyw na innej platformie?
- mozna wziac inny z ThemeForest i ten wpierdolic pod domene
  - powie sie ze mamy jedno demo at a time i akurat teraz wgralismy to
  - co jak sie jorgnie?
- devtools workspaces overrides

function yourfunction() {
  const header = document.querySelector("#post-10 > div > div:nth-child(2) > div > div > div > div.gel-heading.gel-heading-style-02.text-center.has-line-separator.gel-5fd6720aa5683 > h2") as HTMLHeadingElement;

  header.innerHTML = "Piekarnia Nugat"
}

window.onload = yourfunction;
