const FavoriteButton = ({ onAddFavorite, pokemon }) => {
  return (
    <button
      onClick={() => onAddFavorite(pokemon)}
      className="mt-2 inline-flex w-40 justify-center rounded bg-blue-600 px-4 py-2 text-xs text-white transition-all duration-150 cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:underline active:scale-90 active:rotate-1"
    >
      Add to Favorites
    </button>
  );
};

export default FavoriteButton;
