import {
  ClassSerializerInterceptor,
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreateBookingDto,
  UpdateBookingDto,
  DeleteBookingDto,
} from './bookings.dto';

@ApiTags('bookings')
@Controller('booking')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  public async getAllBookings() {
    return await this.bookingsService.getAllBookings();
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('')
  public async create(
    @Body()
    createBookingDto: CreateBookingDto,
  ) {
    return await this.bookingsService.create(createBookingDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Put('')
  public async update(
    @Body()
    updateBookingDto: UpdateBookingDto,
  ) {
    return await this.bookingsService.update(updateBookingDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  public async delete(@Param() params: DeleteBookingDto) {
    return await this.bookingsService.delete(parseInt(params.id));
  }
}
