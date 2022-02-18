import { Item } from '../components/Item';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import PS5 from '../assets/ps5console.png';
import TeddyBear from '../assets/teddybear.png'
import Guitar from '../assets/guitar.png'
import Wallet from '../assets/wallet.png'
import ToothBrush from '../assets/toothbrush.png'

const Items = [
    {category: 1, type: "electronics", name: "Playstation5", price: 599, inStock: 5, pic: `${PS5}`},
    {category: 2, type: "stuffed animals", name: "Teddy Bear", price: 19.99, inStock: 15, pic: `${TeddyBear}`},
    {category: 3, type: "electronics", name: "Electric Guitar", price: 7.99, inStock: 10, pic: `${Guitar}`},
    {category: 2, type: "household", name: "Wallet", price: 9.99, inStock: 40, pic: `${Wallet}`},
    {category: 2, type: "household", name: "Toothbrush", price: 7.99, inStock: 40, pic: `${ToothBrush}`}
]

export const Shop = ({addItem}) => {
    const params = useParams();
    
    return (
    
        <div>
            { params.hasOwnProperty('type') ? Items.filter(item => ( item.type === params.type)).map(item =>
            <> 
                <div style={{marginTop: "100px"}}>
                    <Item item={item} addItem={addItem}/>
                </div>
            </>
            )
                :
            Items.map(item => <Item item={item} addItem={addItem}/>)
            }
            <Link to='/cart'>Go To Checkout</Link>
        </div>
    )
}