import { Outlet } from 'react-router';
import { Div } from '../components/base';

const AuthLayout= () => {
  return (
    <Div className="w-screen h-screen box-border flex flex-col md:flex md:flex-row md:justify-center items-center md:gap-10 p-0 m-0">
        <Div className={`w-2/12 md:w-2/12 h-2/6 lg:h-1/4 bg-grey-200 bg-no-repeat bg-center bg-contain bg-fit bg-[url('https://cdn-icons-png.flaticon.com/128/2170/2170091.png')]`}></Div>
        <Outlet/>
    </Div>
  );
}

export default AuthLayout;
