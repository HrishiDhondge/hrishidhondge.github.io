import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import BlogTag from "./components/Blog/BlogTag";
import TagsPage from './components/Blog/TagsPage'
import Career from './career'
import NotFound from './NotFound'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/tags" element={<TagsPage />} />
            <Route path="/blog/tag/:tag" element={<BlogTag />} />
            <Route path="/career" element={<Career />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App
