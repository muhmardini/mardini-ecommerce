
import './App.css'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { Header } from './components/Global/Header'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Favorite } from './pages/Favorite'
import Footer from './Sections/Global/Footer'
import SingleProduct from './pages/SingleProduct'

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Favorite' element={<Favorite/>}/>
            <Route path='/singleProduct' element={<SingleProduct/>} />
          </Routes>
          <Footer/>
        </Router>
      </QueryClientProvider>
    </div>
  )
}
export default App
