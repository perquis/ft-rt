import type { Intern } from '@/interfaces/intern';
import type { IPagination } from '@/interfaces/pagination';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const client = {
  async getInterns(page = 0, limit = 8) {
    const params = `?_page=${page}&_per_page=${limit}`;
    return await api.get<IPagination>(`/interns${params}`);
  },
  async getInternsAll() {
    return await api.get<Intern[]>('/interns');
  },
  async getInternById(id: string) {
    return await api.get<Intern>(`/interns/${id}`);
  },
  async addIntern(intern: Intern) {
    await api.post<Intern>('/interns', intern);
  },
  async updateIntern(id: string, intern: Partial<Intern>) {
    await api.put<Intern>(`/interns/${id}`, intern);
  },
  async deleteIntern(id: string) {
    await api.delete(`/interns/${id}`);
  },
};
