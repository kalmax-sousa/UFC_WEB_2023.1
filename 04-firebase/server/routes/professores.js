import express from 'express';
import ProfessoresFirebaseServices from '../services/professores.firebase.services';

const router = express.Router();

router.get('/', (req, res) => {
  ProfessoresFirebaseServices.getAll(req, res);
  //ProfessoresFirebaseServices.listOnSnapshot(req, res);
});

router.post('/register', (req, res, next) => {
  ProfessoresFirebaseServices.register(req, res)
})

router.put('/update/:id', (req, res, next) => {
  ProfessoresFirebaseServices.update(req, res)
})

router.delete('/delete/:id', (req, res, next) => {
  ProfessoresFirebaseServices.delete(req, res)
})

router.get('/retrieve/:id', (req, res, next) => {
  ProfessoresFirebaseServices.retrieve(req, res)
})

export default router;
