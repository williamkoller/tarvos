import { Module } from '@nestjs/common';
import { HealthCheckModule } from './infrastructure/ioc/health-check/health-check.module';
import { UserModule } from './infrastructure/ioc/user/user.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule, HealthCheckModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
