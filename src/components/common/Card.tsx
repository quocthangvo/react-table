import type { CardProps } from "../../utils/interfaces/Card";

const Card = ({ children, className, classNameBackground }: CardProps) => {
  return (
    <div
      className={`${
        classNameBackground ? classNameBackground : "bg-white "
      } ${className} box-content shadow-lg shadow-indigo-500/10 px-5 py-5 dark:bg-[#202940]`}
    >
      {children}
    </div>
  );
};

export default Card;
