import { useState } from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import type { SearchParams } from "../../utils/interfaces/DoubleTable/SearchParam";

const Search = () => {
  const [searchItem, setSearchItem] = useState<SearchParams>({
    name: "",
    age: "",
    address: "",
  });
  const [searchApply, setSearchApply] = useState<SearchParams>({
    name: "",
    age: "",
    address: "",
  });
  const handleChange = (key: keyof SearchParams, value: string) => {
    setSearchItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSearch = () => {
    setSearchApply(searchItem);
  };
  // useEffect(() => {
  //   handleSearch(searchApply);
  // }, [searchApply]);

  return (
    <div>
      <div className="grid grid-cols-8 items-end">
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2.5 rounded-lg border mt-2"
            value={searchItem.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div>
          <p>Age</p>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2.5 rounded-lg border mt-2"
            value={searchItem.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>
        <div>
          <p>Address</p>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2.5 rounded-lg border mt-2"
            value={searchItem.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="text-white bg-blue-500 box-border border border-transparent hover:bg-blue-600 
        focus:ring-4 focus:ring-blue-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
        >
          Search
        </button>
      </div>
      <div></div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <Table1 searchItem={searchApply} />
        <Table2 searchItem={searchApply} />
      </div>
    </div>
  );
};

export default Search;
