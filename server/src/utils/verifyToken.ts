import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { config } from '../config/config';
import { IUser } from '../interfaces';

export const verifyToken = (req: Request, res: Response) => {
    const token = req.cookies.access_toekn;
    if (!token) {
        return res.status(401).json({ message: "You're not authorized" });
    }
    jwt.verify(token, config.token.secretKey, (err: any | undefined, user: IUser) => {
        if (err) return res.status(403).json({ message: 'Toekn is not valid' });
        req.user = user;
    });
};
