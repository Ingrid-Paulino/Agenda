export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export enum MSG {
  EXISTING_USER = 'Usuário existente',
  INCORRECT_PASSWORD = 'Senha incorreta',
  INVALID_FIELDS = 'Invalid fields'
}
