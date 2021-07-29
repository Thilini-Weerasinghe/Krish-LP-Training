import { Injectable, NotFoundException } from '@nestjs/common';
import { OwnerStatus, OwnerTier } from '../Owners.enum';
import { v1 as uuid } from 'uuid';
import { OwnerSearchDto } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
import { Owner } from '../schemas/Owner.schema';
import { OwnersRepository } from '../repository/owners.repository';
import { Messages } from '../Messages.data';

@Injectable()
export class OwnersService {

    // private owners: Owner[] = []

    constructor(private ownerRepository: OwnersRepository) { }

    async getAllOwners(): Promise<Owner[]> {
        return await this.ownerRepository.findAll();
    }

    async createOwner(ownerCreateDto: OwnerCreateDto): Promise<Owner> {

        return await this.ownerRepository.create(ownerCreateDto);

        // const {
        //     firstName,
        //     lastName,
        //     address,  
        //     contactNumber,
        //     tier
        // } = ownerCreateDto

        // const owner = {
        //     id: uuid(),
        //     firstName,
        //     lastName,
        //     address,
        //     contactNumber,
        //     tier,
        //     status: OwnerStatus.ACTIVE

        // }

        // this.owners.push(owner)
        // return owner
    }

    // ownerSearch(ownerSearchDto: OwnerSearchDto) {
    //     console.log(ownerSearchDto)
    //     const { status, name } = ownerSearchDto;
    //     let owners = this.getAllOwners();
    //     if (status) {
    //         owners = owners.filter(owner => owner.status === status);

    //     }

    //     if (name) {
    //         owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name))
    //         console.log(owners)
    //     }

    //     return owners;

    // }

    getOwnerById(id: string): Promise<Owner> {
        const owners = this.getAllOwners();
        return this.ownerRepository.findById(id)
    }

    // updateOwner(ownerUpdateDto: OwnerUpdateDto): Owner {

    //     const { id, address } = ownerUpdateDto;
    //     let owner = this.getOwnerById(id)
    //     owner.address = address

    //     return owner;
    // }

    // deleteOwner(id: string): Promise<Owner> {
    //     // let owners = this.getAllOwners();
    //     // this.owners = owners.filter(owner => owner.id != id)

    //     // return (owners.length != this.owners.length)
    //     return this.ownerRepository.delete(id)
    // }


    // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    //     return this.ownerRepository.findWithFilters(employeeSearchDto);
    // }

    // getOwnerById(id: string): Promise<Owner> {

    //     let owner = this.ownerRepository.findOne(id)
    //     if (!owner) {
    //         throw new NotFoundException(`${id} ${Messages.OWNER_NOT_EXSIST}`)
    //     }
    //     return owner
    // }
    updateOwner(ownerUpdatedto: OwnerUpdateDto): Promise<Owner> {

        return this.ownerRepository.update(ownerUpdatedto)
    }

    async delete(id: string): Promise<boolean> {

        let x = await this.ownerRepository.delete(id);
        console.log(x)
        return x;

    }
}
