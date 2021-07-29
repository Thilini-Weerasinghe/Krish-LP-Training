// import { IsNotEmpty } from "class-validator";
// import { OwnerStatus, OwnerTier } from "../Owners.enum";
import { Owner } from "../schemas/Owner.schema";

export class PetCreateDto {
    id: string
    name: string
    age: number
    ownerId: string

}