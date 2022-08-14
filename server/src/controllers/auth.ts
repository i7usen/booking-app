import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { IUser } from '../interfaces';
import mongoose from 'mongoose';

export const register = (req: Request, res: Response) => {
    let { username, password, email } = req.body;

    bcrypt.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            });
        }

        // TODO: insert user into DB here
        const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            email,
            password: hash
        });

        return _user
            .save()
            .then((user) => {
                return res.status(201).json({ message: 'created', user });
            })
            .catch((error) => {
                return res.status(500).json({ message: error.message, error });
            });
    });
};

// Login
export const Login = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).json({ message: 'user not found' });

        // check password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return res.status(404).json({ message: 'wrong password or username' });

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, config.token.secretKey);
        const { password, isAdmin, ...others } = user._doc;
        return res
            .cookie('access_token', token, {
                httpOnly: true
            })
            .status(200)
            .json({ ...others });
    } catch (error) {
        res.status(500).json({ error });
    }
};
