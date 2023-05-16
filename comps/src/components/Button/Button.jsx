import './Button.css';

export default function Button({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return <button>{children}</button>
}
