import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, getTodos, postTodo } from "./api";
import { useState } from "react";

function Todos() {
  const queryClient = useQueryClient();

  const todosQuery = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  const [title, setTitle] = useState("");

  const createMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTitle("")
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <ul>
        {todosQuery.data?.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              onClick={() => {
                deleteMutation.mutate(todo.id);
              }}
            >
              &#10060;
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          createMutation.mutate({
            id: Date.now(),
            title: title,
          });
        }}
        disabled={!title}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Todos;
