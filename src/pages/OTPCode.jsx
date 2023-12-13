import { useForm } from "react-hook-form";
import { useCallback } from "react";
import {useNavigate} from "react-router";
import { Div, Text, Link, LabeledInputController } from "../components/base";

const OTPCode = () => {

    const navigate=useNavigate();

    const {control, handleSubmit} = useForm({
        defaultValues:{
            otpCode: "",
        }
    });

    const onSubmit=(data)=>{
        console.log(data);
    }

    const XclickHandler= useCallback(()=>{
        navigate("/")
    },[])

  return (
    <Div>
        <Link onClick={XclickHandler} className="absolute text-2xl dark:text-white text-red-600 top-0 right-0 px-4 py-1 hover:bg-red-600 hover:text-white cursor-pointer active:bg-red-700">X</Link>
        
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-300 h-500 gap-3 ' autoComplete="off">

            <Text className="text-xl pl-5">Please enter OTP code</Text>

            <Text>We have sent to 09778877887</Text>

            <LabeledInputController control={control} name="otpCode" placeholder="XXXXXX"/>

            <input type="submit" className="px-3 dark:text-black text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800" value="Verify"/>

            <Text>Don't recieve OTP?</Text>
        </form>
        
    </Div>
        

  );
}

export default OTPCode;
