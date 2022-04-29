import DocumentHead from '../components/document-head'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>Anywhere but here.</h2>
    </div>
  </div>
)

export default RenderPage
