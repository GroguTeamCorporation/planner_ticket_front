() => ({
  post: jest.fn().mockImplementation(() => Promise.reject(new Error('Login failed')))
});
