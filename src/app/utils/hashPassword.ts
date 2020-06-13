import { hashSync  } from 'bcryptjs'

export const hashPassword = (password: string) => hashSync(password, 8);