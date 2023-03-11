import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Apartment } from '@prisma/client';

@Injectable()
export class ApartmentsService {
  constructor(private prisma: PrismaService) {}

  async getAllApartments(): Promise<Apartment[]> {
    return this.prisma.apartment.findMany();
  }

  async getApartmentIdByTitleSlug(
    titleSlug: string,
  ): Promise<Apartment | null> {
    return this.prisma.apartment.findFirst({
      where: {
        titleSlug,
      },
    });
  }
}
