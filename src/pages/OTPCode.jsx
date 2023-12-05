import { useForm } from "react-hook-form";
import { Text} from "../base";

const OTPCode = () => {

    const {register, handleSubmit} = useForm({
        defaultValues:{
            otpCode: null,
        }
    });

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-300 h-500 gap-3 ' autoComplete="off">

            <Text className="text-xl pl-5">Please enter OTP code</Text>

            <Text>We have sent to 09778877887</Text>
            
            <label htmlFor="otp">Phone Number</label>
            <input id="otp" 
                className="px-3 text-sm py-2 border border-pink-300 dark:border-gray-600 rounded-xl outline-none " 
                type="text" 
                {...register("otpCode")} 
                placeholder='XXXXXX'/>

            <input type="submit" className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800" value="Verify"/>

            <Text>Don't recieve OTP?</Text>
        </form>

  );
}

export default OTPCode;
