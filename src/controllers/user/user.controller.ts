import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AddUserUseCase } from '../../usecases/user/add-user/add-user.usecase';
import { AddUserDto } from '../../dtos/user/add-user.dto';
import { User } from '@prisma/client';
import { LoadAllUsersUseCase } from '../../usecases/user/load-all-users/load-all-users-usecase';
import { FiltersUsersDto } from '../../dtos/user/filters-users.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly addUserUseCase: AddUserUseCase,
    private readonly loadAllUsersUseCase: LoadAllUsersUseCase,
  ) {}

  @ApiOperation({ description: 'Add a user' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post()
  async add(@Body() addUserDto: AddUserDto): Promise<User> {
    return await this.addUserUseCase.execute(addUserDto);
  }

  @ApiOperation({ description: 'Load all users' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Get()
  async loadAll(@Query() filters: FiltersUsersDto): Promise<User[]> {
    return await this.loadAllUsersUseCase.loadAllUsers(filters);
  }
}
