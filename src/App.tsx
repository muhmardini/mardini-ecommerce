import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { Header } from './components/Global/Header'
import ScrollToTop from './components/Global/ScrollToTop'

import {BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './components/Global/Animation/AnimatedRoutes'

function App() {
  const client = new QueryClient();
  return (
    <div className="App pt-10">
      <QueryClientProvider client={client}>
        <Router>
          <ScrollToTop />
          <Header />
          <AnimatedRoutes />
        </Router> 
      </QueryClientProvider>

    </div>
  )
}
export default App
