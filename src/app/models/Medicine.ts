import { model, Schema, Document } from 'mongoose';

export interface IMedicine extends Document {
    name: string;
    description: string;
}

const MedicineSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

const MedicineModel = model<IMedicine>('Medicine', MedicineSchema);

export default MedicineModel;
