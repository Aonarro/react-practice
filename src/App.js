import "./App.css";
import SearchBox from "./components/search-box/Search-box";
import CardList from "./components/card-list/Card-list";
import { useState, useEffect } from "react";

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchValue = event.target.value.toLocaleLowerCase();
        setSearchField(searchValue);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monsters</h1>
            <SearchBox eventHandler={onSearchChange} />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
