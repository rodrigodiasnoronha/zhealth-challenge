// eslint-ignore-file
import { Router } from 'express';
import DoctorController from '../app/controllers/DoctorController';
import {
    createDoctorValidator,
    createMedicalPrescriptionValidator,
    createMedicineValidator,
    loginValidator,
} from '../app/validators';
import AuthController from '../app/controllers/AuthController';
import MedicineController from '../app/controllers/MedicineController';
import MedicalPrescriptionController from '../app/controllers/MedicalPrescriptionController';
import AuthMiddleware from '../middlewares/auth';
import AccountController from '../app/controllers/AccountController';

const routes = Router();

routes.post('/login', loginValidator, AuthController.store);

routes.get('/account', AuthMiddleware.authenticated, AccountController.index);

routes.post('/doctors', createDoctorValidator, DoctorController.store);
routes.get('/doctors', DoctorController.index);

routes.post(
    '/medicines',
    AuthMiddleware.authenticated,
    createMedicineValidator,
    MedicineController.store
);
routes.get('/medicines', MedicineController.index);

routes.post(
    '/medical_prescriptions',
    AuthMiddleware.authenticated,
    createMedicalPrescriptionValidator,
    MedicalPrescriptionController.store
);
routes.get(
    '/medical_prescriptions',
    AuthMiddleware.authenticated,
    MedicalPrescriptionController.index
);

export default routes;
