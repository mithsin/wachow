import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          search box
        </div>
      </div>
    </div>
  )
}
