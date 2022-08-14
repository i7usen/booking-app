import { Request, Response, NextFunction } from 'express';
// import logging from "../config/logging";
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

const NAMESPACE = 'Auth';
const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    console.log(NAMESPACE, 'Validating Token');

    let token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, config.token.secretKey, (error, decoded) => {
            if (error) {
                res.status(404).json({ message: error, error });
            } else {
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export default extractJWT;
