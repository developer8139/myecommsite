import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';


const List = styled.div`
    display: flex;
    box-shadow: 1px 1px 1px 1px black;
    margin-bottom: 10px;
    border-radius: 3px;
    height: 245px;
    width: 45.5rem;
    align-items: center;
    

    :nth-child(1) {
        margin-top: 200px;
    }
`


export const Item = ({item, addItem}) => {

    return (
        <List>
            <img src={item.pic} alt={item.name} style={{height: "200px", width: "115px", margin: "0 auto"}}/>
            <div style={{marginRight: "100px"}}>
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                <Button variant="outline-success" onClick={() => addItem(item)}>Add To Cart</Button>
            </div>
        </List>
    )
}