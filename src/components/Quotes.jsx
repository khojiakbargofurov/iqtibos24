import { Link } from "react-router-dom";
import quotes from "../data/quotesData";

function Quotes() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl font-montserrat">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight">
        Kitoblardan Iqtiboslar
      </h2>
      <p className="mb-20 text-lg text-gray-500">
        Muhim va ilhomlantiruvchi fikrlar to‘plami.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="border border-gray-300 rounded-xl p-4 shadow-lg transition-all hover:shadow-2xl"
          >
            <Link to={`/iqtiboslar/${quote.id}`}>
              <img
                src={quote.image}
                className="object-cover w-full h-56 mb-5 bg-center rounded-xl"
                alt={quote.title}
                loading="lazy"
              />
            </Link>
            <h2 className="mb-2 text-lg font-semibold">
              <Link to={`/iqtiboslar/${quote.id}`} className="hover:text-purple-700">
                {quote.title}
              </Link>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              {quote.description}
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <span className="font-medium text-gray-900">{quote.author}</span> • {quote.date}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/iqtiboslar" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Barcha Iqtiboslar
        </Link>
      </div>
    </section>
  );
}

export default Quotes;
