export interface Criptomoneda {
  id: number;
  nombre: string;
  simbolo: string;
  imagen: string;
  precio_actual: string; // Se mantiene como string, ya que el JSON lo provee así.
  market_cap_rank: number;
  market_cap: number;
  volumen_total: number;
}
