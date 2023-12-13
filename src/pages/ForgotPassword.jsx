import { useForm } from "react-hook-form";
import { Div, Text, Link, LabeledInputController } from "../components/base";
import {useNavigate} from "react-router";
import { useCallback } from "react";


const ForgotPassword = () => {
    const navigate=useNavigate()

    const {control, handleSubmit} = useForm({
        defaultValues:{
            phone: "",
        }
    });

    const onSubmit=(data)=>{
        console.log(data);
        navigate("/otpcode");
    }

    const XclickHandler= useCallback(()=>{
        navigate("/")
    },[])

  return (
    <Div>
        <Link onClick={XclickHandler} className="absolute text-2xl dark:text-white text-red-600 top-0 right-0 px-4 py-1 hover:bg-red-600 hover:text-white cursor-pointer active:bg-red-700">X</Link> 

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-300 h-500 gap-3 ' autoComplete='off'>

            <Text className="text-xl pl-5">Forgot Your Password?</Text>

            <Text>Enter your phone number to recover password</Text>

            <LabeledInputController control={control} name="phone" label="Phone Number" placeholder="09-XXXXXXX"/>

            <input type="submit" className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800" value="Continue"/>
        </form>

    </Div>
        
  );
}

export default ForgotPassword;
