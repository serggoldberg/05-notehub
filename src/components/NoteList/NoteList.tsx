import css from './NoteList.module.css';
import type { Note } from '../../types/note';

interface NoteListProps {
  notes: Note[];
  isLoading: boolean;
  isError: boolean;
  onDelete: (id: string) => void;
}

export default function NoteList({
  notes,
  isLoading,
  isError,
  onDelete,
}: NoteListProps) {
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes</p>;
  if (!notes || notes.length === 0) {
    return <p>No notes found</p>;
  }

  return (
    <ul className={css.list}>
      {notes.map((note: Note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>

          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button className={css.button} onClick={() => onDelete(note.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
