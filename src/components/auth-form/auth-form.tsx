import { FormEvent, useCallback, useContext, useState } from 'react'
import { AuthContext } from '../../auth-provider/auth-provider'
import { login } from '../../services/auth-service'

export const AuthForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(AuthContext)

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      login({
        username,
        password,
      }).then(({ user }) => {
        localStorage.setItem('token', 'token')
        setUser(user)
      })
    },
    [username, password]
  )

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        required
      />
      <button type="submit">Войти</button>
    </form>
  )
}
