// src/components/ItemDetail.jsx
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ nombre, precio, categoria, descripcion }) => {
  return (
    <div style={{
      background: '#161628',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(136, 0, 255, 0.5)',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '2rem',
        color: '#8800ff',
        textShadow: '0 0 10px rgba(136, 0, 255, 0.8)'
      }}>{nombre}</h3>
      <p style={{ color: '#d1d1e0' }}>Categoría: {categoria}</p>
      <p style={{ color: '#b3b3cc' }}>Precio: ${precio}</p>
      <p style={{ margin: '20px 0', fontStyle: 'italic', color: '#b3b3cc' }}>{descripcion}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;