import { Request, Response } from 'express';
import User from '../models/user';

// Update
export const updateUser = (req: Request, res: Response) => {
    const userId = req.params.id;

    return User.findByIdAndUpdate(userId)
        .then((user) => {
            if (user) {
                user.set(req.body);
                return user
                    .save()
                    .then((user) => res.status(201).json({ user }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

// Get One
export const getUser = async (req: Request, res: Response) => {
    const userID = req.params.id;

    return User.findById(userID)
        .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

// Get ALl
export const getUsers = (req: Request, res: Response) => {
    User.find()
        .select('-password')
        .exec()
        .then((users) => {
            return res.status(200).json({ users, count: users.length });
        })
        .catch((error) => {
            return res.status(500).json({ message: error.message, error });
        });
};

export const deleteUser = (req: Request, res: Response) => {
    const user = req.params.id;
    return User.findByIdAndDelete(user)
        .then((user) => (user ? res.status(200).json({ message: 'deleted', user }) : res.status(401).json({ message: 'not found' })))
        .catch((error) => {
            res.status(500).json({ error });
        });
};
