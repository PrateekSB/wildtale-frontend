import { shallowMount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';

describe('Login.vue', () => {
  test('renders login component', () => {
    const wrapper = shallowMount(Dashboard);
    expect(wrapper.element).toMatchSnapshot();
  });
});
