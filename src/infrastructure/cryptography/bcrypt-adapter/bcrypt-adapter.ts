import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class BcryptAdapter {
  salt = 12;
  public async hash(plaintext: string): Promise<string> {
    return await hash(plaintext, this.salt);
  }

  public async compare(plaintext: string, digest: string): Promise<boolean> {
    return await compare(plaintext, digest);
  }
}
