import { useState } from "react";

const books = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Kichik odatlarning katta natijalarga qanday olib borishini tushuntiruvchi kitob. O'zgarishlarga erishishning ilmiy asoslangan usullari.",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81qgEPE6k1L._SL1500_.jpg",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    description:
      "Shaxsiy va professional rivojlanish uchun muhim bo'lgan yettita odat haqida.",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71I6MaZsCcL._SL1500_.jpg",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description:  
      "Ongli hayot kechirish va hozirgi onning kuchidan qanday foydalanish haqida.",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description:
      "Moliyaviy erkinlikka erishish va to'g'ri moliyaviy fikrlashni shakllantirish bo'yicha maslahatlar.",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/81gByv+FhjL._SL1500_.jpg",
    title: "Can't Hurt Me",
    author: "David Goggins",
    description:
      "Jismoniy va ruhiy cheklovlarni yengish haqida harbiy sportchi David Gogginsning hayotiy tajribasi.",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/71M1P287BjL._SL1500_.jpg",
    title: "Start with Why",
    author: "Simon Sinek",
    description:
      "Liderlik va biznesda muvaffaqiyat qozonishning kaliti - 'Nega?' degan savolga javob berish.",
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/81IM+frfVSL._SL1500_.jpg",
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    description:
      "Boylik va moliyaviy mustaqillikka tezroq erishish yo'llari haqida muhim tavsiyalar.",
  },
  {
    id: 8,
    image: "https://source.unsplash.com/400x600/?growth,book",
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    description:
      "Fikrlash turini o'zgartirish orqali hayot va ishda qanday muvaffaqiyatga erishish mumkinligi haqida.",
  },
  {
    id: 9,
    image: "https://source.unsplash.com/400x600/?leader,book",
    title: "The 5 AM Club",
    author: "Robin Sharma",
    description:
      "Erta uyg'onish odati va uning samaradorlikka qanday ta'sir qilishini tushuntiruvchi kitob.",
  },
  {
    id: 10,
    image: "https://source.unsplash.com/400x600/?career,book",
    title: "Deep Work",
    author: "Cal Newport",
    description:
      "Diqqatni jamlash va yuqori mahsuldorlik bilan ishlash strategiyalari haqida qo'llanma.",
  },
];

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
            <a href={`#${book.id}`}>
              <img
                src={book.image}
                className="object-cover w-full h-56 mb-5 bg-center rounded-xl"
                alt={book.title}
                loading="lazy"
              />
            </a>
            <h2 className="mb-2 text-lg font-semibold">
              <a href={`#${book.id}`} className="hover:text-purple-700">
                {book.title}
              </a>
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
          <button onClick={showMoreBooks} className="btn btn-outline">
            Yana Ko'rish
          </button>
        </div>
      )}
    </section>
  );
}

export default Books;
