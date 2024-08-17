import { Todo } from '../../models/todo'
import styles from './todo-item.module.scss'

interface TodoItemProps {
  todo: Todo
  onDelete: () => void
  onEdit: () => void
}

export const TodoItem = ({
  todo: { id, title },
  onDelete,
  onEdit,
}: TodoItemProps) => {
  return (
    <li key={id} className={styles.root}>
      {title}
      <div className={styles.controls}>
        <button onClick={onEdit}>&#9998;</button>
        <button type="button" onClick={onDelete}>
          &#10060;
        </button>
      </div>
    </li>
  )
}
