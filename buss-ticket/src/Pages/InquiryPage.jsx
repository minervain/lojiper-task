import { useParams } from 'react-router-dom';
import data from '../api/sefer.json';

function InquiryPage() {
    const { departure, arrival, departureDate } = useParams();
    console.log("Departure:", departure);
    console.log("Data:", data);
    console.log(arrival)
    console.log(departureDate)


    // Parametrelerle eşleşen seferleri filtrele
    const filteredFlights = data.seferler.filter(sefer => {
        const condition =
            sefer.kalkisSehir.toLowerCase() === departure.toLowerCase() &&
            sefer.varisSehir.toLowerCase() === arrival.toLowerCase() &&
            sefer.kalkisZamani.includes(departureDate);

        console.log("Sefer ID:", sefer.seferID, "Condition:", condition);

        return condition;
    });



    return (
        <div>
            <h2>Inquiry Results</h2>
            {filteredFlights.length > 0 ? (
                <ul>
                    {filteredFlights.map(sefer => (
                        <li key={sefer.seferID}>
                            Sefer ID: {sefer.seferID}<br />
                            Kalkış Şehir: {sefer.kalkisSehir}<br />
                            Varış Şehir: {sefer.varisSehir}<br />
                            Kalkış Zamanı: {sefer.kalkisZamani}<br />
                            Varış Zamanı: {sefer.varisZamani}<br />
                            Fiyat: {sefer.fiyat}<br />
                            Boş Koltuk Sayısı: {sefer.bosKoltukSayisi}<br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No matching flights found.</p>
            )}
        </div>
    );
}

export default InquiryPage;
