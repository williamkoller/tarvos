import { Module } from '@nestjs/common';
import { PrismaInstance } from './prisma-instance';

@Module({
  providers: [PrismaInstance],
  exports: [PrismaInstance],
})
export class PrismaInstanceModule {}
