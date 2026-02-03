import axios from 'axios';
import type { Note } from '../types/note';
import type { NoteTag } from '../types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

interface FetchNotesResponse {
  results: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number,
  search: string
): Promise<FetchNotesResponse> => {
  const response = await api.get<FetchNotesResponse>('/notes', {
    params: { page, perPage: 12, search },
  });
  return response.data;
};

export interface NewNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export const createNote = async (note: NewNote): Promise<Note> => {
  const response = await api.post('/notes', note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};
