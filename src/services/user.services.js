import {db} from '../firebase';

import {collection , getDocs , addDoc , updateDoc , doc} from 'firebase/firestore';

const userCollectionRef = collection(db,'user');

class UserDataService {

    addUsers = (newUser)=>{

        return addDoc(userCollectionRef,newUser)

    };

    updateUser = (id,updatedUser)=>{

        const userDoc = doc(db,'user',id);
        return updateDoc(userDoc,updatedUser);

    };

    getAllUsers = ()=>{

        return getDocs(userCollectionRef) ;

    };

    getUser = (id)=>{
        const userDoc = doc(db,'user',id);
        return getDocs(userDoc);
    };

}

export default new UserDataService();