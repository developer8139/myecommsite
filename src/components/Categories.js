import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PS5 from '../assets/ps5console.png';
import TeddyBear from '../assets/teddybear.png'
import Guitar from '../assets/guitar.png'
import Wallet from '../assets/wallet.png'
import ToothBrush from '../assets/toothbrush.png'

const Items = [
    {category: 1, type: "electronics", name: "Playstation5", price: 599, inStock: 5, pic: `${PS5}`},
    {category: 2, type: "stuffed animals", name: "Teddy Bear", price: 19.99, inStock: 15, pic: `${TeddyBear}`},
    {category: 3, name: "Electric Guitar", price: 7.99, inStock: 10, pic: `${Guitar}`},
    {category: 2, type: "household", name: "Wallet", price: 9.99, inStock: 40, pic: `${Wallet}`},
    {category: 2, name: "Toothbrush", price: 7.99, inStock: 40, pic: `${ToothBrush}`}
]

const Category = styled.div`
    padding: 4.5rem;
    box-shadow: 0 0 4px black;
    border-radius: 3px;
    margin-bottom: 3px;
    cursor: pointer;
`

export const Categories = () => {
    return (
        <div>
            {Items.filter(item => ( item.hasOwnProperty('type'))).map(items => 
                <Category>
                    <Link to={`shop/${items.type}`}>{items.type}</Link>
                </Category>
                )}
        </div>
    )
}