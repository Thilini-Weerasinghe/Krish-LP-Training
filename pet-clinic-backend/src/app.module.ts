import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [OwnersModule, MongooseModule.forRoot(MONGO_CONNECTION)],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
