import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// ✅ .env dan ma’lumotlarni olish
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

function Quotes() {
  const [quotes, setQuotes] = useState([]); // 🔄 Iqtiboslar ro‘yxati
  const [loading, setLoading] = useState(true); // ⏳ Yuklanish holati
  const [error, setError] = useState(null); // ❌ Xatolik holati

  // ✅ API dan iqtiboslarni olish
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );

        console.log("✅ API dan olingan iqtiboslar:", response.data);

        // 📌 Ma’lumotlarni to‘g‘ri formatga keltirish
        const formattedQuotes = response.data.records.map((record) => ({
          id: record.id,
          title: record.fields.Title || "Noma'lum",
          description: record.fields.Description || "Tavsif mavjud emas.",
          author: record.fields.Author || "Muallif noma'lum",
          date: record.fields.Date || "Sanasi ko‘rsatilmagan",
          image:
            record.fields.Image && record.fields.Image.length > 0
              ? record.fields.Image[0].url
              : "https://via.placeholder.com/300",
        }));

        setQuotes(formattedQuotes);
      } catch (error) {
        console.error("❌ API xatosi:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  // ❌ Agar xatolik yuz bersa
  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight">
        Kitoblardan Iqtiboslar
      </h2>
      <p className="mb-20 text-lg text-gray-500">
        Muhim va ilhomlantiruvchi fikrlar to‘plami.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {loading
          ? // 🟡 Agar loading bo‘lsa Skeleton Cardlarni chiqarish
            Array(1)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-4 shadow-lg animate-pulse"
                >
                  <div className="w-full h-56 bg-gray-300 rounded-xl"></div>
                  <div className="h-14 bg-gray-300 mt-4 rounded"></div>
                  <div className="h-11 bg-gray-300 mt-2 rounded w-2/3"></div>
                  <div className="h-8 bg-gray-300 mt-2 rounded w-1/2"></div>
                </div>
              ))
          : // ✅ Agar loading tugagan bo‘lsa, haqiqiy ma’lumotlarni chiqarish
            quotes.map((quote) => (
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
                  <Link
                    to={`/iqtiboslar/${quote.id}`}
                    className="hover:text-purple-700"
                  >
                    {quote.title}
                  </Link>
                </h2>
                <p className="mb-3 text-sm font-normal text-gray-500">
                  {quote.description}
                </p>
                <p className="mb-3 text-sm font-normal text-gray-500">
                  <span className="font-medium text-gray-900">
                    {quote.author}
                  </span>{" "}
                  • {quote.date}
                </p>
              </div>
            ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/iqtiboslar"
          className="btn btn-outline"
        >
          Barcha Iqtiboslar
        </Link>
      </div>
    </section>
  );
}

export default Quotes;
