const userService = require('./userService');
const userRepository = require('../repositories/userRepository');

describe('Unit tests of user service functions', () => {
  describe('createUser()', () => {
    it('Should return a new error because the user already exists', async () => {
      const user = {
        name: 'teste',
      };

      jest
        .spyOn(userRepository, 'getUserByName')
        .mockImplementationOnce(() => Promise.resolve(user));

      await expect(userService.createUser(user)).rejects.toThrow(
        'esse nome de usuário já está em uso'
      );
    });

    it('Should create a new user', async () => {
      const user = {
        name: 'teste',
      };

      const newUser = await userService.createUser(user);
      expect(newUser).toEqual(user);
    });
  });
});
