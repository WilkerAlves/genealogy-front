import styles from './PersonCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function PersonCard({ id, name, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.person_card}>
      <h4>{name}</h4>
      <div className={styles.person_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default PersonCard
