import express from 'express';
import { getUser, deleteUser, updateUser, getUsers } from '../controllers';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export = router;
