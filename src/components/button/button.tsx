import styles from "./button.module.scss";

const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className || ""}`}>
      {children}
    </button>
  );
};
export default Button;
