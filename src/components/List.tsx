// -- IMPORTAÇÕES -- \\
import { useEffect, useState } from "react";
import { api } from "../axios/axios";

// -- INTERFACE -- \\
interface User{
    username: string
    email: string
}

// -- FUNÇÃO PRINCIPAL -- \\

export function List() {

// -- CONST -- \\
const [user, setUser] = useState<User | null>(null)

// -- FUNÇÃO -- \\
function loadUser() {
    api.get("/users/1")
    .then(response =>{
        setUser(response.data)
    }).catch(error =>{
        console.error("Erro na requisição", error)
    })
  }

  useEffect(() =>{
    loadUser();
  }, [])

 // -- RETURN -- \\ 
    return(
        <div>
            <h2>Dados do Usuario</h2>
            {user?
            (<p>{user.username} - {user.email}</p>):(<p>Loading...</p>)}
        </div>
    )
// -- FINAL RETURN -- \\
}