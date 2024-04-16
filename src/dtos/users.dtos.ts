import { IsString, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

// IsString, etc son llamadas validaciones para hacer mas concreto el campo deseado
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;
}

// el signo de interrogacion es para decir que los atributos quedan de forma opcional
export class UpdateUserDto extends PartialType(CreateUserDto) {}
