import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleAddNewPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(plant => setPlants([...plants, plant]))
  }

  function handlePriceChange(updatedPlant) {
    fetch(`http://localhost:6001/plants/${updatedPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(updatedPlant.price) })
    })
    .then(r => r.json())
    .then(() => {
      const p = plants.filter(plant => plant.id !== updatedPlant.id)
      setPlants([...p, updatedPlant].sort((a, b) => {
        return a.id - b.id
      }))
    })
  }

  function handleDeleteItem(deletePlant) {
    fetch(`http://localhost:6001/plants/${deletePlant.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => setPlants(plants => {
      return plants.filter(plant => plant.id !== deletePlant.id)
    }))
  }

  const displayPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={displayPlants} handleAddNewPlant={handleAddNewPlant} search={search} setSearch={setSearch} handlePriceChange={handlePriceChange} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
