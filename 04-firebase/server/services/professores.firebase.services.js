import db from '../db/firebase.connection';
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, updateDoc} from 'firebase/firestore';

class ProfessoresFirebaseServices {
    static getAll(req, res){
        const q = query(collection(db, 'professores'));
        getDocs(q)
            .then((querySnapshot) => {
                const professores = [];
                querySnapshot.forEach((doc) => {
                    const _id = doc.id;
                    const data = doc.data();
                    professores.push({_id,...data});
                });
                res.status(200).json(professores)
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }

    static async register(req, res){
        addDoc(collection(db, 'professores'), req.body)
            .then(docRef => res.status(200).json({_id: docRef.id}))
            .catch(err => res.status(500).json(err));
    }

    static update(req, res){
        const ref = doc(db, 'professores', req.params.id);
        updateDoc(ref, req.body)
            .then(() => res.status(200).json({_id: req.params.id}))
    }

    static delete(req, res){
        const ref = doc(db, 'professores', req.params.id);
        deleteDoc(ref)
    }

    static retrieve(req, res){
        const ref = doc(db, 'professores', req.params.id);
        getDoc(ref)
            .then((docSnap) => {
                const professor = {
                    _id: docSnap.id,
                    ...docSnap.data()
                }
                res.status(200).json(professor)
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }

    static listOnSnapshot(req, res){
        const q = query(collection(db, 'professores'));
        onSnapshot(q, (querySnapshot) => {
            const professores = [];
            querySnapshot.forEach((doc) => {
                const _id = doc.id;
                const data = doc.data();
                professores.push({_id,...data});
            });
            res.status(200).json(professores)
        })        
    }
}

export default ProfessoresFirebaseServices;