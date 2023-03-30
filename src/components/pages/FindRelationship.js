import styles from './FindRelationship.module.css'
import {useEffect, useState} from "react";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import Message from "../layout/Message";

function FindRelationship() {
    const [parents, setParents] = useState([])
    const [children, setChildren] = useState([])
    const [relationship, setRelationship] = useState({})
    const [resultMessage, setResultMessage] = useState('')

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

        fetch(`http://localhost:8080/relationship/find?id=${relationship.userId}&findrelationship=${relationship.findrelationshipId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setResultMessage(data)
            })
    }

  return (
      <form onSubmit={submit} className={styles.form}>
          <Select
              name="userId"
              text="Selecione uma pessoa"
              options={parents}
              handleOnChange={handleSelect}
              value={relationship.userId ? relationship.userId : ''}
          />

          <Select
              name="findrelationshipId"
              text="Selecione uma pessoa"
              options={children}
              handleOnChange={handleSelect}
              value={relationship.findrelationshipId ? relationship.findrelationshipId : ''}
          />

          <SubmitButton text="Descobrir grau de parentesco" />

          <br/>
          <br/>
          <br/>

          {resultMessage && <Message type="success" msg={resultMessage}/>}
      </form>
  )
}

export default FindRelationship
