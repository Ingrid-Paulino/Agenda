import Joi from 'joi';
import { IClient, IProfessional, commonDates, IAddress, IAdmin, ISpecialtie, IHorary } from '../interface';
import { runSchema } from '../validators';

const ClientSchema = async (value: unknown): Promise<IClient> => {
  const schema = Joi.object<IClient>({
    fullName: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
    professionalId: Joi.string().required(),
    // addressId: Joi.string().required(),
    // horaryId: Joi.string().required(),
  });

  const result = await runSchema(schema, value);
  return result;
};

const ProfessionalSchema = async (value: unknown): Promise<IProfessional> => {
  const schema = Joi.object<IProfessional>({
    fullName: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
    // specialties: Joi.string().required(),
    type: Joi.string().required(),
    // addressId: Joi.string().required(),
  });

  const result = await runSchema(schema, value);
  return result;
};

const LoginSchema = async (value: unknown): Promise<commonDates> => {
  const schema = Joi.object<commonDates>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
  });

  const result = await runSchema(schema, value);
  return result;
};

const AddressSchema = async (value: unknown): Promise<IAddress> => {
  const schema = Joi.object<IAddress>({
    cep: Joi.string().max(9).required(),
    number: Joi.number().required(),
    complement: Joi.string().required(),
    professionalId: Joi.string().required(),
    clientId: Joi.string().required(),
    adminId: Joi.string().required()
  });

  const result = await runSchema(schema, value);
  return result;
};

const AdminSchema = async (value: unknown): Promise<IAdmin> => {
  const schema = Joi.object<IAdmin>({
    fullName: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
    type: Joi.string().required(),
    // addressId: Joi.string().required()
  });

  const result = await runSchema(schema, value);
  return result;
};

const SpecialtiesSchema = async (value: unknown): Promise<ISpecialtie> => {
  const schema = Joi.object<ISpecialtie>({
    specialtie: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    // clientId: Joi.string().required()
    professionalId: Joi.string().required()
  });

  const result = await runSchema(schema, value);
  return result;
};

const HorarySchema = async (value: unknown): Promise<IHorary> => {
  const schema = Joi.object<IHorary>({
    date: Joi.string().required(),
    hour: Joi.string().required(),
    specialty: Joi.string().required(),
    price: Joi.number().required(),
    clientId: Joi.string().required()
  });

  const result = await runSchema(schema, value);
  return result;
};

export default {
  ClientSchema,
  ProfessionalSchema,
  LoginSchema,
  AddressSchema,
  AdminSchema,
  SpecialtiesSchema,
  HorarySchema
};
