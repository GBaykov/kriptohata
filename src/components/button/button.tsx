import './button.css';

type ButtonsProps = {
  text: string;
  isMain: boolean;
  isBig?: boolean;
};

const Button = ({ text, isMain, isBig }: ButtonsProps) => {
  let clazzName = 'button';
  if (isMain) {
    clazzName += ' main-btn';
  } else {
    clazzName += ' transparent-btn';
  }
  if (isBig) {
    clazzName += ' big-btn';
  }
  return <button className={clazzName}>{text}</button>;
};

export default Button;
