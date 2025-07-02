import styles from "./button.module.scss";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
export default Button;
