import React from 'react';
import Item from './Item';

function ItemList({ items, deleteItem, editItem, toggleBought }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          deleteItem={() => deleteItem(index)}
          editItem={(updatedItem) => editItem(index, updatedItem)}
          toggleBought={() => toggleBought(index)} // Pasar la función toggleBought
        />
      ))}
    </ul>
  );
}

export default ItemList;
