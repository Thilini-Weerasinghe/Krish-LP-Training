import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetsService } from '../services/pets.service';
import { Pet } from '../schemas/Pet.schema';
import { PetCreateDto } from '../dto/PetCreate.dto';
import { PetSearchDto } from '../dto/PetSearch.dto';
import { PetUpdateDto } from '../dto/PetUpdate.dto';

@Controller('pets')
export class PetsController {

    constructor(private petService: PetsService) {

    }

    @Get()
    async getAllPets(@Query() param: PetSearchDto): Promise<Pet[]> {


        return await this.petService.getAllPets();
    }

    @Post()
    createPets(@Body() petCreateDto: PetCreateDto): Promise<Pet> {

        return this.petService.createPet(petCreateDto);

    }

    @Get('/:id')
    getPetById(@Param('id') id: string): Promise<Pet> {
        return this.petService.getPetById(id)
    }

    // @Delete('/:id')
    // @HttpCode(204)
    // deletePet(@Param('id') id: string) {
    //     if (!this.petService.delete(id)) {
    //         throw new NotFoundException('Pet does not exist');
    //     }
    // }

    @Put('/:id/age')
    updateOwner(@Param('id') id: string, @Body() petUpdateDto: PetUpdateDto): Promise<Pet> {
        petUpdateDto.id = id
        return this.petService.updatePet(petUpdateDto)
    }
    @Delete('/:id')
    @HttpCode(204)
    async deletePets(@Param('id') id: string) {
        let y = await this.petService.delete(id);
        if (!y) {
            throw new NotFoundException('Record not found to delete')
        }

    }
}
