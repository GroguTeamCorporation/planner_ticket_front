jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));
