import { QueryClient , QueryClientProvider } from 'react-query'
import Query from './query'
import './App.css'

function App() {
  const queryClient = new QueryClient()
  return (
    <div id="root">
      <QueryClientProvider client={queryClient}>
        <Query/>
      </QueryClientProvider>
    </div>
  )
}

export default App
