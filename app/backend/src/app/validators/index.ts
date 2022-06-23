import { Schema } from 'joi';
import objError from '../helpers/entryMsgStatusError';
import { StatusCodes } from '../enum/enumStatusAndMessage';

export const runSchema = async (schema: Schema, unknown: unknown) => {
  const { error, value } = await schema.validate(unknown);
  if (error) throw objError(StatusCodes.BAD_REQUEST, `${error.details[0].message}`);

  return value;
};
