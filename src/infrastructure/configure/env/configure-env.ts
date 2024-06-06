import { ConfigService } from '@nestjs/config';

export class ConfigureEnv {
  private config: ConfigService = new ConfigService();

  get port(): number {
    return this.config.get<number>('PORT') ?? 3002;
  }

  get pathEnv(): string {
    return this.config.get<string>('PATH_ENV') ?? '.env';
  }

  get host(): string {
    return this.config.get<string>('HOST') ?? 'localhost';
  }
}
