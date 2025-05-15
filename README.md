# Dileep's Custom Portfolio

This is the **frontend component** of the full **Cloud Resume Challenge** project — a professional portfolio built with **React** and hosted using GitHub Pages.  
It showcases backend and DevOps engineering experience and serves as the public-facing layer of the end-to-end cloud solution.

This project is based on [Cleanfolio](https://github.com/rjshkhr/cleanfolio) by [@rjshkhr](https://github.com/rjshkhr).

### Live Site

[https://DevDiCode.github.io/me](https://DevDiCode.github.io/me)

---

## Getting Started

### 1. Clone & Set Up

```bash
git clone https://github.com/DevDiCode/me.git
cd me
```

If you use Node version managers:

```bash
nvm install
nvm use
# OR
fnm install
fnm use
```

Then install dependencies and start the dev server:

#### Using npm:
```bash
npm install
npm start
```

#### Or using yarn:
```bash
yarn install
yarn start
```

App will be available at `http://localhost:3000/`.

---

## How to Customize

### Portfolio Content

Edit your personal details in:

```bash
src/portfolio.js
```

You can configure:

- Header and social links
- About section (multi-paragraph + highlights)
- Experience (with bullet points and tech stack tags)
- Skills and contact

### 🔤 Page Title

Open `public/index.html` and edit:

```html
<title>Satya Penmetsa</title>
```

---

## Deploy to GitHub Pages

### Step 1: Update `package.json`

```json
"homepage": "https://DevDiCode.github.io/me"
```

---

### Step 2: Deploy

#### Using npm:
```bash
npm run build
npm run deploy
```

#### Or using yarn:
```bash
yarn build
yarn deploy
```

Your portfolio will be live at:

```plaintext
https://DevDiCode.github.io/me
```

> Make sure GitHub Pages is enabled on the `gh-pages` branch in your repository settings.

---

## Credits

This project is built on top of [Cleanfolio](https://github.com/rjshkhr/cleanfolio) by [@rjshkhr](https://github.com/rjshkhr), a beautiful minimalist React portfolio template.

---

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
