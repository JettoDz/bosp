import { genSalt, hash } from 'bcryptjs';

export const calculate = async (source: string, rounds: number): Promise<string> =>
    await genSalt(rounds).then(salt => hash(source, salt));
