import ExtLink from './ext-link'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span>Powered by </span>
      <ExtLink href="https://github.com/cpmrph/easy-notion-blog">
        cpmrph/easy-notion-blog
      </ExtLink>
      <span> (via </span>
      <ExtLink href="https://github.com/otoyo/easy-notion-blog">
        otoyo/easy-notion-blog
      </ExtLink>
      <span>)</span>
    </div>
  </footer>
)

export default Footer
