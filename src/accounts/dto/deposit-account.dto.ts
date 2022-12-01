import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, NotEquals } from 'class-validator';

export class DepositDto {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @NotEquals(0)
  value: number;

  userId?: string;
}
