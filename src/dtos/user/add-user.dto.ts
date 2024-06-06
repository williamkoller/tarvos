import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddUserDto {
  @ApiProperty({ example: 'Name of user' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Surname of user' })
  @IsNotEmpty({ message: 'Surname is required' })
  @IsString()
  surname: string;

  @ApiProperty({ example: 22, required: false })
  @IsOptional({ message: 'Age is optional' })
  @IsNumber()
  age?: number;

  @ApiProperty({ example: 'Email of user' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password of user' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  password: string;
}
