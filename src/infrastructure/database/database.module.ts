import { Module } from '@nestjs/common';
import { PrismaInstanceModule } from '@/infrastructure/database/prisma-instance/prisma-instance.module';
import { DbUserRepository } from '@/infrastructure/database/prisma-instance/repositories/user/db-user.repository';

@Module({
  imports: [PrismaInstanceModule],
  providers: [DbUserRepository],
  exports: [DbUserRepository],
})
export class DatabaseModule {}
