module.exports = () =>
  Object.defineProperty(window, 'Sanitizer', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      sanitize: function (input) {
        return input;
      },
      sanitizeToString: function (input) {
        return input;
      },
    })),
  });
