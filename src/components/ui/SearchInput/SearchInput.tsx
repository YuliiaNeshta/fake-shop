import styles from "./styles.module.css";
import { ChangeEvent, FC, useState } from "react";

interface SearchInputProps {
  onChangeCallback?: (searchValue: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onChangeCallback }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    onChangeCallback && onChangeCallback(event.target.value);
  };

  return (
    <input
      className={styles.search}
      type="search"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Search..."
    />
  );
};

export default SearchInput;
