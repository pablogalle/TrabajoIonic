export interface Componente {
  nombre: string;
  ruta: string;
  icono: string;
}

export interface Serie {
  _id: string;
  title: string;
  images: string;
  genres: string[];
  num_episodes: number;
  year_of_emision: number;
  synopsis: string;
  scores: number[];

}


