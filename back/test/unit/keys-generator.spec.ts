import { KeysGenerator } from '../../src/keys/keys-generator';

describe('KeyGenerator', () => {
  let keysGenerator: KeysGenerator;

  beforeAll(async () => {
    keysGenerator = new KeysGenerator();
  });

  describe('KeysGenerator', () => {
    it('should return 2 differents keys', () => {
      const { clientId, clientSecret } = keysGenerator.generate();
      expect(clientId).not.toBeNull();
      expect(clientSecret).not.toBeNull();
      expect(clientId).not.toBe(clientSecret);
    });
  });
});
