import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Booking } from '@prisma/client';
import { CreateBookingDto, UpdateBookingDto } from './bookings.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async getAllBookings(): Promise<Booking[]> {
    return this.prisma.booking.findMany();
  }

  async create(bookingDto: CreateBookingDto): Promise<any> {
    const bookingInDb = await this.prisma.booking.findFirst({
      where: { apartmentId: bookingDto.apartmentId },
    });
    const userInDb = await this.prisma.user.findFirst({
      where: { id: bookingDto.userId },
    });
    const apartmentInDb = await this.prisma.apartment.findFirst({
      where: { id: bookingDto.apartmentId },
    });

    if (bookingInDb) {
      throw new HttpException('apartment_already_booked', HttpStatus.CONFLICT);
    }
    if (!userInDb) {
      throw new HttpException('user_not_found', HttpStatus.NOT_FOUND);
    }
    if (!apartmentInDb) {
      throw new HttpException('apartment_not_found', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.booking.create({
      data: {
        ...bookingDto,
      },
    });
  }

  async update(bookingDto: UpdateBookingDto): Promise<any> {
    const bookingInDb = await this.prisma.booking.findFirst({
      where: { id: bookingDto.id },
    });
    const userInDb = await this.prisma.user.findFirst({
      where: { id: bookingDto.userId },
    });
    const apartmentInDb = await this.prisma.apartment.findFirst({
      where: { id: bookingDto.apartmentId },
    });

    if (!bookingInDb) {
      throw new HttpException('booking_not_found', HttpStatus.NOT_FOUND);
    }
    if (!userInDb) {
      throw new HttpException('user_not_found', HttpStatus.NOT_FOUND);
    }
    if (!apartmentInDb) {
      throw new HttpException('apartment_not_found', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.booking.update({
      where: { id: bookingDto.id },
      data: {
        ...bookingDto,
      },
    });
  }

  async delete(id: number): Promise<any> {
    const bookingInDb = await this.prisma.booking.findFirst({
      where: { id },
    });

    if (!bookingInDb) {
      throw new HttpException('booking_not_found', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.booking.delete({
      where: { id },
    });
  }
}
