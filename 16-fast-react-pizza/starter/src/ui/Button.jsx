import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block px-4 py-3 bg-yellow-400 font-semibold rounded-full hover:bg-yellow-300 text-stone-800 uppercase tracking-wide transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
export default Button;
