import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Apartment } from '@prisma/client';
import { UpdateApartmentDto } from './apartments.dto';

@Injectable()
export class ApartmentsService {
  constructor(private prisma: PrismaService) {}

  async getAllApartments(): Promise<Apartment[]> {
    return this.prisma.apartment.findMany();
  }

  async getApartmentById(id: number): Promise<Apartment | null> {
    return this.prisma.apartment.findFirst({
      where: {
        id,
      },
    });
  }

  async update(apartmentDto: UpdateApartmentDto): Promise<any> {
    const apartmentInDb = await this.prisma.apartment.findFirst({
      where: { id: apartmentDto.id },
    });

    if (!apartmentInDb) {
      throw new HttpException('apartment_not_found', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.apartment.update({
      where: { id: apartmentDto.id },
      data: {
        ...apartmentDto,
      },
    });
  }
}
