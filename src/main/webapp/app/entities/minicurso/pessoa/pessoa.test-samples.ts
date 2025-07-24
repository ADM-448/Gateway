import { IPessoa, NewPessoa } from './pessoa.model';

export const sampleWithRequiredData: IPessoa = {
  id: 82183,
  nome: 'Rodovia',
};

export const sampleWithPartialData: IPessoa = {
  id: 24871,
  nome: 'RAM Bedfordshire Aço',
};

export const sampleWithFullData: IPessoa = {
  id: 42162,
  nome: 'Lead Identity',
};

export const sampleWithNewData: NewPessoa = {
  nome: 'directional reinvent Applications',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
