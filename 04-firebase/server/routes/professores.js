import express from 'express';
import ProfessoresFirebaseServices from '../services/professores.firebase.services';

const router = express.Router();

router.get('/', (req, res) => {
  ProfessoresFirebaseServices.getAll(req, res);
});

export default router;
