  import { useState } from "react";
  import quotesData from "../data/quotesData"; // Quotes listni import qilish

  function Create({ setQuotes }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      const newQuote = {
        id: quotesData.length + 1, // IDni avtomatik yaratish
        title,
        description,
        author,
        image: image || "https://picsum.photos/400/300", // Agar rasm kiritilmasa, default rasm
        date: new Date().toLocaleDateString(),
      };

      quotesData.push(newQuote); // Quotes listga qo'shish
      setQuotes([...quotesData]); // State-ni yangilash

      console.log("Yangi iqtibos qo‘shildi:", newQuote);
      setTitle("");
      setDescription("");
      setAuthor("");
      setImage("");
    };

    return (
      <section className="px-4 py-24 mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Yangi Iqtibos Qo‘shish</h2>
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
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Saqlash
          </button>
        </form>
      </section>
    );
  }

  export default Create;
