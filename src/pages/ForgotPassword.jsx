import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Suspense, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Div, LabeledInputController, Loading, Text } from '../components/base';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      phone: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/otp_code');
  };

  const xClickHandler = useCallback(() => {
    navigate('/signin');
  }, [navigate]);

  return (
    <Suspense fallback={Loading}>
      <Div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={xClickHandler}
          className="absolute text-xl dark:text-white text-red-600 top-0 right-0 px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer active:bg-red-700"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-300 h-500 gap-3 "
          autoComplete="off">
          <Text className="text-xl pl-5">Forgot Your Password?</Text>

          <Text>Enter your phone number to recover password</Text>

          <LabeledInputController
            control={control}
            name="phone"
            label="Phone Number"
            placeholder="09-XXXXXXX"
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[0-9]{10,}/,
                message: 'Incorrect phone number format.'
              }
            }}
          />

          <input
            type="submit"
            className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800"
            value="Continue"
          />
        </form>
      </Div>
    </Suspense>
  );
};

export default ForgotPassword;
