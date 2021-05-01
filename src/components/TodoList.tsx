import React from 'react';
import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector';

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector((state) => state.todo);
  const pages = [1, 2, 3, 4, 5];

  const { fetchTodos, setTodoPage } = useActions();
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <div>idet zagruzka</div>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.id}-{todo.title}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '2px solid green' : '1px solid gray',
              padding: 10,
              display: 'flex',
            }}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
