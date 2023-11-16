import React from 'react';
import { useNavigate } from 'react-router';

const NewFile = ({newFile}) => {
    const navigate=useNavigate()

    const onClickHandler=()=>{
        navigate(`/${newFile}`)
    }

  return (
    
        <div onClick={onClickHandler} class="flex gap-2 ml-4 text-sm h-10 px-5 items-center hover:bg-slate-500 active:bg-slate-600 cursor-pointer">
          <div class="text-xs text-gold font-semibold">
            JS
          </div>
          <div>
              {newFile}
          </div>
          
        </div>
      
    
  );
}

export default NewFile;
