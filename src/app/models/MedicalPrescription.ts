import { Schema, model, Document } from 'mongoose';
import { IDoctor } from './Doctor';

export interface IMedicalPrescriptionSchema extends Document {
    cpf_patient: string;
    name_patient: string;
    birth_patient: Date;
    dosage: string;
    frequency_use: string;
    doctor?: IDoctor;
    medicines: string[] | IDoctor[];
}

const MedicalPrescriptionSchema = new Schema(
    {
        cpf_patient: { type: String, required: true },
        name_patient: { type: String, required: true },
        birth_patient: { type: Date, required: true },
        dosage: { type: String },
        frequency_use: { type: String },
        medicines: [{ type: Schema.Types.ObjectId, ref: 'Medicine' }],
        doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    },
    { timestamps: true }
);

const MedicalPrescriptionModel = model<IMedicalPrescriptionSchema>(
    'MedicalPrescription',
    MedicalPrescriptionSchema
);

export default MedicalPrescriptionModel;
