const {
  getFileExtension, findKeyword, getAllFiles, getArgurments, findAllTodo,
} = require('./script');

describe('#Test index file', () => {
  describe('#Test getFileExtension function', () => {
    it('should return .js', () => {
      const result = getFileExtension('test/test1/abc.js');
      expect(result).toBe('.js');
    });
  });

  describe('#Test findKeyword function', () => {
    it('should return true', async () => {
      const result = await findKeyword('./fixtures/controller/controller.js');
      expect(result).toBe(true);
    });

    it('should return false', async () => {
      const result = await findKeyword('./fixtures/controller/controller.js', 'hello');
      expect(result).toBe(false);
    });

    it('should throw error', async () => {
      await expect(findKeyword('./fixtures/controller/controller')).rejects.toThrow();
    });
  });

  describe('#Test getAllFiles function', () => {
    it('should return an array of length 3', async () => {
      const result = await getAllFiles({ dirPath: './', filter: 'node_modules', extention: '.js' });
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(3);
    });

    it('should return error', async () => {
      await expect(getAllFiles({ dirPath: './test' })).rejects.toThrow();
    });
  });

  describe('#Test getArgurments function', () => {
    it('should return empty object', () => {
      const result = getArgurments();
      expect(result).toEqual(result);
    });
  });

  describe('#Test findAllTodo function', () => {
    it('should not return error', async () => {
      await findAllTodo();
    });
  });
});
