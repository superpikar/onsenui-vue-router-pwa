import Vue from 'vue';
import HomePage from '@/components/HomePage';

describe('HomePage.vue', () => {
  const Constructor = Vue.extend(HomePage);
  const vm = new Constructor().$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('ons-toolbar .center').textContent)
      .to.equal('Welcome');
  });

  it('should contain proper list items', () => {
    expect(vm.essentialLinks.every(item => item.link && item.icon && item.label));
  });

  it('opens a new tab when clicking an item', () => {
    const stub = sinon.stub(window, 'open');

    // Click on the first item
    vm.$el.querySelectorAll('ons-list-item')[0].click();
    expect(stub).calledWithExactly(vm.essentialLinks[0].link, '_blank');

    stub.restore();
  });
});

