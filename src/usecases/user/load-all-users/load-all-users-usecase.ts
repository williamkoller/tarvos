import { User } from '@prisma/client';
import { DbUserRepository } from '../../../infrastructure/database/prisma-instance/repositories/user/db-user.repository';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { FiltersUsersDto } from '../../../dtos/user/filters-users.dto';

@Injectable()
export class LoadAllUsersUseCase {
  private logger = new Logger('LoadAllUsersUseCase');
  constructor(private readonly userRepository: DbUserRepository) {}

  async loadAllUsers(filters: FiltersUsersDto): Promise<User[]> {
    try {
      const { name, surname, email } = filters;
      let whereCondition = {};

      if (name || surname || email) {
        whereCondition = {
          OR: [
            name ? { name: { contains: name, mode: 'insensitive' } } : {},
            surname
              ? { surname: { contains: surname, mode: 'insensitive' } }
              : {},
            email ? { email: { contains: email, mode: 'insensitive' } } : {},
          ],
        };
      }
      return await this.userRepository.findAndFilters(whereCondition);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
