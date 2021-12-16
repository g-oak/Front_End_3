import { Link } from "react-router-dom"


const Header = () =>{
    return(
        <>
            <header>
                <nav>
                    <h1>LOJA</h1>
                    <Link to = {"/"}>Produtos </Link><br/>
                    <Link to = {"/carrinho"}>Carrinho</Link>
                </nav>
            </header>
        </>
    )
}

export default Header