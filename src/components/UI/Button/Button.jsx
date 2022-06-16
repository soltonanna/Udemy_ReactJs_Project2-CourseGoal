import "./Button.css";

export default Button = (props) => {
  return (
    <button type="{props.type}" className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
