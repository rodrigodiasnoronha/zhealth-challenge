import { Schema, model, Document } from 'mongoose';
import { IMedicalPrescriptionSchema } from './MedicalPrescription';

export interface IDoctor extends Document {
    cpf: string;
    name: string;
    email: string;
    birth: Date;
    crm: number;
    crm_state: string;
    gender: string;
    password: string;
    medicalPrescriptions: IMedicalPrescriptionSchema[] | string[];
}

const DoctorSchema = new Schema(
    {
        name: { type: String, required: true },
        cpf: { type: String, required: true, unique: true },
        email: { type: String, unique: true, required: true },
        birth: { type: Date, required: true },
        crm: { type: Number, required: true, unique: true },
        crm_state: { type: String, required: true },
        gender: { type: String, required: true },
        password: { type: String, required: true },
        medicalPrescriptions: [
            { type: Schema.Types.ObjectId, ref: 'MedicalPrescription' },
        ],
    },
    { timestamps: true }
);

const DoctorModel = model<IDoctor>('Doctor', DoctorSchema);

export default DoctorModel;
