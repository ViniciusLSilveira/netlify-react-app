import React, { Component } from 'react'
import { Item } from './Item'

export class Products extends Component {

    static defaultProps = {
        beers: [
            { "name": "Modelo Negra", "description": "12 Unit : 33oz Bottle ", "price": 32.00, "promotion": "Buy 3, get 1 free" }
        ]
    }

    state = {
        added: false,
        changed: false,
    }

    onAdd = () => {
        // TODO: Add the number to take-out

    }

    OnEdit = () => {
        // TODO: Update the number to take-out
    }

    render() {
        const { items } = this.props;
        return (
            <div className="products">
                {items.map(
                    (item) => <Item
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        promotion={item.promotion}
                        numberItems={item.numberItems}
                        >
                        </Item>
                    )
                }
            </div>
        )
    }
}