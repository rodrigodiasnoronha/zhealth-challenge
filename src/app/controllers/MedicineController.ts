import { Request, Response } from 'express';
import MedicineModel from '../models/Medicine';

class MedicineController {
    async store(request: Request, response: Response) {
        const { name, description } = request.body;

        const medicine = await MedicineModel.create({ name, description });

        return response.status(201).json(medicine);
    }

    async index(request: Request, response: Response) {
        const medicines = await MedicineModel.find();

        return response.json(medicines);
    }
}

export default new MedicineController();
