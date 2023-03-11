import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @IsNotEmpty()
  @ApiProperty()
  dateOfArrival: Date;

  @IsNotEmpty()
  @ApiProperty()
  dateOfDeparture: Date;

  @IsNotEmpty()
  @ApiProperty()
  cleaningService: boolean;

  @ApiProperty()
  @IsNotEmpty()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  apartmentId: number;
}

export class UpdateBookingDto {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  dateOfArrival: Date;

  @IsNotEmpty()
  @ApiProperty()
  dateOfDeparture: Date;

  @IsNotEmpty()
  @ApiProperty()
  cleaningService: boolean;

  @ApiProperty()
  @IsNotEmpty()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  apartmentId: number;
}

export class DeleteBookingDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
