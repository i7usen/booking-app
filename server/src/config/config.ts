import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.9o7vy.mongodb.net`;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;
const SECRET_KEY = process.env.SECRET_KEY || 'superencryptedsecret';
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'coolIssuer';
const SERVER_TOKEN_EXPIRENET = process.env.SERVER_TOKEN_EXPIRENET || 3600;

export const config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    token: {
        secretKey: SECRET_KEY,
        expireTime: SERVER_TOKEN_EXPIRENET,
        issuer: SERVER_TOKEN_ISSUER
    }
};
