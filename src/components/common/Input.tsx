import type { InputProps } from "../../utils/interfaces/Input";

const Input = (props: InputProps) => {
  const {
    label,
    type,
    name,
    value,
    helperText,
    onChange,
    classNameLabel,
    customClassNameInput,
    readonly,
    autoComplete = "off",
  } = props;

  return (
    <>
      <label
        className={`${classNameLabel} block whitespace-nowrap text-sm font-medium`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-[#1a2035] dark:border-transparent dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${customClassNameInput}`}
        autoComplete={autoComplete}
        readOnly={readonly}
      />
      <div className="text-red-600 text-xs">{helperText}</div>
    </>
  );
};

export default Input;
