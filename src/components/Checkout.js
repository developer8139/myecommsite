import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const Checked = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0px 5px 30px 5px;
    margin-top: 200px;
    margin-bottom: -100px;
    justify-content: space-between;
    height: 500px;
    width: 200px;
`

export const Checkout = ({total}) => {
    return (
        <Checked>
            <span>Total: ${total}</span>
            <Link to="/recieved">
                <Button variant="primary">Submit Order</Button>
            </Link>
        </Checked>
    )
}