import { AuthProvider } from '../../auth-provider/auth-provider'
import { Header } from '../header/header'
import { TodoList } from '../todo-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <>
          <Header />
          <TodoList />
        </>
      </AuthProvider>
    </QueryClientProvider>
  )
}
