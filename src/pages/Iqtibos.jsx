import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

function Iqtibos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [updatedQuote, setUpdatedQuote] = useState({
    Title: "",
    Description: "",
    Author: "",
    Image: "",
  });

  // 📌 API dan iqtibos olish
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );
        setQuote(response.data.fields);
        setUpdatedQuote({
          Title: response.data.fields.Title || "",
          Description: response.data.fields.Description || "",
          Author: response.data.fields.Author || "",
          Image: response.data.fields.Image?.[0]?.url || "",
        });
      } catch (err) {
        setError("Iqtibos topilmadi yoki o‘chirilgan.");
        toast.error("Iqtibos topilmadi! ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [id]);

  // 📌 O‘chirish funksiyasi
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        }
      );
      toast.success("Iqtibos muvaffaqiyatli o‘chirildi! 🗑️");
      navigate("/iqtiboslar");
    } catch (error) {
      console.error("❌ O‘chirishda xatolik:", error);
      toast.error("O‘chirishda xatolik yuz berdi! ❌");
    } finally {
      setIsDeleting(false);
    }
  };

  // 📌 Yangilash funksiyasi
  const handleUpdate = async () => {
    try {
      const updatedData = {
        fields: {
          Title: updatedQuote.Title,
          Description: updatedQuote.Description,
          Author: updatedQuote.Author,
          Image: updatedQuote.Image ? [{ url: updatedQuote.Image }] : [],
        },
      };

      await axios.patch(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Iqtibos muvaffaqiyatli yangilandi! ✅");
      setQuote(updatedQuote);
      setIsEditing(false);
    } catch (error) {
      console.error("❌ Yangilashda xatolik:", error);
      toast.error("Yangilashda xatolik yuz berdi! ❌");
    }
  };

  // ✅ Loading Skeleton qo‘shildi
  if (loading) {
    return (
      <div className="px-4 py-24 mx-auto max-w-3xl">
        <div className="border border-gray-300 rounded-xl p-6 shadow-lg animate-pulse">
          <div className="w-full h-72 bg-gray-300 rounded-xl"></div>
          <div className="h-16 bg-gray-300 mt-4 rounded w-4/5"></div>
          <div className="h-7 bg-gray-300 mt-2 rounded w-1/3"></div>
          <div className="h-12 bg-gray-300 mt-4 rounded w-full"></div>
          <div className="h-10 bg-gray-300 mt-2 rounded w-2/4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h2 className="text-center text-red-500 text-xl">{error}</h2>;
  }

  return (
    <section className="px-4 py-24 mx-auto max-w-3xl font-montserrat">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="border border-gray-300 rounded-xl p-6 shadow-lg">
         {quote.Image && quote.Image.length > 0 ? (
          <img
            src={quote.Image[0].url}
            alt={quote.Title}
            className="object-cover w-full h-72 rounded-xl mb-5"
          />
        ) : (
          <div className="w-full h-72 bg-base-200 rounded-xl flex items-center text-center justify-center mb-5">
            <span className="sm:text-3xl text-xl font-bold ">{quote.Title}</span>
          </div>
        )}

        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={updatedQuote.Title}
              onChange={(e) =>
                setUpdatedQuote({ ...updatedQuote, Title: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
              placeholder="Sarlavha"
            />
            <input
              type="text"
              value={updatedQuote.Author}
              onChange={(e) =>
                setUpdatedQuote({ ...updatedQuote, Author: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
              placeholder="Muallif"
            />
            <textarea
              value={updatedQuote.Description}
              onChange={(e) =>
                setUpdatedQuote({
                  ...updatedQuote,
                  Description: e.target.value,
                })
              }
              className="w-full border p-2 rounded-lg"
              placeholder="Tavsif"
            />
            <input
              type="text"
              value={updatedQuote.Image}
              onChange={(e) =>
                setUpdatedQuote({ ...updatedQuote, Image: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
              placeholder="Rasm URL"
            />
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Saqlash
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Bekor qilish
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="sm:text-2xl text-xl font-extrabold mb-4">{quote.Title}</h1>
            <h2 className="text-xl font-medium mb-4">
              {quote.Author}
            </h2>
            <p className="text-gray-600">{quote.Description}</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Tahrirlash
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                disabled={isDeleting}
              >
                {isDeleting ? "O‘chirilmoqda..." : "O‘chirish"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Iqtibos;
