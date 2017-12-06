import { shallow } from 'vue-test-utils';
import HelloWorld from './index.vue';

describe('GlobalHeader test', () => {
  let cmp = null;

  beforeEach(() => {
    cmp = shallow(HelloWorld, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        msg: 'haha',
      },
    });
  });

  it('should render correct contents', () => {
    cmp.setData({ title: 'TD' })
    expect(cmp.vm.$el.textContent.trim()).toEqual('Copyright TD Tendcloud');
  });
});
