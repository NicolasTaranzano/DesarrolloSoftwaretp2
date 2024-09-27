import React, { useState } from 'react';
import InputItem from './components/InputItem';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  // Agregar un ítem con nombre y cantidad
  const addItem = (newItem) => {
    if (newItem.name.trim() && newItem.quantity > 0) {
      setItems([...items, { ...newItem, isBought: false }]); // Agregar propiedad isBought
    }
  };

  // Eliminar un ítem
  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Editar un ítem
  const editItem = (index, updatedItem) => {
    const newItems = items.map((item, i) => (i === index ? updatedItem : item));
    setItems(newItems);
  };

  // Marcar un ítem como comprado
  const toggleBought = (index) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, isBought: !item.isBought }; // Cambia el estado de isBought
      }
      return item;
    });

    // Mover los ítems comprados al final
    const boughtItems = newItems.filter(item => item.isBought);
    const notBoughtItems = newItems.filter(item => !item.isBought);
    setItems([...notBoughtItems, ...boughtItems]); // Primero los no comprados, luego los comprados
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>
      <InputItem addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} editItem={editItem} toggleBought={toggleBought} />
    </div>
  );
}

export default App;


