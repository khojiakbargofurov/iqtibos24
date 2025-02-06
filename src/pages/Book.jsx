import { useParams } from "react-router-dom";
import books from "../data/booksData";

function Book() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 className="text-center text-red-500 text-xl">Kitob topilmadi</h2>;
  }

  return (
    <section className="px-4 py-24 mx-auto max-w-3xl font-montserrat">
      <div className="border border-gray-300 rounded-xl p-6 shadow-lg">
        <img
          src={book.image}
          alt={book.title}
          className="object-cover w-full h-72 mb-6 rounded-xl"
        />
        <h1 className="text-3xl font-extrabold mb-4">{book.title}</h1>
        <h2 className="text-xl font-medium text-gray-700 mb-4">{book.author}</h2>
        <p className="text-gray-600">{book.description}</p>
      </div>
    </section>
  );
}

export default Book;
