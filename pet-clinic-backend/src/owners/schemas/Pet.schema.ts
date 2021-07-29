import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Owner } from "./Owner.schema";

export type PetDocument = Pet & Document;

@Schema()
export class Pet {

    @Prop()
    id: string
    @Prop()
    name: string
    @Prop()
    age: number
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
    ownerId: Owner
}
export const PetSchema = SchemaFactory.createForClass(Pet);