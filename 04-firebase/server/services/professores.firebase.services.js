import db from '../db/firebase.connection';
import {collection, getDocs, query} from 'firebase/firestore';

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
                res.json(professores)
            })
            .catch((error) => {
                res.status(500).json(error);
            });
        
    }
}

export default ProfessoresFirebaseServices;