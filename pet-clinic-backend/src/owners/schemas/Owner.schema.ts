import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { OwnerStatus, OwnerTier } from "../Owners.enum";

// export const OwnerSchema = ({
//     id: String,
//     firstName: String,
//     lastName: String,
//     address: String,
//     contactNumber: Number,
//     tier: OwnerTier,
//     status: OwnerStatus
// })
export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {
    @Prop()
    id: string
    @Prop()
    firstName: string
    @Prop()
    lastName: string
    @Prop()
    address: string
    @Prop()
    contactNumber: number
    @Prop()
    tier: OwnerTier
    @Prop()
    status: OwnerStatus
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
