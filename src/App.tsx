import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Container from './layout/Container'
import SessionProvider from './store/context-session'
function App() {
  return (
    <main>
      <SessionProvider>
        <Container className="max-w-3xl">
          <Header />
          <Outlet />
        </Container>
      </SessionProvider>
    </main>
  )
}

export default App
