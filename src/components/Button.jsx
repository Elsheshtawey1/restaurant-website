export default function Button({ text, className = "", ...props }) {
  return (
    <button className={`main-btn ${className}`} {...props}>
      {text}
    </button>
  );
}
