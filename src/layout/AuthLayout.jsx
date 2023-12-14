import { Outlet } from 'react-router';
import { Div } from '../components/base';

const AuthLayout= () => {
  return (
    <Div className="w-screen h-screen box-border flex flex-col md:flex md:flex-row justify-center items-center gap-10 p-0 m-0">
        <Div className={`w-20 h-20 bg-no-repeat bg-center bg-cover bg-fit bg-[url('https://cdn-icons-png.flaticon.com/128/2170/2170091.png')]`}></Div>
        <Outlet/>
    </Div>
  );
}

export default AuthLayout;
