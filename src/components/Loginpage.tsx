import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {
const authStatus = useAuthStore( state =>state.status);
const user = useAuthStore( state =>state.user);
const login = useAuthStore( state => state.login);
const logout = useAuthStore( state => state.logout);

useEffect(()=>{
    setTimeout(()=>{
        logout();
    }, 1000);
},[])
if(authStatus === 'checking'){
    return <h3>Loading...</h3>
}

  return (
    <>
        <h3>Login Page</h3>
        {
            (authStatus=== 'authenticated')
            ? <div>Authenticated has {JSON.stringify(user, null, 2)}</div>
            : <div>Unauthenticatedd</div>
        }
        {
            (authStatus === 'authenticated')
            ? (
                <button onClick={ logout }>Logout</button>
            )
            :
            (
                <button onClick={ ()=> login('sgmdev06@algo.com', 'xxxxx123')}>Login</button>
            )
        }
    </>
  )
}

export default LoginPage
