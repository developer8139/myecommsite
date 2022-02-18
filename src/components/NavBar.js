import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
    <>
        <div style={{position: "fixed", 
                    top: "0", 
                    width: "100vw", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    zIndex: "3",
                    backgroundColor: "black",
                    padding: "20px",
                    margin: "0px"
                    }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </>
    )
}