type Props = {
  text: string;
  type: "submit" | "button";
  value?: string;
  name?: string;
};

const Button = ({ text, type, value, name }: Props) => {
  return (
    <div className="bg-primary hover:bg-special text-white mx-2 text-center mt-6 mb-2 transition-colors">
      <button className="w-full p-2" type={type} value={value} name={name}>
        {text}
      </button>
    </div>
  );
};

export default Button;
