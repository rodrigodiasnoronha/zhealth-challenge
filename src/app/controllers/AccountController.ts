import { Request, Response } from 'express';
import DoctorModel, { IDoctor } from '../models/Doctor';

type AuthRequest = Request & { user: IDoctor };

class AccountController {
    async index(request: AuthRequest, response: Response) {
        const account = await DoctorModel.findById(request.user._id).populate(
            'medicalPrescriptions'
        );

        return response.json(account);
    }
}

export default new AccountController();
