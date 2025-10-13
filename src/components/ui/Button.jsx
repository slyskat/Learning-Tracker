import styles from "./Button.module.css";

function Button({
  children,
  className = "",
  btnType = "primary",
  size = "medium",
  ...props
}) {
  const buttonType = styles[btnType] || styles.primary;
  const buttonSize = styles[size] || styles.medium;
  const derivedClassName = `${styles.button} ${buttonType} ${buttonSize} ${className}`;

  return (
    <button className={derivedClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
