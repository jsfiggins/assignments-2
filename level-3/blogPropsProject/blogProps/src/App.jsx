
import './App.css'
import Header from './assets/Header'
import BlogList from './assets/BlogList'
import Footer from './assets/Footer'

function App() {
  
  return (
  <div>
    <Header />
    <BlogList />
    <div className="buttonContainer">
    <button className="olderPost"> OLDER POSTS → </button>
    </div>
    <Footer />
  </div>
  )
}

export default App
