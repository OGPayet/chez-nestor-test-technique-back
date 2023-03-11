import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Param,
  Put,
  Body,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApartmentsService } from './apartments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateApartmentDto } from './apartments.dto';

@ApiTags('apartments')
@Controller('apartment')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  public async getAllApartments() {
    return await this.apartmentsService.getAllApartments();
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('apartmentIdByTitleSlug/:titleSlug')
  public async getApartmentById(@Param('id') id: string) {
    return await this.apartmentsService.getApartmentById(parseInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Put('')
  public async update(
    @Body()
    updateApartmentDto: UpdateApartmentDto,
  ) {
    return await this.apartmentsService.update(updateApartmentDto);
  }
}
