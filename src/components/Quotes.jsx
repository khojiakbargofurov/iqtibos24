import { Link } from "react-router-dom";

const quotes = [
  {
    id: 1,
    image: "https://picsum.photos/400/300",
    title: "Process Documents Using Artificial Intelligence For RPA Bots",
    description:
      "Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database...",
    author: "Praveen Juge",
    date: "April 16, 2020",
    link: "#",
  },
  {
    id: 2,
    image: "https://picsum.photos/400/300?grayscale",
    title: "Implement Dark Mode in Your Android App",
    description:
      "Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain it...",
    author: "Praveen Juge",
    date: "April 16, 2020",
    link: "#",
  },
  {
    id: 3,
    image: "https://picsum.photos/400/300?mountains",
    title: "Why is Mental Health one of the Important Issues to Address?",
    description:
      "Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months...",
    author: "Praveen Juge",
    date: "April 16, 2020",
    link: "#",
  },
];

function Quotes() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl font-montserrat">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight">
        Kitoblardan Iqtiboslar
      </h2>
      <p className="mb-20 text-lg text-gray-500">
        Comes directly from the desk of engineers, creators, and managers at
        Skcript.
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
                alt={quote.image ? quote.title : "Default image"}
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
              <a
                href={quote.link}
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                {quote.author}
              </a>{" "}
              • {quote.date}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/iqtiboslar" className="btn btn-outline btn-xl">
          Barcha Iqtiboslar
        </Link>
      </div>
    </section>
  );
}

export default Quotes;
