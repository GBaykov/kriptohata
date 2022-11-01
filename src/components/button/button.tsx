import './button.css';

type ButtonsProps = {
  text: string;
  type: string;
  bgc: string;
};

const Button = ({ text, type, bgc }: ButtonsProps) => {
  const buttonStyle = {
    width: '100%',
    color: type,
    background: 'bgc',
  };
  return <button style={buttonStyle}>{text}</button>;
};

export default Button;
