import { useState } from 'react';

export default function Todo({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let content;

  if (isEditing) {
    content = (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsEditing(false);
        }}
      >
        <input
          value={todo.text}
          aria-label="Edit field"
          onChange={(e) => {
            onUpdate({
              ...todo,
              text: e.target.value,
            });
          }}
        />

        <button type="submit" aria-label="Save changes">
          Save
        </button>
      </form>
    );
  } else {
    content = (
      <>
        <p style={{ textDecoration: todo.done ? 'line-through' : null }}>
          {todo.text}
        </p>
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          aria-label={`Edit ${todo.text}`}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onUpdate({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {content}
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </div>
  );
}
