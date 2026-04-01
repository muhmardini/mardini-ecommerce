import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { Header } from './shared/components/Header'
import ScrollToTop from './app/ScrollToTop'

import {BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from '@/app/AnimatedRoutes'
import SmallNav from './components/Global/SmallNav'

function App() {
  const client = new QueryClient();
  return (
    <div className="App pt-10">
      <QueryClientProvider client={client}>
        <Router>
          <ScrollToTop />
          <Header />
          <SmallNav />
          <AnimatedRoutes />
        </Router> 
      </QueryClientProvider>

    </div>
  )
}
export default App
