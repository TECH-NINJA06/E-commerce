import { User } from "firebase/auth";

interface SignInSuccessResponse { 
    user: User; 
    success: true;
}
interface SignInErrorResponse { 
    error: { 
        errorCode: string; 
        errorMessage: string 
    }; 
    success:false;
}

export type { SignInSuccessResponse, SignInErrorResponse }