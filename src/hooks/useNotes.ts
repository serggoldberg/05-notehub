import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../services/noteService';

interface UseNotesProps {
  page: number;
  search: string;
}

export const useNotes = ({ page, search }: UseNotesProps) => {
  return useQuery({
    queryKey: ['notes', page, search],
    queryFn: () => fetchNotes(page, search),
    placeholderData: keepPreviousData,
  });
};
