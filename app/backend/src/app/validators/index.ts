import { Schema } from 'joi';

import objError from '../utils';

export const runSchema = async (schema: Schema, unknown: unknown) => {
  const { error, value } = await schema.validate(unknown);

  if (error) throw objError(401, `${error.details[0].message}`);

  return value;
};
