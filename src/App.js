import { Component } from "react";
import "./App.css";
import SearchBox from "./components/search-box/Search-box";
import CardList from "./components/card-list/Card-list";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchValue: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>
                this.setState(() => {
                    return { monsters: users };
                })
            );
    }

    onSearchChange = (event) => {
        const searchValue = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchValue };
        });
    };

    render() {
        const { monsters, searchValue } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchValue);
        });
        return (
            <div className="App">
                <h1 className="app-title">Monsters</h1>
                <SearchBox eventHandler={onSearchChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
