import { Div } from '../components/base';

const LoadingPage = () => {
  return (
    <Div level="2" className="flex justify-center pt-20 w-full h-full">
      <Div
        level="2"
        className="w-11 h-11 border-4 border-pink-200 border-s-pink-400 dark:border-gray-400 dark:border-s-white rounded-full animate-spin"></Div>
    </Div>
  );
};

export default LoadingPage;
