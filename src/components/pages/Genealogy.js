import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from '../layout/Loading'
import styles from './Geology.module.css'
import Container from "../layout/Container";
import GenealogyCard from "../project/GenealogyCard";

function Genealogy() {
    let {id} = useParams();
    const [genealogy, setGenealogy] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

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
                    .then((data) => {
                        setGenealogy(data)
                        setRemoveLoading(true)
                    }),
            100,
        )
    }, [id])
    return (
        <div className={styles.genealogy_container}>
            <div className={styles.title_container}>
                <h1>Árvore Genealogica</h1>
            </div>

            <Container customClass="start">
                <GenealogyCard
                    degreeKinship="Pais"
                    names={genealogy.parents}
                />

                <GenealogyCard
                    degreeKinship="Filhos"
                    names={genealogy.children}
                />

                <GenealogyCard
                    degreeKinship="Sobrinhos"
                    names={genealogy.nephews}
                />

                <GenealogyCard
                    degreeKinship="Avós"
                    names={genealogy.grandparents}
                />

                <GenealogyCard
                    degreeKinship="Irmãos"
                    names={genealogy.brothers}
                />

                <GenealogyCard
                    degreeKinship="Tios"
                    names={genealogy.uncles}
                />

                <GenealogyCard
                    degreeKinship="Primos"
                    names={genealogy.cousins}
                />

                {!removeLoading && <Loading/>}

            </Container>

        </div>
    )
}

export default Genealogy;
