import React, { useState } from 'react';

function InputItem({ addItem }) {
  const [inputValue, setInputValue] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = () => {
    addItem({ name: inputValue, quantity: parseInt(quantity, 10) });
    setInputValue(''); // Limpiar la entrada
    setQuantity(1); // Reiniciar la cantidad
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Agregar ítem"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Cantidad"
        min="1"
      />
      <button onClick={handleAddClick}>Agregar</button>
    </div>
  );
}

export default InputItem;