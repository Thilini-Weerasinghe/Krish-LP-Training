import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { create } from "domain";
import { Model } from "mongoose";
import * as mongoose from 'mongoose';
import { async } from "rxjs";
import { OwnerCreateDto } from "../dto/OwnerCreate.dto";
import { OwnerSearchDto } from "../dto/OwnerSearch.dto";
import { OwnerUpdateDto } from "../dto/OwnerUpdate.dto";
import { Owner, OwnerDocument } from "../schemas/Owner.schema";

@Injectable()
export class OwnersRepository {

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) { }

    async create(createOwnerDto: OwnerCreateDto): Promise<Owner> {
        let newOwner = new this.ownerModel(createOwnerDto);
        return await newOwner.save();

    }
    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find();
    }

    async findById(id: string): Promise<Owner> {
        return await this.ownerModel.findById(id)
    }

    async findOne(id: string): Promise<Owner> {
        return await this.ownerModel.findOne({ _id: id })
    }
    // async findWithFilters(filter: OwnerSearchDto) {
    //     let name = Object.is(filter.name, undefined) ? '' : filter.name
    //     let designation = Object.is(filter.designation, undefined) ? '' : filter.designation
    //     return await this.ownerModel.find({ $and: [{ designation: { $regex: designation } }, { firstName: { $regex: name } }] })

    // }
    async update(owner: OwnerUpdateDto): Promise<Owner> {

        return await this.ownerModel.findOneAndUpdate({ _id: owner.id },
            { address: owner.address }, {
            new: true
        })

    }
    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let ret = await this.ownerModel.deleteOne({ _id: objId })
        console.log(ret.n)
        return (ret.n === 1)
    }

}