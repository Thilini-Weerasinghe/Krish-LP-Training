import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { PetsRepository } from '../repository/pets.repository';
import { Pet } from '../schemas/Pet.schema';
import { PetCreateDto } from '../dto/PetCreate.dto';
import { PetUpdateDto } from '../dto/PetUpdate.dto';

@Injectable()
export class PetsService {



    constructor(private petRepository: PetsRepository) { }

    async getAllPets(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }

    async createPet(petCreateDto: PetCreateDto): Promise<Pet> {

        return await this.petRepository.create(petCreateDto);
    }

    getPetById(id: string): Promise<Pet> {
        const pets = this.getAllPets();
        return this.petRepository.findById(id)
    }

    updatePet(petUpdatedto: PetUpdateDto): Promise<Pet> {

        return this.petRepository.update(petUpdatedto)
    }

    async delete(id: string): Promise<boolean> {

        let x = await this.petRepository.delete(id);
        console.log(x)
        return x;

    }
}
