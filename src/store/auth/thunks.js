
import { loginWithEmailPassword, logoutFirebase, registerWithOwnUser, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/JournalSlice"
import { checkingCredencials, login, logout } from "./AuthSlice"


export const checkingAuthentication=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredencials())
    }
}

export const startGoogleSingIn=()=>{

    return async(dispatch)=>{

        dispatch(checkingCredencials());

        const result = await signInWithGoogle();

        console.log({result})
        if(!result.ok) return (dispatch(logout(result.errorMessage)));
        
        dispatch(login(result))
        
        
    }
}

export const startCreatingUserWithEmailPassword=({email, password, displayName})=>{
return async (dispatch)=> {
    dispatch(checkingCredencials());
    const {ok,uid,photoURL, errorMessage } = await registerWithOwnUser({email, password, displayName})

    if(!ok) return dispatch(logout({errorMessage}))
    dispatch(login({uid,displayName, email, photoURL}))
}
}

export const startLoginWithEmailAndPassword=({email,password})=>{
   return async (dispatch)=>{
    dispatch(checkingCredencials());

    const resp = await loginWithEmailPassword({email,password})
console.log(resp)
    
    if(!resp.ok) return (dispatch(logout(resp)));
        
        dispatch(login(resp))
    }
    
}

export const startLogout =()=>{

    return async(dispatch)=>{
        
            await logoutFirebase();
            dispatch(clearNotesLogout());
            dispatch(logout());
        
        
    }
}

