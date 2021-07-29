import { IsNotEmpty } from "class-validator";
import { OwnerStatus, OwnerTier } from "../Owners.enum";

export class OwnerCreateDto {
    id: string

    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    address: string
    contactNumber: number
    tier: OwnerTier
    status: OwnerStatus
}