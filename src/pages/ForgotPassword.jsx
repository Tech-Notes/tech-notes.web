import { useForm } from "react-hook-form";
import { Text, LabeledInputController } from "../components/base";
import {useNavigate} from "react-router";


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

  return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-300 h-500 gap-3 ' autoComplete='off'>

            <Text className="text-xl pl-5">Forgot Your Password?</Text>

            <Text>Enter your phone number to recover password</Text>

            <LabeledInputController control={control} name="phone" label="Phone Number" placeholder="09-XXXXXXX"/>

            <input type="submit" className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800" value="Continue"/>
        </form>
  );
}

export default ForgotPassword;
