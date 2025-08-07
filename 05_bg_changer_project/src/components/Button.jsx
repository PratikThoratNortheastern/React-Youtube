function Button({ color, onClick }) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {color}
    </button>
  );
}

export default Button;
