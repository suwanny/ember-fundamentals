import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | dasherize', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('delimToken', '-');

    await render(hbs`{{dasherize 'Hello LinkedIn Engneers' delim=delimToken}}`);

    assert.equal(this.element.textContent.trim(), 'hello-linkedin-engneers');

    this.set('delimToken', '_');

    await render(hbs`{{dasherize 'Hello LinkedIn Engneers' delim=delimToken}}`);

    assert.equal(this.element.textContent.trim(), 'hello_linkedin_engneers');
  });
});
