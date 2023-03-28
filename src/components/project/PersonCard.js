import { Link } from 'react-router-dom'
import styles from './PersonCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function PersonCard({ id, name, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.person_card}>
      <h4>{name}</h4>
      <div className={styles.person_card_actions}>
        <Link to={'/persons/' + id}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default PersonCard
