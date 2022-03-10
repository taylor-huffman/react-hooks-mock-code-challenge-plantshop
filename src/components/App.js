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
    console.log(newPlant)
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

  const displayPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={displayPlants} handleAddNewPlant={handleAddNewPlant} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
