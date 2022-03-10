import React, { useState } from "react";

function NewPlantForm({ handleAddNewPlant }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    handleAddNewPlant(formData)
    setFormData({
      name: '',
      image: '',
      price: '',
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" value={formData.image} placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" value={formData.price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
