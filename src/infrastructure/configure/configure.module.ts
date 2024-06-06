import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigureEnv } from './env/configure-env';

const configureEnv = new ConfigureEnv().pathEnv;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: configureEnv,
    }),
  ],
})
export class ConfigureModule {}
