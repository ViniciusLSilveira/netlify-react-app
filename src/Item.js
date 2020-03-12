import React, { Component } from 'react'

export class Item  extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }

    render(){
        const {img, name, description, price, promotion} = this.props;

        const nameStyle = {
            fontSize: '15px',
            marginTop: '2px',
            marginBottom: '0px',
        }

        const descriptionStyle = {
            color: 'grey',
            fontSize: '12px',
        }

        const priceStyle = {
            fontWeight: 600,
            fontSize: '13px',
        }

        const promotionStyle = {
            color: 'green',
            fontWeight: 500,
            fontSize: '11px',
            marginBottom: '0px',
        }

        const linkStyle = {
            marginTop: '0px',
            fontSize: '12px',
        }

        return (
            <section className="item">
                <img alt={name} src={img} />
                <h4 style={nameStyle}>{name}</h4>
                <span style={descriptionStyle}>{description}</span>
                <p style={priceStyle}>RD${price.toFixed(2)}/Unit</p>
                <p style={promotionStyle}>{promotion}</p>
                <p style={linkStyle}><a href="#">View Details</a></p>
                <div className="bottomElement">
                    <button className="btn sub-btn">-</button>
                    <input type="number" pattern="[0-9]*" inputMode="numeric" min="0" placeholder="0"></input>
                    <button className="btn add-btn">+</button>
                    <button className= "btn update-btn">UPDATE</button>
                </div>
            </section>
        )
    }
}

export default Item;
