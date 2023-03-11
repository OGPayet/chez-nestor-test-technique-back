import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApartmentDto {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  titleSlug: string;

  @IsNotEmpty()
  @ApiProperty()
  imageSrc: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsNotEmpty()
  @ApiProperty()
  numberOfParkingSpaces: number;

  @IsNotEmpty()
  @ApiProperty()
  numberOfBathrooms: number;

  @IsNotEmpty()
  @ApiProperty()
  numberOfBedrooms: number;

  @IsNotEmpty()
  @ApiProperty()
  area: number;

  @IsNotEmpty()
  @ApiProperty()
  pricePerSquareMeter: number;

  @IsNotEmpty()
  @ApiProperty()
  isBooked: boolean;
}
