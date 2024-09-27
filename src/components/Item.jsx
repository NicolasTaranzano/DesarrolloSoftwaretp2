import React, { useState } from 'react';

function Item({ item, deleteItem, editItem, toggleBought }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [newQuantity, setNewQuantity] = useState(item.quantity);

  const handleSaveClick = () => {
    editItem({ name: newName, quantity: newQuantity, isBought: item.isBought });
    setIsEditing(false);
  };

  return (
    <li className={isEditing ? 'editing' : ''}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
            min="1"
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <span style={{ textDecoration: item.isBought ? 'line-through' : 'none' }}>
          {item.name} (Cantidad: {item.quantity})
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={deleteItem}>Eliminar</button>
          <button onClick={toggleBought}>
            {item.isBought ? 'Desmarcar' : 'Comprar'}
          </button>
        </span>
      )}
    </li>
  );
}

export default Item;
