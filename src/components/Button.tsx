import { ButtonHTMLAttributes } from "react";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      {...props}
      className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-green-500 font-bold ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
