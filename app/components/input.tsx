type Props = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  text: string;
};

const Input = ({ type, name, id, placeholder, text }: Props) => {
  return (
    <div className="flex flex-col justify-center m-2">
      <label className="font-bold" htmlFor={name}>
        {text}
      </label>
      <input
        className="bg-secondaryTransparent placeholder-gray-800 p-2 outline-none"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
