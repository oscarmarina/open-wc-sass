## open-wc-sass
### open-wc web component and sass

**Step 1:**

>In package.json
```json
"devDependencies": {
  ...
  "concurrently": "^5.2.0",
  "sass-style-template" : "^1.0.0"
}
```

**Step 2:**
>In package.json
```js
 "scripts": {
    //new start sass + server
    "start": "concurrently \"npm:sass:watch\" \"npm:start-open\"",
    //old "start" now is "start-open"
    "start-openwc": "es-dev-server --app-index demo/index.html --node-resolve --open --watch",
    // new script
    "sass:watch": "sass-style-template",
    ...
}
```
**Step 3:**
>Create .scss file

**src/styles/open-wc-sass.scss**

```scss
  :host {
    background-color: rgba(255, 228, 196, 0.86);
    box-shadow: 0 0 0 8px rgba(205, 92, 92, 0.68)
  }
```
```sass:watch``` will create ```open-wc-sass-styles.js```

```js
import { css, unsafeCSS } from 'lit-element';

export default css`:host {
  background-color: rgba(255, 228, 196, 0.86);
  box-shadow: 0 0 0 8px rgba(205, 92, 92, 0.68);
}`;
```

**Step 4:**
>In OpenWcSass.js
```js
// import styles
import styles from './styles/open-wc-sass-styles.js';

  static get styles() {
    // use styles
    return [styles, css`
      :host {
        display: block;
        padding: 25px;
        color: var(--open-wc-sass-text-color, #000);
      }
    `];
  }
```