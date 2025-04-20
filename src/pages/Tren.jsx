import React, { useState } from "react";
import germanVerbs from "../utils/germanVerbs";

const VerbCard = ({ verb, meaning, prefixes, isSelected, onClick }) => {
  return (
    <div
      className={`p-4 mb-3 rounded-lg cursor-pointer transition-all 
        ${
          isSelected
            ? "bg-blue-100 border-l-4 border-blue-500"
            : "bg-gray-50 hover:bg-gray-100"
        }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-gray-800">
          {verb} <span className="text-gray-600 font-normal">- {meaning}</span>
        </h3>
        <span className="text-sm text-gray-500">
          {Object.keys(prefixes).length} prefix
        </span>
      </div>

      {isSelected && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Prefixli Halleri:
          </h4>
          <div className="space-y-2">
            {Object.entries(prefixes).map(([prefixVerb, prefixMeaning]) => (
              <div key={prefixVerb} className="flex">
                <span className="font-medium text-gray-900 w-1/3">
                  {prefixVerb}
                </span>
                <span className="text-gray-700 flex-1">{prefixMeaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Tren = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVerb, setSelectedVerb] = useState(null);

  const filteredVerbs = Object.entries(germanVerbs).filter(([verb, data]) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      verb.toLowerCase().includes(searchLower) ||
      data.meaning.toLowerCase().includes(searchLower) ||
      Object.keys(data.prefixes).some((prefix) =>
        prefix.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Almanca Fiiller ve Prefixleri
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Fiil, anlamı veya prefix ara..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filteredVerbs.length > 0 ? (
          filteredVerbs.map(([verb, { meaning, prefixes }]) => (
            <VerbCard
              key={verb}
              verb={verb}
              meaning={meaning}
              prefixes={prefixes}
              isSelected={selectedVerb === verb}
              onClick={() =>
                setSelectedVerb(selectedVerb === verb ? null : verb)
              }
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            Sonuç bulunamadı. Farklı bir arama terimi deneyin.
          </div>
        )}
      </div>
    </div>
  );
};

export default Tren;
