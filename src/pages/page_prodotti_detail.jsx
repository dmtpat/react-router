import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";


function Product_detail() {
    const { id } = useParams();

    const [prodotto, setProdotto] = useState([]);
    let apiUrl = `https://fakestoreapi.com/products/${parseInt(id)}`;

    function getData() {

        axios.get(apiUrl).then((result) => {
            setProdotto(result.data);
            console.log(result.data);
        }).catch((error) => <p>Ops.. Qualcosa non va</p>)
    }

    useEffect(getData, []);

    return (
        <main>
            <h1>{prodotto.title} </h1>
            <p>{prodotto.category}</p>
            <img src={prodotto.image} alt={prodotto.title} />
            <p>{prodotto.description}</p>
            <p>&euro; {prodotto.price}</p>
        </main>
    )
}

export default Product_detail