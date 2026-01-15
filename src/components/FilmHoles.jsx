const FilmHoles = () => (
  <div className="bg-pink-200 w-full h-10 flex items-center justify-center">
    <div className="flex gap-2 p-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-6 bg-white rounded-sm"
        />
      ))}
    </div>
  </div>
);

export default FilmHoles;
