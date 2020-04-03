import Vue, { VNode } from 'vue';

export default Vue.extend ({
  render(createElement): VNode {
    return createElement('div',
      {},
      'Simple reproducible example'
    );
  }
});