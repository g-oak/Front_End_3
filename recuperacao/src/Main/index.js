import api from '../services/api'
import React, { useState, useEffect, useContext } from 'react';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import Header from '../Header';
import {Card, Button, CardGroup } from 'react-bootstrap'
import './style.scss'

const Main = () => {
    const [produtos, setProdutos] = useState([]);
    const { addProduto } = useContext(CarrinhoContext)

    useEffect(() => {
        api
            .get('/products')
            .then((response) => setProdutos(response.data))
            .catch((err) => { console.error(err) })
    }, [produtos])

    return (
        <>
            <Header />
            <h1>Produtos</h1>
            <CardGroup>
                {
                    produtos.map(({ id, title, price, description, image, rating }) => {
                        return (
                            <div key={id}>
                                <Card style={{ width: '25rem' }}>
                                    <Card.Img variant="top" src={image} className="imagem"/>
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>
                                            <p>{description}</p>
                                            <p><strong>Avaliação: </strong>{rating.rate}</p>
                                            <p>U${price}</p>

                                        </Card.Text>
                                        <Button variant="primary" onClick={() => addProduto({ id, title, price, description, image })} >Add Carrinho</Button>
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

export default Main;
