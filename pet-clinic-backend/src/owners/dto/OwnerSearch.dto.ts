import { IsIn } from "class-validator";
import { OwnerStatus } from "../Owners.enum";

export class OwnerSearchDto {
    @IsIn(Object.values(OwnerStatus))
    status: OwnerStatus
    name: string
}