import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { DbUserRepository } from '../../../infrastructure/database/prisma-instance/repositories/user/db-user.repository';
import { User } from '@prisma/client';
import { AddUserDto } from '../../../dtos/user/add-user.dto';
import { UserEntity } from '../../../domain/entities/user/user-entity';
import { BcryptAdapter } from '../../../infrastructure/cryptography/bcrypt-adapter/bcrypt-adapter';

@Injectable()
export class AddUserUseCase {
  private logger = new Logger('AddUserUseCase');
  private userAlreadyExists: ConflictException = new ConflictException(
    'User already exists',
  );
  constructor(
    private readonly userRepository: DbUserRepository,
    private readonly bcryptAdapter: BcryptAdapter,
  ) {}

  public async execute(addUserDto: AddUserDto): Promise<User> {
    try {
      const user = await this.userRepository.findByEmail(addUserDto.email);

      if (user) {
        throw this.userAlreadyExists;
      }

      const userEntity = UserEntity.create({
        ...addUserDto,
        password: await this.bcryptAdapter.hash(addUserDto.password),
      });

      return await this.userRepository.add(userEntity);
    } catch (error) {
      this.logger.error(error.message);
      if (error instanceof ConflictException) {
        throw this.userAlreadyExists;
      }
      throw new BadRequestException(error.message);
    }
  }
}
