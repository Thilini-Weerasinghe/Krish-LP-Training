import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerTierValidationPipe } from 'src/owner-tier-validation.pipe';
import { OwnerStatus, OwnerTier } from '../Owners.enum';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
import { OwnersService } from '../services/owners.service';
import { OwnerSearchDto } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';
import { Owner } from '../schemas/Owner.schema';

@Controller('owners')
export class OwnersController {

    constructor(private ownerService: OwnersService) {

    }

    @Get()
    // @UsePipes(ValidationPipe)
    async getAllOwners(@Query() param: OwnerSearchDto): Promise<Owner[]> {
        // if (Object.keys(param).length) {
        //     // console.log('filter')
        //     return this.ownerService.ownerSearch(param);

        // } else {
        //     // console.log('No Filter')
        //     return this.ownerService.getAllOwners();
        // }

        return await this.ownerService.getAllOwners();
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new OwnerTierValidationPipe())
    createOwners(@Body() ownerCreateDto: OwnerCreateDto): Promise<Owner> {

        return this.ownerService.createOwner(ownerCreateDto);

    }

    @Get('/:id')
    getOwnerById(@Param('id') id: string): Promise<Owner> {
        return this.ownerService.getOwnerById(id)
    }

    // @Put('/:id/address')
    // updateOwner(@Param('id') id: string, @Body() ownerUpdateDto: OwnerUpdateDto) {
    //     ownerUpdateDto.id = id
    //     return this.ownerService.updateOwner(ownerUpdateDto)

    // }

    // @Delete('/:id')
    // @HttpCode(204)
    // deleteOwner(@Param('id') id: string) {
    //     if (!this.ownerService.delete(id)) {
    //         throw new NotFoundException('Owner does not exist');
    //     }
    // }

    // @Get('/:id')
    // getOwnerById(@Param('id') id: string): Promise<Owner> {

    //     return this.ownerService.getOwnerById(id)
    // }

    @Put('/:id/address')
    updateOwner(@Param('id') id: string, @Body() ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        ownerUpdateDto.id = id
        return this.ownerService.updateOwner(ownerUpdateDto)
    }
    @Delete('/:id')
    @HttpCode(204)
    async deleteOwners(@Param('id') id: string) {
        let y = await this.ownerService.delete(id);
        if (!y) {
            throw new NotFoundException('Record not found to delete')
        }

    }
}
