import React, { useState } from "react";

function PlantCard({ plant, handlePriceChange, handleDeleteItem }) {

  const {name, image, price} = plant

  const [inStock, setInStock] = useState(true)
  const [editStatus, setEditStatus] = useState(true)
  const [priceInput, setPriceInput] = useState(price)

  function handleStockChange() {
    setInStock(inStock => !inStock)
  }

  function handleEditClick() {
    setEditStatus(editStatus => !editStatus)
  }

  function handlePriceInput(value) {
    setPriceInput(value)
  }

  function handleSaveClick() {
    const updatedPlant = {...plant, price: priceInput}
    setEditStatus(editStatus => !editStatus)
    handlePriceChange(updatedPlant)
  }

  function handleDeleteClick() {
    handleDeleteItem(plant)
  }

  return (
    <li className="card">
      <button onClick={handleDeleteClick} className="delete-item">Delete Item</button>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {editStatus ?
        <p>Price: {priceInput}</p> :
        <div className="price-edit">
          <p>Price: </p>
          <input type='number' step="0.01" onChange={(e) => handlePriceInput(e.target.value)} value={priceInput}></input>
        </div>
      }
      <div className="button-block">
        {inStock ? (
          <button onClick={handleStockChange} className="primary">In Stock</button>
        ) : (
          <button onClick={handleStockChange}>Out of Stock</button>
        )}
        {editStatus ? <button onClick={handleEditClick}>Edit Price</button> : <button onClick={handleSaveClick}>Save</button>}
      </div>
    </li>
  );
}

export default PlantCard;
