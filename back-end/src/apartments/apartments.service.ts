import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Apartment } from '@prisma/client';

@Injectable()
export class ApartmentsService {
  constructor(private prisma: PrismaService) {}

  async getAllApartments(): Promise<Apartment[]> {
    return this.prisma.apartment.findMany();
  }
}
