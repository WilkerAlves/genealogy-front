import styles from './GenealogyCard.module.css'


function GenealogyCard({degreeKinship, names}) {

    return (
        <div className={styles.genealogy_card}>
            <h4>{degreeKinship}</h4>
            {
                names && names.length > 0 ? names.map((name) =>
                    <li key={name.id}><p><span>{name.name}</span></p></li>
                ) : <p>Não possui</p>
            }
        </div>
    )
}

export default GenealogyCard
