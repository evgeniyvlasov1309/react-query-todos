import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { deleteTodo, editTodo, getTodos, postTodo } from '../../services/todo'
import { TodoItem } from '../todo-item'
import styles from './todo-list.module.scss'

export const TodoList = () => {
  const queryClient = useQueryClient()

  const todosQuery = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  const [active, setActive] = useState<number | null>(null)
  const [title, setTitle] = useState('')

  const createMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      setTitle('')
    },
  })

  const editMutation = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      setTitle('')
      setActive(null)
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {todosQuery.data?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={() => {
              setActive(todo.id)
              setTitle(todo.title)
            }}
            onDelete={() => {
              deleteMutation.mutate(todo.id)
            }}
          />
        ))}
      </ul>
      <div className={styles.controls}>
        <input
          type="text"
          value={title}
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        {active ? (
          <button
            onClick={() => {
              editMutation.mutate({
                id: active,
                title: title,
              })
            }}
            disabled={!title}
          >
            Сохранить
          </button>
        ) : (
          <button
            onClick={() => {
              createMutation.mutate({
                id: Date.now(),
                title: title,
              })
            }}
            disabled={!title}
          >
            Добавить
          </button>
        )}
      </div>
    </div>
  )
}
