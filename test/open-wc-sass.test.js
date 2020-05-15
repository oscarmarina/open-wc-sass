import { html, fixture, expect } from '@open-wc/testing';

import '../open-wc-sass.js';

describe('OpenWcSass', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <open-wc-sass></open-wc-sass>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <open-wc-sass></open-wc-sass>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <open-wc-sass title="attribute title"></open-wc-sass>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <open-wc-sass></open-wc-sass>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
