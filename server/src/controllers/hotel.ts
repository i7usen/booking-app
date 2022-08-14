import { Request, Response, NextFunction } from 'express';
import Hotel from '../models/hotel';
import mongoose from 'mongoose';

// Create
export const createHotel = async (req: Request, res: Response, next: NextFunction) => {
    const { name, type, city, address, distance, title, desc, cheapestPrice } = req.body;

    const hotel = new Hotel({
        _id: new mongoose.Types.ObjectId(),
        name,
        type,
        city,
        address,
        distance,
        title,
        desc,
        cheapestPrice
    });

    return hotel
        .save()
        .then((hotel) => res.status(200).json({ hotel }))
        .catch((error) => {
            res.status(500).json({ error });
        });
};

// Update
export const updateHotel = async (req: Request, res: Response, next: NextFunction) => {
    const hotelID = req.params.id;

    return Hotel.findByIdAndUpdate(hotelID)
        .then((hotel) => {
            if (hotel) {
                hotel.set(req.body);
                return hotel
                    .save()
                    .then((hotel) => res.status(201).json({ hotel }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

// Delete
export const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
    const hotelID = req.params.id;

    return Hotel.findByIdAndDelete(hotelID)
        .then((hotel) => (hotel ? res.status(200).json({ hotel, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

// Get One
export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    const hotelID = req.params.id;

    return Hotel.findById(hotelID)
        .then((hotel) => (hotel ? res.status(200).json({ hotel }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

// Get ALl
export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    return Hotel.find()
        .then((hotels) => res.status(200).json({ hotels }))
        .catch((error) => res.status(500).json({ error }));
};
