import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Div, LabeledInputController, Text } from '../components/base';

const NewPassword = () => {
  const navigate = useNavigate();

  const [isSamePassword, setIsSamePassword] = useState('false');

  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: '',
      confirmpassword: ''
    }
  });

  const onSubmit = (data) => {
    const { password, confirmpassword } = data;
    if (password === confirmpassword) {
      console.log(data);
      navigate('/signin');
    } else {
      setIsSamePassword(password === confirmpassword);
    }
  };

  const xClickHandler = useCallback(() => {
    navigate('/otp_code');
  }, []);

  return (
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
        <Text className="text-xl pl-5">Set New Password.</Text>

        <LabeledInputController
          control={control}
          name="password"
          label="New Password"
          placeholder="Enter new password."
          rules={{
            required: 'This field is required.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.{8,})/,
              message: 'Please choose a strong password.'
            }
          }}
        />

        <LabeledInputController
          control={control}
          name="confirmpassword"
          label="Confirm Password"
          placeholder="Enter confirm password."
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.{8,})/,
              message: 'Please choose a strong password.'
            }
          }}
        />

        {!isSamePassword && (
          <Text mode="error" className="text-sm">
            Passwords are not same.
          </Text>
        )}

        <input
          type="submit"
          className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800"
          value="Save"
        />
      </form>
    </Div>
  );
};

export default NewPassword;
