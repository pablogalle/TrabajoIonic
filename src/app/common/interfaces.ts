export interface Componente {
  nombre: string;
  ruta: string;
  icono: string;
}

//Pruebas --
export interface SerieInicio {
  id: number;
  titulo: string;
  imagen: string;
  categorias: string[];
}

export interface SerieInfo {
  info_inicio: SerieInicio,
  numero_capitulos: number,
  anyo_emision: number,
  sinopsis: string,
  puntuaciones: number[]
}

//        --
