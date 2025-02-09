import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 📌 Navigatsiya uchun
import axios from "axios";

// ✅ .env dan ma’lumotlarni to‘g‘ri olish
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

function Create({ setQuotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null); // ❌ Xatolik holati

  const navigate = useNavigate(); // 📌 Sahifani yo‘naltirish

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 📌 Yangi iqtibos ma’lumotlari
    const newQuote = {
      fields: {
        Title: title,
        Description: description,
        Author: author,
        Image: image ? [{ url: image }] : [],
        Date: new Date().toISOString().split("T")[0],
      },
    };

    try {
      // ✅ API ga POST so‘rov yuborish
      const response = await axios.post(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
        newQuote,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Yangi iqtibos qo‘shildi:", response.data);

      // 📌 Agar `setQuotes` mavjud bo‘lsa, listni yangilash
      if (setQuotes) {
        setQuotes((prevQuotes) => [...prevQuotes, response.data.fields]);
      }

      // 🔄 Inputlarni tozalash
      setTitle("");
      setDescription("");
      setAuthor("");
      setImage("");
      setError(null);

      // 🚀 **Iqtiboslar sahifasiga yo‘naltirish**
      navigate("/iqtiboslar");
    } catch (error) {
      console.error("❌ Xatolik yuz berdi:", error);
      setError("Iqtibos qo‘shishda xatolik yuz berdi. Qayta urinib ko‘ring.");
    }
  };

  return (
    <section className="px-4 py-24 mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold mb-6">Yangi Iqtibos Qo‘shish</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Sarlavha"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded-lg"
          required
        />
        <textarea
          placeholder="Tavsif"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Muallif"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Rasm URL (ixtiyoriy)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded-lg"
        />
        <button
          type="submit"
          className="btn btn-outline w-full "
        >
          Saqlash
        </button>
      </form>
    </section>
  );
}

export default Create;
