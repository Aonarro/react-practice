import s from "./Search-box.module.css";

const SearchBox = ({ eventHandler }) => {
    return (
        <div>
            <input
                className={s.searchBox}
                placeholder="monster name"
                type="search"
                onChange={eventHandler}
            />
        </div>
    );
};

export default SearchBox;
