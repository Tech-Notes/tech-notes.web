import { useContext,createContext,useState,useEffect} from "react";

const userContext= createContext();

const useUserContextProvider= () => useContext(userContext);

export const useUserContext=()=>{
  const {user, setUser} = useUserContextProvider();

  return {user, setUser};
}

const UserProvider = ({children}) => {

  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(()=>{
    if(user){
      localStorage.setItem("user", user)
    }else{
      localStorage.removeItem("user")
    }
  },[user])

  return (
    <userContext.Provider value={{user,setUser}} >
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
