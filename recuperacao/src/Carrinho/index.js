import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { Button, Card, CardGroup } from 'react-bootstrap'
import Header from "../Header";
const Carrinho = () => {
    const { produtosCarrinho, removeProduto } = useContext(CarrinhoContext)

    return (
        <>
            <Header />
            <h1>Carrinho</h1>
            <CardGroup>
                {
                    produtosCarrinho.map(({ id, title, price, description, image }) => {
                        return (
                            <div key={id}>

                                <Card style={{ width: '25rem' }}>
                                    <Card.Img variant="top" src={image} className="imagem" />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>
                                            <p>{description}</p>
                                            <p>U${price}</p>

                                        </Card.Text>
                                        <Button variant="danger" onClick={() => removeProduto({ id, title, price, description, image })} >Remover</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        )
                    })
                }
            </CardGroup>
        </>

    )
}

export default Carrinho;
