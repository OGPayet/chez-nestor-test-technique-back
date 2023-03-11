import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ApartmentsModule } from './apartments/apartments.module';

@Module({
  imports: [AuthModule, UsersModule, ApartmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
