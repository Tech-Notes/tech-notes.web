import { useForm } from "react-hook-form";
import { Text, LabeledInputController } from "../components/base";

const OTPCode = () => {

    const {control, handleSubmit} = useForm({
        defaultValues:{
            otpCode: "",
        }
    });

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-300 h-500 gap-3 ' autoComplete="off">

            <Text className="text-xl pl-5">Please enter OTP code</Text>

            <Text>We have sent to 09778877887</Text>
            
            <LabeledInputController control={control} name="otpCode" placeholder="XXXXXX"/>

            <input type="submit" className="px-3 dark:text-black text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800" value="Verify"/>

            <Text>Don't recieve OTP?</Text>
        </form>

  );
}

export default OTPCode;
