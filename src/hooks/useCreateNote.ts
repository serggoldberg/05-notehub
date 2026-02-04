import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote } from '../services/noteService';
import type { NewNote } from '../services/noteService';

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (note: NewNote) => createNote(note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};
