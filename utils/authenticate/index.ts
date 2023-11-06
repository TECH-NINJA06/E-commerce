import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, UserCredential } from "firebase/auth";
import { auth, googleProvider } from "@/firebase.config";
import { FirebaseError } from "firebase/app";
import type { SignInErrorResponse, SignInSuccessResponse } from "./type";


async function signIn():Promise<SignInSuccessResponse | SignInErrorResponse> {
    return await signInWithPopup(auth, googleProvider)
    .then((result:UserCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;    
        const success:true = true
        return { user, success }
    }).catch((error:FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const success:false = false
        const credential = GoogleAuthProvider.credentialFromError(error);
        return { error:{ errorCode, errorMessage }, success }
    });
}

const signOutGoogle = async():Promise<{success:true} | SignInErrorResponse> => {
    return await signOut(auth).then(() => {
        const success:true = true
        return { success }
    }).catch((error:FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const success:false = false
        return { error:{ errorCode, errorMessage }, success }
    });
}

export { signIn, signOutGoogle as signOut }