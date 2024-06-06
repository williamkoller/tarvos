import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class FiltersUsersDto {
  @ApiProperty({ example: 'John' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Doe' })
  @IsOptional()
  @IsString()
  surname: string;

  @ApiProperty({ example: 'johndoe@mail.com' })
  @IsOptional()
  @IsEmail()
  email: string;
}
