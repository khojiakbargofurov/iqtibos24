import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/booksData";

function Books() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreBooks = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, books.length));
  };

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl font-montserrat">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight">
        Kitoblardan Iqtiboslar
      </h2>
      <p className="mb-20 text-lg text-gray-500">
        Eng yaxshi motivatsion va ommabop kitoblardan iqtiboslar.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {books.slice(0, visibleCount).map((book) => (
          <div
            key={book.id}
            className="border border-gray-300 rounded-xl p-4 shadow-lg transition-all hover:shadow-2xl"
          >
            <Link to={`/books/${book.id}`}>
              <img
                src={book.image}
                className="object-cover w-full h-56 mb-5 bg-center rounded-xl"
                alt={book.title}
                loading="lazy"
              />
            </Link>
            <h2 className="mb-2 text-lg font-semibold">
              <Link to={`/books/${book.id}`} className="hover:text-purple-700">
                {book.title}
              </Link>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              {book.description}
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <span className="font-medium text-gray-900">{book.author}</span>
            </p>
          </div>
        ))}
      </div>

      {visibleCount < books.length && (
        <div className="mt-10 text-center">
          <button
            onClick={showMoreBooks}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Yana Ko'rish
          </button>
        </div>
      )}
    </section>
  );
}

export default Books;
