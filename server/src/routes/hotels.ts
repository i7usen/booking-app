import express from 'express';
import { createHotel, getOne, deleteHotel, updateHotel, getAll } from '../controllers';
const router = express.Router();

router.post('/', createHotel);
router.get('/', getAll);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
router.get('/:id', getOne);

export = router;
