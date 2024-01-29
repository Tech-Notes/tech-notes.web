import { Suspense } from 'react';
import { Div, Loading } from '../components/base';

const PostQueue = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Div level="2" className="p-10 w-full h-full">
        Post Queue
      </Div>
    </Suspense>
  );
};

export default PostQueue;
