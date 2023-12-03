import React from 'react';
import { useNavigate } from 'react-router';
import BoxFile from '../elementTags/BoxFile';

const NewFile = ({newFile}) => {
    const navigate=useNavigate()

    const onClickHandler=()=>{
        navigate(`/${newFile}`)
    }

  return (
    <div onClick={onClickHandler}>
      <BoxFile level="2">
          <div class="text-xs text-gold font-semibold">
            JS
          </div>
          <div>
              {newFile}
          </div>
          
      </BoxFile>

    </div>
    
        
      
    
  );
}

export default NewFile;
