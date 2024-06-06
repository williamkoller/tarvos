import { Injectable } from '@nestjs/common';
import { PrismaInstance } from '../../prisma-instance';
import { Post } from '@prisma/client';

@Injectable()
export class DbPostRepository {
  constructor(private readonly prismaInstance: PrismaInstance) {}

  public async add(data: any): Promise<Post> {
    return this.prismaInstance.post.create({ data });
  }

  public async findAndFilters(
    filters: Record<string, string>,
  ): Promise<Post[]> {
    return this.prismaInstance.post.findMany({
      where: filters,
      include: { author: true },
    });
  }

  public async findById(id: number): Promise<Post> {
    return this.prismaInstance.post.findFirst({
      where: { id },
    });
  }

  public async update(id: number, data: any): Promise<Post> {
    return this.prismaInstance.post.update({
      where: { id },
      data,
    });
  }

  public async delete(id: number): Promise<Post> {
    return this.prismaInstance.post.delete({
      where: { id },
    });
  }
}
