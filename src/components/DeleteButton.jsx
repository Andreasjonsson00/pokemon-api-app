const DeleteButton = ({ onRemoveFavorite, pokemon }) => {
  return (
    <button
      onClick={() => onRemoveFavorite(pokemon)}
      className="text-xs hover:underline mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 hover:shadow-lg active:scale-90 active:-rotate-1 transition-all duration-150 cursor-pointer"
    >
      x
    </button>
  );
};

export default DeleteButton;
