import { mount } from '@vue/test-utils';
import LoginComponent from '@/views/LoginView.vue';
import axios from 'axios';
import { describe, it } from 'node:test';
import { expect } from '@jest/globals';

jest.mock('axios', () => ({
  post: jest.fn().mockImplementation(() => Promise.resolve({ data:{} })),
}));

describe('LoginComponent', () => {
  it('renders the login form', () => {
    const wrapper = mount(LoginComponent);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('.logo').exists()).toBe(true);
  });

  it('calls login method on form submission and handles successful login', async () => {
    const wrapper = mount(LoginComponent);

    // Mock user input
    await wrapper.setData({ email: 'pepe@ejemplo.com', password: 'pepe' });

    // Simulate form submission
    await wrapper.find('.login-form').trigger('submit.prevent');

    // Verify that axios.post is called with the correct data
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/v1/login', {
      email: 'pepe@ejemplo.com',
      password: 'pepe',
    });

    // Wait for the next tick to allow the asynchronous login method to complete
    await wrapper.vm.$nextTick();

    // Ensure that isSubmitting is set to false after successful login
    expect(wrapper.vm.isSubmitting).toBe(false);
  });

  it('handles error during login', async () => {
    // Set up the mock to simulate an error during login
    axios.post.mockRejectedValueOnce(new Error('Login failed'));

    const wrapper = mount(LoginComponent);

    // Mock user input
    await wrapper.setData({ email: 'pepe@example.com', password: 'pepe' });

    // Simulate form submission
    await wrapper.find('.login-form').trigger('submit.prevent');

    // Wait for the next tick to allow the asynchronous login method to complete
    await wrapper.vm.$nextTick();

    // Ensure that isSubmitting is set to false after the failed login
    expect(wrapper.vm.isSubmitting).toBe(false);
  });
});


