import MedicalPrescriptionModel from '../models/MedicalPrescription';
import { Request, Response } from 'express';
import { IDoctor } from '../models/Doctor';

type AuthRequest = Request & { user: IDoctor };

class MedicalPrescriptionController {
    async store(request: AuthRequest, response: Response) {
        const {
            cpf_patient = '',
            name_patient = '',
            birth_patient = new Date().toISOString(),
            dosage = '',
            frequency_use = '',
            medicines = '',
        } = request.body;

        const arrayMedicinesIdInString = medicines.split(',');
        const arrayMedicinesIdObject = arrayMedicinesIdInString.map(
            (id: string) => {
                return { _id: id };
            }
        );

        let medicinesArray = medicines ? arrayMedicinesIdObject : [];
        const medicalPrescription = await MedicalPrescriptionModel.create({
            cpf_patient,
            name_patient,
            birth_patient,
            dosage,
            frequency_use,
            doctor: request.user,
            medicines: medicinesArray,
        });
        request.user.medicalPrescriptions.push(medicalPrescription._id);
        await request.user.save();

        return response.status(201).json(medicalPrescription);
    }

    async index(request: AuthRequest, response: Response) {
        const medicalPrescriptions = await MedicalPrescriptionModel.find({
            doctor: request.user._id,
        })
            .populate('medicines')
            .populate('doctor');

        return response.json(medicalPrescriptions);
    }
}

export default new MedicalPrescriptionController();
