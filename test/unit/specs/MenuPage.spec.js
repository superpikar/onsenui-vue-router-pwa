import Vue from 'vue';
import MenuPage from '@/components/MenuPage';

describe('MenuPage.vue', () => {
  const Constructor = Vue.extend(MenuPage);
  const vm = new Constructor().$mount();

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
