import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Div, LabeledInputController, Link } from '../components/base';
import { useAuth } from '../provider/AuthProvider';
import { notify } from '../components/alerts';

const Signin = () => {
  const { setToken } = useAuth();

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      phone: '',
      password: ''
    }
  });

  const onSubmit = useCallback(
    async (formData) => {
      const form = {
        phone_number: formData.phone,
        password: formData.password
      };

      const resp = await fetch(`${process.env.API_BASE}/sign-in`, {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await resp.json();

      console.log('data', data);
      if (data.status === 'success') {
        setToken(data.data.token);
        navigate('/');
      }
    },
    [navigate, setToken]
  );

  const clickLinkHandler = useCallback(() => {
    navigate('/forgot_password');
  }, [navigate]);

  return (
    <Div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-300 h-500 gap-2 "
        autoComplete="off">
        <LabeledInputController
          control={control}
          name="phone"
          label="Phone Number"
          placeholder="Enter phone number..."
          rules={{
            required: 'Phone number is required.',
            pattern: {
              value: /^[0-9]{10,}/,
              message: 'Incorrect phone number format.'
            }
          }}
        />

        <LabeledInputController
          control={control}
          name="password"
          label="Password"
          placeholder="Enter password..."
          type="password"
        />

        <Link onClick={clickLinkHandler} className="text-xs cursor-pointer mt-1">
          Forgot password?
        </Link>

        <input
          type="submit"
          className="px-3 text-sm py-2 p-2 border border-pink-300 dark:border-gray-600 outline-none rounded-xl mt-3 cursor-pointer hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800"
          value="Sign in"
        />
      </form>
    </Div>
  );
};

export default Signin;
