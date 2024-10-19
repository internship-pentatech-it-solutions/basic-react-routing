import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className="h-10 relative max-w-[300px]">
      <input
        type="search"
        placeholder="search"
        className="h-full py-3 px-4 rounded"
      />
      <button className="absolute right-0 bottom-0">
        <IoSearch className="text-2xl font-bold" />
      </button>
    </form>
  );
};

export default SearchBar;
