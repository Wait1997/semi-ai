import AppRouter from './router'
import styles from './app.module.scss'

export default function App() {
  return (
    <div className={styles['flow-web-root']}>
      <AppRouter />
    </div>
  )
}
