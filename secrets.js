
import { randomBytes } from 'crypto';

const generateSecret = (length = 32) => {
    return randomBytes(length).toString('hex');
};

const secret = generateSecret();
console.log(`Access Token: ${secret}`);
console.log(`Refresh Token: ${secret}`);