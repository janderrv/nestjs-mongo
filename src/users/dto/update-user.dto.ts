import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  age: number;

  @ApiProperty()
  favoriteFoods: string[];
}
