import { createContext, useEffect, useMemo, useState } from 'react'
import { AuthForm } from '../components/auth-form/auth-form'
import { User } from '../models/user'
import { Nullable } from '../types'

interface AuthProviderProps {
  children: JSX.Element
}

type AuthContext = {
  user: Nullable<User>
  setUser: (user: Nullable<User>) => void
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [user])

  const providerData = useMemo(
    () => ({
      user,
      setUser: (user: Nullable<User>) => setUser(user),
    }),
    [user]
  )

  return (
    <AuthContext.Provider value={providerData}>
      {isAuth ? children : <AuthForm />}
    </AuthContext.Provider>
  )
}
