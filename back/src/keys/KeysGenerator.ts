import { ClientKeys } from 'src/type';
import { randomBytes } from 'crypto';

export class KeysGenerator {
  generate(): ClientKeys {
    const clientId = randomBytes(64).toString('hex');
    const clientSecret = randomBytes(64).toString('hex');
    return { clientId, clientSecret };
  }
}
