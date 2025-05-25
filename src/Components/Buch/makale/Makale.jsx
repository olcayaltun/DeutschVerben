// src/components/Makale.jsx
import React, { useState } from "react";
import Makale1 from "./Makale11";
import Makale2 from "./Makale2";
import Makale3 from "./Makale3";
import Makale4 from "./Makale4";
import Makale5 from "./Makale5";

const Makale = () => {
  // Aktif makale ID'sini tutmak için state
  const [activeArticle, setActiveArticle] = useState(1);

  // Makale bileşenlerini bir obje içinde tanımla
  const articles = [
    { id: 1, component: <Makale1 />, title: "Makale 1" },
    { id: 2, component: <Makale2 />, title: "Makale 2" },
    { id: 3, component: <Makale3 />, title: "Makale 3" },
    { id: 4, component: <Makale4 />, title: "Makale 4" },
    { id: 5, component: <Makale5 />, title: "Makale 5" },
  ];

  // Aktif makale bileşenini bul
  const currentArticle = articles.find(
    (article) => article.id === activeArticle
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Makale Okuyucu</h1>

      {/* Butonlar */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {articles.map((article) => (
          <button
            key={article.id}
            onClick={() => setActiveArticle(article.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              activeArticle === article.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {article.title}
          </button>
        ))}
      </div>

      {/* Makale İçeriği */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        {currentArticle.component}
      </div>
    </div>
  );
};

export default Makale;
