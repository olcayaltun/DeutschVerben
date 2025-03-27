import React, { useState } from "react";
import almancaSorular from "../utils/Almancasorular";
// Soru verileri (almancaSorular.js dosyasından import edilebilir)

const SoruKartlari = () => {
  const [gosterilenIndex, setGosterilenIndex] = useState(null);

  const toggleAnlam = (index) => {
    setGosterilenIndex(gosterilenIndex === index ? null : index);
  };

  return (
    <div className="soru-listesi">
      {almancaSorular.map((soru, index) => (
        <div key={index} className="soru-karti">
          <h3>{soru.german}</h3>
          <button onClick={() => toggleAnlam(index)} className="goster-butonu">
            {gosterilenIndex === index ? "Anlamı Gizle" : "Anlamı Göster"}
          </button>
          {gosterilenIndex === index && <p className="anlam">{soru.turkish}</p>}
        </div>
      ))}
    </div>
  );
};

export default SoruKartlari;
