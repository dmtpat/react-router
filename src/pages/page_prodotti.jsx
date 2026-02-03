import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

function Page_prodotti() {
    const [prodotti, setProdotti] = useState([]);
    const apiUrl = "https://fakestoreapi.com/products";

    function getData() {
        axios.get(apiUrl).then((result) => {
            setProdotti(result.data);
            console.log(result.data);
        }).catch((error) => <p>Ops.. Qualcosa non va</p>)
    }

    useEffect(getData, []);

    return (
        <main className="boxed">
            <h1>Questi sono i nostri prodotti</h1>
            <div className="card_container">
                {prodotti.map((prodotto) => {
                    return (
                        <div className="card" key={prodotto.id} >
                            <img src={prodotto.image} alt="" />
                            <div className="marquee">
                                <h2>{prodotto.title}</h2>
                            </div>
                            <Link to={`/prodotti/${prodotto.id}`} >Vai ai dettagli</Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
export default Page_prodotti