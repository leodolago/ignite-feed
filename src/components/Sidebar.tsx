import styles from './Sidebar.module.css'
import cover from '../assets/cover.png'
import avatar from '../assets/avatar/jen-yue.png'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={cover}
      />
      <div className={styles.profile}>
        <Avatar hasBorder src={avatar}/>
        <strong>Jamal Cooks</strong>
        <span> Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}