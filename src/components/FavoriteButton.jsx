const FavoriteButton = ({ onAddFavorite, pokemon }) => {
  return (
    <button
      onClick={() => onAddFavorite(pokemon)}
      className="text-xs hover:underline mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-lg active:scale-90 active:rotate-1 transition-all duration-150 cursor-pointer"
    >
      Add to Favorites
    </button>
  );
};

export default FavoriteButton;
