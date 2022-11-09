import { Component } from "react";
import s from "./Card-list-item.module.css";

class CardListItem extends Component {
    render() {
        return (
            <div className={s.cardContainer} key={this.props.id}>
                <img
                    alt={`monster ${this.props.name}`}
                    src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
                />
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>
        );
    }
}

export default CardListItem;
