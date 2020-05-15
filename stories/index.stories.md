```js script
import { html } from '@open-wc/demoing-storybook';
import '../open-wc-sass.js';

export default {
  title: 'OpenWcSass',
  component: 'open-wc-sass',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# OpenWcSass

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add open-wc-sass
```

```js
import 'open-wc-sass/open-wc-sass.js';
```

```js preview-story
export const Simple = () => html`
  <open-wc-sass></open-wc-sass>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <open-wc-sass title="Hello World"></open-wc-sass>
`;
```
