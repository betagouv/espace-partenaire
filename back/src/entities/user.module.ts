import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
})
export class UserModule {}
