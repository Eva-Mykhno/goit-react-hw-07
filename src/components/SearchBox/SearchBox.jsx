import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filter/filtersSlice";
import { selectNameFilter } from "../../redux/filter/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter) || "";

  return (
    <div className={s.searchContainer}>
      <p className={s.title}> Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        placeholder="Enter name..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
