import axios from "axios";
import { useState, useRef, useEffect } from "react";
import type { User, ReqResUserListResponse } from "../interfaces";


const loadUsers = async(page: number = 1): Promise<User[]> =>{
    try {

        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page,
            }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];

    }
};
export const useUsers = () => {
    
    const [users, setUsers] = useState<User[]>([]);
    const curretPageRef = useRef (1);

    useEffect(()=>{
     loadUsers(curretPageRef.current).then(setUsers);
    },[]);

    const nextPage = async () => {
     curretPageRef.current++;
     const users = await loadUsers(curretPageRef.current);
     if(users.length >0) {
         setUsers(users);
     } else{
         curretPageRef.current--;
     }
    }
    const prevPage = async () => {
     if (curretPageRef.current < 1) return;

     curretPageRef.current--;
     const users = await loadUsers(curretPageRef.current);
     setUsers(users);
    }
    return {
        //Properties
        users,

        //Method
        nextPage,
        prevPage,
    }
}

export default useUsers
