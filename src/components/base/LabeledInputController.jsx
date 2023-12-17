/* eslint-disable react/prop-types */
import { useController } from 'react-hook-form';
import { Div, Text } from '.';
import { useCallback, useState } from 'react';

const LabeledInputController = ({control, name, defaultValue, label, ...attributes}) => {
  const {field: {value, onChange}} = useController({
    control,
    name,
    defaultValue
  })

  const [isNan, setIsNan]=useState(true);

  const onChangeHandler=useCallback((e)=>{
    e.preventDefault();

    if(name === "phone"){
      setIsNan(isNaN(e.target.value))
    }
    onChange(e.target.value)

  },[])



  return (
    <Div className="flex flex-col gap-2">
      <label htmlFor={`${name}`}>{label}</label>
      <input id={`${name}`} onChange={onChangeHandler} value={value} className="px-3 dark:text-black text-sm py-2 border rounded-xl border-pink-300 outline-none dark:border-gray-600" {...attributes} />
      { !isNan && <Text className="text-red-700">Not a number</Text>}
    </Div>
  );
}

export default LabeledInputController;
 