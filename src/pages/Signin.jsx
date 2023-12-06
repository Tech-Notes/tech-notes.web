import { useForm } from "react-hook-form";
import { Link} from "../base";
import {useNavigate} from "react-router";

const Signin = () => {
    const navigate= useNavigate();

    const {register, handleSubmit} = useForm({
        defaultValues:{
            phone: null,
            password: "",
        }
    });

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-300 h-500 gap-2 ' autoComplete='off'>
            
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" 
                className="px-3 dark:text-black text-sm py-2 border rounded-xl border-pink-300 outline-none dark:border-gray-600" 
                type="text" 
                {...register("phone")} 
                placeholder='09XXXXXXX'
            />
            
            <label htmlFor='password'>Password</label>
            <input id="password" 
                className="px-3 dark:text-black text-sm py-2 p-2 border rounded-xl border-pink-300 dark:border-gray-600 outline-none" 
                type="password" 
                {...register("password")} 
                placeholder='Enter password'
            />

            <Link onClick={()=>navigate("/forgotpassword")} className="text-xs cursor-pointer mt-1">Forgot password?</Link>
            
            <input type="submit" className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800" 
                value="Sign in"/>
        </form>

  );
}

export default Signin; 
