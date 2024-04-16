// Items.js
import React, { useState } from 'react';
import useItemStore from './Zustand/Store';

const UserList = () => {
  const { items, addItem, updateItem, removeItem } = useItemStore();
  const [newItemText, setNewItemText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editItemText, setEditItemText] = useState('');

  const handleAddItem = () => {
    if (newItemText.trim() !== '') {
      addItem(newItemText);
      setNewItemText('');
    }
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditItemText(items[index]);
  };

  const handleUpdateItem = () => {
    if (editItemText.trim() !== '') {
      updateItem(editIndex, editItemText);
      setEditIndex(null);
      setEditItemText('');
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editItemText}
                  onChange={(e) => setEditItemText(e.target.value)}
                />
                <button onClick={handleUpdateItem}>Update</button>
              </div>
            ) : (
              <div>
                {item}
                <button onClick={() => handleEditItem(index)}>Edit</button>
                <button onClick={() => removeItem(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
};

export default UserList;
