import { mount } from '@vue/test-utils';
import LoginComponent from '@/views/LoginView.vue';
import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('LoginComponent', () => {
  it('renders the login form', () => {
    const wrapper = mount(LoginComponent);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('.logo').exists()).toBe(true);
  });

  it('calls registerUser method on form submission and handles successful registration', async () => {
    const wrapper = mount(LoginComponent);

    // Mock user input
    await wrapper.setData({ nombre: 'pepe', email: 'pepe@ejemplo.com', password: 'pepe' });

    // Simulate form submission
    await wrapper.find('.login-form').trigger('submit.prevent');

    // Verify that axios.post is called with the correct data
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/v1/users', {
      nombre: 'pepe',
      email: 'pepe@ejemplo.com',
      password: 'pepe',
    });

    // Wait for the next tick to allow the asynchronous registerUser method to complete
    await wrapper.vm.$nextTick();

    // Ensure that isSubmitting is set to false after the registration
    expect(wrapper.vm.isSubmitting).toBe(false);

   
  });

  it('handles error during registration', async () => {
    // Set up the mock to simulate an error during registration
    axios.post.mockRejectedValueOnce(new Error('Registration failed'));

    const wrapper = mount(LoginComponent);

    // Mock user input
    await wrapper.setData({ nombre: 'pepe', email: 'pepe@example.com', password: 'p' });

    // Simulate form submission
    await wrapper.find('.login-form').trigger('submit.prevent');

    // Wait for the next tick to allow the asynchronous registerUser method to complete
    await wrapper.vm.$nextTick();

    // Ensure that isSubmitting is set to false after the failed registration
    expect(wrapper.vm.isSubmitting).toBe(false);

   
  });
});
