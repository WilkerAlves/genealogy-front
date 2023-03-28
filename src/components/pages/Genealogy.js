import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from '../layout/Loading'
import styles from './Geology.module.css'
function Geanology() {
    let {id} = useParams();
    const[dados, setDados] = useState([])

    useEffect(() => {
        // Para ver o loading
        setTimeout(
            () =>
                fetch(`http://localhost:8080/relationship/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((resp) => resp.json())
                    .then((json) => {
                        setDados(json)
                    }),
            100,
        )
    }, [id])
    return (
    <section className={styles.geology_container}>
        <div className={styles.hold_container}>
            <h2>Pais</h2>
            <ul>
                {dados.parents ? dados.parents.map((parent) =>
                    <li key={parent.id}>{parent.name}</li>
                ) : <Loading /> }
            </ul>
        </div>
        <div>
            <h2>Filhos</h2>
            <ul>
                {dados.children ? dados.children.map((child) =>
                    <li key={child.id}>{child.name}</li>
                ) : <p>Não possui filhos</p> }
            </ul>
        </div>
        <div>
            <h2>Sobrinhos</h2>
            <ul>
                {dados.nephews? dados.nephews.map((nephew) =>
                    <li key={nephew.id}>{nephew.name}</li>
                ) : <li>Não possui sobrinho</li> }
            </ul>
        </div>
        <div>
            <h2>Avós</h2>
            <ul>
                {dados.grandparents? dados.grandparents.map((grandparent) =>
                    <li key={grandparent.id}>{grandparent.name}</li>
                ) : "" }
            </ul>
        </div>
        <div>
            <h2>Irmãos</h2>
            <ul>
                {dados.brothers? dados.brothers.map((brother) =>
                    <li key={brother.id}>{brother.name}</li>
                ) : "" }
            </ul>
        </div>
        <div>
            <h2>Tios</h2>
            <ul>
                {dados.uncles? dados.uncles.map((uncle) =>
                    <li key={uncle.id}>{uncle.name}</li>
                ) : "" }
            </ul>
        </div>
        <div>
            <h2>Primos</h2>
            <ul>
                {dados.cousins? dados.cousins.map((cousin) =>
                    <li key={cousin.id}>{cousin.name}</li>
                ) : "" }
            </ul>
        </div>

    </section>
    )
}

export default Geanology;
