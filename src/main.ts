import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Swagger } from './infrastructure/swagger/swagger';
import { Logger } from '@nestjs/common';
import { ConfigureEnv } from './infrastructure/configure/env/configure-env';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  Swagger.setup(app);

  const port = new ConfigureEnv().port;
  const host = new ConfigureEnv().host;

  await app.listen(port, () =>
    logger.log(`Server is running on http://${host}:${port}/swagger`),
  );
}
bootstrap();
