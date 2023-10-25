type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <button className="text-white">{text}</button>;
};

export default Button;
