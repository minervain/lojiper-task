
interface Sefer {
  seferID: number;
  kalkisSehir: string;
  varisSehir: string;
  kalkisZamani: string;
  varisZamani: string;
  fiyat: number;
  bosKoltukSayisi: number;
}
interface TripSummaryProps {
  key: number;
  trip: Sefer;
}

const TripSummary: React.FC<TripSummaryProps> = ({ key, trip }) => {
  return (
    <div>
      {/* ... Var olan TripSummary bileşeninizin kodu ... */}
    </div>
  );
};

export default TripSummary;
