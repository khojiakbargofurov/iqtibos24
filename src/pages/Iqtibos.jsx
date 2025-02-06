import { useParams } from "react-router-dom";
import quotes from "../data/quotesData";

function Iqtibos() {
  const { id } = useParams();
  const quote = quotes.find((q) => q.id === parseInt(id));

  if (!quote) {
    return <h2 className="text-center text-red-500 text-xl">Iqtibos topilmadi</h2>;
  }

  return (
    <section className="px-4 py-24 mx-auto max-w-3xl font-montserrat">
      <div className="border border-gray-300 rounded-xl p-6 shadow-lg">
        <img
          src={quote.image}
          alt={quote.title}
          className="object-cover w-full h-72 mb-6 rounded-xl"
        />
        <h1 className="text-3xl font-extrabold mb-4">{quote.title}</h1>
        <h2 className="text-xl font-medium text-gray-700 mb-4">{quote.author}</h2>
        <p className="text-gray-600">{quote.description}</p>
      </div>
    </section>
  );
}

export default Iqtibos;
