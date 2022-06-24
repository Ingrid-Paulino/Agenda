import bcrypt from 'bcryptjs';

const descriptografia = (password: string, hash: string): boolean => {
  bcrypt.compare(password, hash).then((res: boolean) => {
    if (!res) return false;
  });

  return true;
};

export default descriptografia;
