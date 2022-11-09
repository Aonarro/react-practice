import { Component } from "react";
import s from "./Search-box.module.css";

class SearchBox extends Component {
    render() {
        const { eventHandler } = this.props;
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
    }
}

export default SearchBox;
