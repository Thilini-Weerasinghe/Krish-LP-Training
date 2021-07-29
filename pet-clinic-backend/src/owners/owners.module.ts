import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OwnersController } from './controllers/owners.controller';
import { OwnersRepository } from './repository/owners.repository';
import { OwnersService } from './services/owners.service';
import { Owner, OwnerSchema } from './schemas/Owner.schema';
import { Pet, PetSchema } from './schemas/Pet.schema';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';
import { PetsRepository } from './repository/pets.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }, { name: Pet.name, schema: PetSchema }])],
  controllers: [OwnersController, PetsController],
  providers: [OwnersService, OwnersRepository, PetsService, PetsRepository]
})
export class OwnersModule { }
