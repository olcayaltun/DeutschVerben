import React, { useState } from "react";

function WordNode({ word, onDiscover }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setTimeout(() => {
      setIsRevealed(false);
      onDiscover(word);
    }, 100);
  };

  return (
    <div className="word-node" onClick={handleReveal} onTouchEnd={handleReveal}>
      {isRevealed ? (
        <div className="revealed">
          {word.img && (
            <img src={word.img} alt={word.fiil} className="word-img" />
          )}
          <p>
            <strong>{word.fiil}</strong>
          </p>
          <p>{word.anlam}</p>
          <p>{word.cumle}</p>
        </div>
      ) : (
        <div className="hidden">?</div>
      )}
    </div>
  );
}

export default WordNode;
