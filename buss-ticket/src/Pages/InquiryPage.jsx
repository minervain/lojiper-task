import { useParams } from 'react-router-dom';
import data from '../api/sefer.json';
import resim from '../assets/logo4.png'
import NotFound from './NotFound/NotFound';

function InquiryPage() {
    const { departure, arrival, departureDate } = useParams();
    console.log("Departure:", departure);
    console.log("Data:", data);
    console.log(arrival)
    console.log(departureDate)


    const filteredFlights = data.seferler.filter(sefer => {
        const condition =
            sefer.kalkisSehir.toLowerCase() === departure.toLowerCase() &&
            sefer.varisSehir.toLowerCase() === arrival.toLowerCase() &&
            sefer.kalkisZamani.includes(departureDate);

        console.log("Sefer ID:", sefer.seferID, "Condition:", condition);

        return condition;
    });



    return (
        <div className='container mx-auto p-4'>
            {filteredFlights.length > 0 ? (
                <ul className='list-disc pl-4'>
                    {filteredFlights.map(sefer => (
                        <li key={sefer.seferID} className='mb-4 '>
                            <div className='bg-white p-4 rounded shadow-md flex justify-between ite' style={{ backgroundColor: "#D23B38" }}>
                                <div>
                                    <p className='text-white'>Kalkış Şehir: {sefer.kalkisSehir}</p>
                                    <p className='text-white'>Varış Şehir: {sefer.varisSehir}</p>
                                    <p className='text-white'> Kalkış Zamanı: {sefer.kalkisZamani}</p>
                                    <p className='text-white'>Varış Zamanı: {sefer.varisZamani}</p>
                                    <p className='text-white'>Fiyat: {sefer.fiyat}</p>
                                    <p className='text-white'>Boş Koltuk Sayısı: {sefer.bosKoltukSayisi}</p>
                                    <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2'>
                                        Satın Al
                                    </button>
                                </div>
                                <div className='w-64'>
                                    <img src={resim} alt="" />

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <NotFound />
            )}
        </div>
    );
}

export default InquiryPage;
