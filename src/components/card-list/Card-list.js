import { Component } from "react";
import CardListItem from "../card-list-item/Card-list-item";
import s from "./Card-list.module.css";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className={s.cardList}>
                {monsters.map((monster) => {
                    return (
                        <CardListItem
                            name={monster.name}
                            email={monster.email}
                            id={monster.id}
                            key={monster.id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
