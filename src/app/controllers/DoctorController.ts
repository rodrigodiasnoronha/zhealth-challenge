import { Request, Response } from 'express';
import DoctorModel from '../models/Doctor';
import {hashPassword} from "../utils/hashPassword";

class DoctorController {
    async store(request: Request, response: Response) {
        const {
            name,
            email,
            birth,
            crm,
            crm_state,
            gender,
            password,
            cpf,
        } = request.body;

        const checkCpfExists = await DoctorModel.findOne({ cpf });

        if (checkCpfExists) {
            return response.status(400).json({
                code: 'error/cpf-already-registered',
                message: 'This CPF is already registered in the system',
                statusCode: 400,
            });
        }

        const checkEmailExists = await DoctorModel.findOne({ email });
        if (checkEmailExists) {
            return response.status(400).json({
                code: 'error/email-already-registered',
                message: 'This Email is already registered in the system',
                statusCode: 400,
            });
        }

        const checkCrmExists = await DoctorModel.findOne({ crm });
        if (checkCrmExists) {
            return response.status(400).json({
                code: 'error/crm-already-registered',
                message: 'This CRM is already registered in the system',
                statusCode: 400,
            });
        }



        const doctor = await DoctorModel.create({
            name,
            email,
            birth,
            crm,
            crm_state,
            gender,
            password: hashPassword(password)  ,
            cpf,
        });

        return response.status(201).json(doctor);
    }

    async index(request: Request, response: Response) {
        return response.json();
    }
}

export default new DoctorController();
