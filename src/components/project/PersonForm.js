import { useState, useEffect } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './PersonForm.module.css'

function PersonForm({ handleSubmit, btnText, personData }) {
  const [person, setPerson] = useState(personData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(person)
  }

  function handleChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome da pessoa"
        name="name"
        placeholder="Insira o nome da pessoa"
        handleOnChange={handleChange}
        value={person.name}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default PersonForm
