const DeleteButton = ({ onRemoveFavorite, pokemon }) => {
  return (
    <button
      onClick={() => onRemoveFavorite(pokemon)}
      className="mt-2 inline-flex w-40 justify-center rounded bg-red-500 px-4 py-2 text-xs text-white transition-all duration-150 cursor-pointer hover:bg-red-600 hover:shadow-lg hover:underline active:scale-90 active:-rotate-1"
    >
      Remove Favorite
    </button>
  );
};

export default DeleteButton;
