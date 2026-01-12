import { useEffect, useState } from "react";
import { useTheme } from "../../utils/themes/theme-providor";
import storage from "../../utils/configs/localStorage";
import Select from "react-select";

export interface TypeProps {
  label: string;
  value: string | number;
}

export interface SelectProps {
  label: string;
  name: string;
  options: Array<TypeProps>;
  value?: string | number | undefined | any;
  helperText?: string | null | any;
  onChange?: any;
  classNameLabel?: string;
  borderStyle?: string;
  height?: string;
}

const SelectedSearch = ({
  label,
  name,
  options,
  classNameLabel,
  value,
  onChange,
  helperText,
  borderStyle,
  height,
}: SelectProps) => {
  const { theme } = useTheme();
  const [style, setStyle] = useState<any>();

  const handleChange = (newValue: any) => {
    // console.log(newValue);
    const event = {
      target: {
        name: name,
        value: newValue,
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(event);
  };

  useEffect(() => {
    const customStyles = {
      control: (provided: any) => ({
        ...provided,
        backgroundColor:
          storage.get("vite-ui-theme") === "dark" ? "#1a2035" : "#f9fafb",
        color: "white",
        // "&:hover": {
        //   borderColor: "blue",
        // },
        padding: "2px",
        borderRadius: borderStyle ? borderStyle : "0.5rem",
        border:
          storage.get("vite-ui-theme") === "dark"
            ? "#1a2035"
            : "1px solid #c5c5c5",
        height: height ? height : "",
      }),
      placeholder: (provided: any) => {
        return {
          ...provided,
          color: storage.get("vite-ui-theme") === "dark" ? "#fff" : "#1a2035",
        };
      },
      multiValue: (provided: any) => ({
        ...provided,
        backgroundColor: "gray",
      }),
      multiValueLabel: (provided: any) => ({
        ...provided,
        color: "white",
      }),
      multiValueRemove: (provided: any) => ({
        ...provided,
        color: "white",
        "&:hover": {
          backgroundColor: "red",
          color: "white",
        },
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected
          ? "#3f83f8"
          : state.isFocused
          ? "#3f83f8"
          : storage.get("vite-ui-theme") === "dark"
          ? "#1a2035"
          : "#fff",
        color: state.isSelected
          ? "white"
          : storage.get("vite-ui-theme") === "dark"
          ? "white"
          : "#000",
        cursor: "pointer",
      }),
      menu: (provided: any) => ({
        ...provided,
        backgroundColor:
          storage.get("vite-ui-theme") === "dark" ? "#1a2035" : "#fff",
        zIndex: 9999,
      }),
      menuList: (provided: any) => ({
        ...provided,
        maxHeight: 200,
        overflowY: "auto",
      }),
      singleValue: (provided: any, state: any) => ({
        ...provided,
        color: state.isSelected
          ? "white"
          : storage.get("vite-ui-theme") === "dark"
          ? "white"
          : "#000",
      }),
    };

    setStyle(customStyles);
  }, [theme, borderStyle]);
  return (
    <>
      <label
        className={`${classNameLabel} whitespace-nowrap block text-sm font-medium`}
      >
        {label}
      </label>
      <Select
        name={name}
        styles={style}
        options={options}
        value={value}
        onChange={handleChange}
        className="w-full"
        isClearable
      />
      <div className="text-red-600 text-xs">{helperText}</div>
    </>
  );
};

export default SelectedSearch;
