import { config } from '../config/config';
import { IUser } from '../interfaces';

import jwt from 'jsonwebtoken';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(config.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    console.log(`Attempting to sign token for ${user._id}`);

    try {
        jwt.sign(
            {
                username: user.username
            },
            config.token.secretKey,
            {
                issuer: config.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error: any) {
        console.log(error.message, error);
        callback(error, null);
    }
};

export default signJWT;
