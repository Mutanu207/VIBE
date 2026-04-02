import express from 'express';
import {getMood} from './mood.controller.js';
const router = express.Router();
router.post('/', getMood);
export default router;