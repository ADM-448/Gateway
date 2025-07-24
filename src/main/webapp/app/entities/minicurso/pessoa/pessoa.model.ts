export interface IPessoa {
  id: number;
  nome?: string | null;
}

export type NewPessoa = Omit<IPessoa, 'id'> & { id: null };
