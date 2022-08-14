import express from 'express';
import { register, Login } from '../controllers';

const router = express.Router();

// Register
router.post('/register', register);
router.post('/login', Login);

export = router;
