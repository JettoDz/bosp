import pkg from 'bcryptjs';
const { genSalt, hash } = pkg;

export const calculate = async (source: string, rounds: number): Promise<string> =>
    await genSalt(rounds).then(salt => hash(source, salt));
