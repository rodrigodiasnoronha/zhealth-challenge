import { Joi, Segments, celebrate } from 'celebrate';

export const createDoctorValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        crm: Joi.number().required(),
        crm_state: Joi.string().required(),
        gender: Joi.string().required(),
        cpf: Joi.string().required(),
        birth: Joi.date().required(),
    }),
});

export const loginValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
});

export const createMedicineValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
    }),
});

export const createMedicalPrescriptionValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        cpf_patient: Joi.string().required(),
        name_patient: Joi.string().required(),
        birth_patient: Joi.date().required(),
        dosage: Joi.string().required(),
        frequency_use: Joi.string().required(),
        medicines: Joi.string().required(),
    }),
});
