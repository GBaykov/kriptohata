import './button.css';

type ButtonsProps = {
  text: string;
  isMain: boolean;
};

const Button = ({ text, isMain }: ButtonsProps) => {
  const clazzName = isMain ? 'button main-btn' : 'transparent-btn button';
  return <button className={clazzName}>{text}</button>;
};

export default Button;
