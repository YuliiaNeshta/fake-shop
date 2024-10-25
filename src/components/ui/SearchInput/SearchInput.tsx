import styles from "./styles.module.css";
import { ChangeEvent, useState } from "react";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // TODO: finish handleSearchResult
  // const handleSearchResult = () => {
  //   const searchResult = searchValue.trim().toLowerCase();
  //   //set products from request to store
  //   //filter products
  //   //setNewProducts
  //   //add debounce??
  // };

  return (
    <div>
      <input
        className={styles.search}
        type="search"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
