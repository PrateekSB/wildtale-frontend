import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Landing.vue';

describe('Login.vue', () => {
  test('renders login component', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.element).toMatchSnapshot();
  });
});
