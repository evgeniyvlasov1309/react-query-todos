import { TodoList } from '../todo-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  )
}
