import styles from './NewRelationship.module.css'
import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function NewRelationship() {
    const history = useHistory()
    const [parents, setParents] = useState([])
    const [children, setChildren] = useState([])
    const [relationship, setRelationship] = useState({})

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
                        setParents(data)
                        setChildren(data)
                    }),

            1000,
        )
    }, [])

    function handleSelect(e) {
        setRelationship({...relationship, [e.target.name]: parseInt(e.target.value) })
    }

    const submit = (e) => {
        e.preventDefault()

        fetch('http://localhost:8080/relationship/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(relationship),
        })
            .then((resp) => resp.json())
            .then(() => {
                history.push('/persons', { message: 'Relacionamento criado com sucesso!' })
            })
    }

  return (
      <form onSubmit={submit} className={styles.form}>
          <Select
              name="parent"
              text="Selecione pai/mãe"
              options={parents}
              handleOnChange={handleSelect}
              value={relationship.parent ? relationship.parent : ''}
          />

          <Select
              name="children"
              text="Selecione filho/filha"
              options={children}
              handleOnChange={handleSelect}
              value={relationship.children ? relationship.children : ''}
          />

          <SubmitButton text="Criar relacionamento" />
      </form>
  )
}

export default NewRelationship
