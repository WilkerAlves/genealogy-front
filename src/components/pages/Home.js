import LinkButton from "../layout/LinkButton";
import styles from './Home.module.css'


function Home() {
  return (
      <section className={styles.home_container}>
          <h1>
              Bem-vindo a <span>Árvore genealógica</span>
          </h1>
          <p>Comece a criar sua árvore genealógica agora mesmo!</p>
          <LinkButton to="/newperson" text="Criar pessoa" />
      </section>
  )
}

export default Home
