// src/components/ItemList.js
import React from 'react';
import Card from './Card';

const ItemList = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
      <Card key={item.id}>
        <h2 className="text-xl font-bold">{item.title}</h2>
        <p>{item.description}</p>
      </Card>
    ))}
  </div>
);

export default ItemList;
