import { Route, Routes } from 'react-router-dom'
import PageShell from './layouts/PageShell'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Initiatives from './pages/Initiatives'
import Conference from './pages/Conference'
import Blog from './pages/Blog'
import Editions from './pages/Editions'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/editions" element={<Editions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </PageShell>
  )
}

export default App
