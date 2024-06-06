import { User } from '@prisma/client';
import { PrismaInstance } from '@/infrastructure/database/prisma-instance/prisma-instance';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '@/domain/entities/user/user-entity';

@Injectable()
export class DbUserRepository {
  constructor(private readonly prismaInstance: PrismaInstance) {}

  public async add(userEntity: UserEntity): Promise<User> {
    return await this.prismaInstance.user.create({
      data: userEntity.props,
    });
  }

  public async findAndFilters(
    whereConditional: Record<string, string>,
  ): Promise<User[]> {
    return await this.prismaInstance.user.findMany({
      where: whereConditional,
      include: {
        posts: true,
      },
    });
  }

  public async findById(id: number): Promise<User> {
    return await this.prismaInstance.user.findFirst({
      where: {
        id,
      },
    });
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.prismaInstance.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async update(id: number, userEntity: UserEntity): Promise<User> {
    return await this.prismaInstance.user.update({
      where: {
        id,
      },
      data: userEntity.props,
    });
  }

  public async delete(id: number): Promise<void> {
    await this.prismaInstance.user.delete({
      where: {
        id,
      },
    });
  }
}
