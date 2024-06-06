import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { AddUserUseCase } from '../../../usecases/user/add-user/add-user.usecase';
import { UserController } from '../../../controllers/user/user.controller';
import { BcryptAdapter } from '../../cryptography/bcrypt-adapter/bcrypt-adapter';
import { LoadAllUsersUseCase } from '../../../usecases/user/load-all-users/load-all-users-usecase';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [AddUserUseCase, BcryptAdapter, LoadAllUsersUseCase],
  exports: [BcryptAdapter],
})
export class UserModule {}
