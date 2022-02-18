import { Item } from "../components/Item"
import { Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Checkout } from '../components/Checkout';
import styled from "styled-components";


const Carted = styled.ul`
    display: flex;
    flex-direction: column;
`

const Layout = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const Cart = ({cart, setCart}) => {
    const [totals, setTotals] = useState(0)

    const handleClearCart = () => {
        setCart([])
    }

    useEffect(function() {
        let total = cart.reduce((acc, curr) => {
            return acc += curr.price
        }, 0)

        setTotals(total)
    }, [cart])


    return (
        <Layout>
            <Carted>
                {cart.map(item => <Item item={item}/>)}
                <div>
                    <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
                </div>
            </Carted>
            <Checkout total={totals} />
        </Layout>
    )
}