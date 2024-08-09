import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"
import styles from './App.module.css'
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leodolago.png',
      name: 'Leonardo do Lago',
      role: 'CTO @Sitelegal'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctor'},
    ],
    publishedAt: new Date('2024-08-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: './src/assets/avatar/miguel-santos.png',
      name: 'Miguel dos Santos',
      role: 'Educator @Sitelegal'
  },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctor'},
    ],
    publishedAt: new Date('2024-08-06 20:00:00')
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App