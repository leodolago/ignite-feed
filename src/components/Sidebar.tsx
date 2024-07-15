import styles from './Sidebar.module.css';

import cover from '../assets/cover02.jpg';
import avatar from '../assets/fake-avatar/leslie-alexander.jpg';

import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={cover}
            />

            <div className={styles.profile}>
                <Avatar hasBorder src={avatar}/>
                <strong>Leslie Alexander</strong>
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