export interface Componente {
  nombre: string;
  ruta: string;
  icono: string;
}
export interface Genre {
  name: string;
  image: string;
}

export interface Score {
  email: string;
  score: number;
}
export interface Serie {
  _id: string;
  title: string;
  images: string;
  genres: Genre[];
  num_episodes: number;
  year_of_emision: number;
  synopsis: string;
  scores: Score[];

}


