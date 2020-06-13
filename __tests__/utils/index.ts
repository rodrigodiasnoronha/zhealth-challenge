import DoctorModel from '../../src/app/models/Doctor';
import { hashPassword } from '../../src/app/utils/hashPassword';
import MedicineModel from '../../src/app/models/Medicine';

export const createDoctor = async (props?: object) =>
    DoctorModel.create({
        name: 'Joseph Joestar',
        email: 'joestar@joestar.com',
        password: hashPassword('123_123_123'),
        cpf: '12312312312',
        crm: 12312312312,
        crm_state: 'DF',
        gender: 'M',
        birth: new Date(15, 9, 1920),
        ...props,
    });

export const deleteAllDoctors = async () =>
    await DoctorModel.deleteMany({}, () => {});

export const createMedicine = async (props?: object) =>
    await MedicineModel.create({
        name: 'dipirona',
        description: 'adult use',
        ...props,
    });

export const deleteAllMedicines = async () =>
    await MedicineModel.deleteMany({}, () => {});
