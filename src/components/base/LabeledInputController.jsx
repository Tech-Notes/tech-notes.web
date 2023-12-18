/* eslint-disable react/prop-types */
import { useController } from 'react-hook-form';
import { Div } from '.';

const LabeledInputController = ({ control, name, rules, defaultValue, label, ...attributes }) => {
  const {
    field: { value, onChange }
  } = useController({
    control,
    name,
    defaultValue,
    rules
  });
  return (
    <Div className="flex flex-col gap-2">
      <label htmlFor={`${name}`}>{label}</label>
      <input
        id={`${name}`}
        onChange={onChange}
        value={value}
        className="px-3 dark:text-black text-sm py-2 border rounded-xl border-pink-300 outline-none dark:border-gray-600"
        {...attributes}
      />
    </Div>
  );
};

export default LabeledInputController;
