import { useHistory } from 'react-router-dom'

import PersonForm from '../project/PersonForm'

import styles from './NewPerson.module.css'

function NewPerson() {
  const history = useHistory()

  function createPost(person) {
    fetch('http://localhost:8080/persons/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/persons', { message: 'Pessoa criada com sucesso!' })
      })
  }

  return (
    <div className={styles.newperson_container}>
      <h1>Criar Pessoa</h1>
      <p>Crie uma pessoa para depois adicionar os relacionamentos</p>
      <PersonForm handleSubmit={createPost} btnText="Criar Pessoa" />
    </div>
  )
}

export default NewPerson
