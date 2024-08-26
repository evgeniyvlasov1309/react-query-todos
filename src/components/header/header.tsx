import { useCallback, useContext } from 'react'
import { AuthContext } from '../../auth-provider/auth-provider'

export const Header = () => {
  const { user, setUser } = useContext(AuthContext)

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setUser(null)
  }, [])

  return (
    <>
      {user?.username}
      <button type="button" onClick={logout}>
        Выйти
      </button>
    </>
  )
}
