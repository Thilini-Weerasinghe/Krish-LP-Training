import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { create } from "domain";
import { Model } from "mongoose";
import * as mongoose from 'mongoose';
import { PetCreateDto } from "../dto/PetCreate.dto";
import { PetUpdateDto } from "../dto/PetUpdate.dto";
import { Pet, PetDocument } from "../schemas/Pet.schema";

@Injectable()
export class PetsRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

    async create(createPetDto: PetCreateDto): Promise<Pet> {
        let newPet = new this.petModel(createPetDto);
        return await newPet.save();

    }
    async findAll(): Promise<Pet[]> {
        return await this.petModel.find().populate('ownerId');
    }

    async findById(id: string): Promise<Pet> {
        return await this.petModel.findById(id)
    }

    async findOne(id: string): Promise<Pet> {
        return await this.petModel.findOne({ _id: id })
    }

    async update(pet: PetUpdateDto): Promise<Pet> {

        return await this.petModel.findOneAndUpdate({ _id: pet.id },
            { age: pet.age }, {
            new: true
        })

    }
    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let ret = await this.petModel.deleteOne({ _id: objId })
        console.log(ret.n)
        return (ret.n === 1)
    }


}