import {cert,getApps,initializeApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth';
import {getFirestore} from 'firebase-admin/firestore';
const initalizeFirebaseAdmin = ()=>{

    const apps = getApps();


    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId : process.env.Firebase_Project_Id,
                clientEmail : process.env.Firebase_Client_Email,
                privateKey : process.env.Firebase_Private_Key?.replace(/\\n/g,"\n")
            })
        })
    }


    return {
        auth : getAuth(),
        db : getFirestore()
    }

}

export const {auth , db} = initalizeFirebaseAdmin();