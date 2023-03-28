import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import Loading from '../layout/Loading'

import LinkButton from '../layout/LinkButton'
import PersonCard from '../project/PersonCard'
import Message from '../layout/Message'

import styles from './Persons.module.css'

function Persons() {
    const [persons, setPersons] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [personMessage, setPersonMessage] = useState('')
    const [genalogy, setGenealogy] = useState({});

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        // Para ver o loading
        setTimeout(
            () =>
                fetch('http://localhost:8080/persons/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        setPersons(data)
                        setRemoveLoading(true)
                    }),

            1000,
        )
    }, [])

    function removePerson(id) {
        fetch(`http://localhost:8080/persons/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPersons(persons.filter((person) => person.id !== id))
                setPersonMessage('Pessoa removida com sucesso!')
            })
    }


    return (
        <div className={styles.person_container}>
            <div className={styles.title_container}>
                <h1>Pessoas</h1>
                <LinkButton to="/newperson" text="Criar pessoa" />
            </div>
            {message && <Message type="success" msg={message} />}
            {personMessage && <Message type="success" msg={personMessage} />}
            <Container customClass="start">
                {persons.length > 0 &&
                    persons.map((person) => (
                        <PersonCard
                            id={person.id}
                            name={person.name}
                            key={person.id}
                            handleRemove={removePerson}
                        />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && persons.length === 0 && (
                    <p>Não há pessoas cadastradas!</p>
                )}
            </Container>
        </div>
    )
}

export default Persons;
