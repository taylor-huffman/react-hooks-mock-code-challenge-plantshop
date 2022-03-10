import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleAddNewPlant, search, setSearch, handlePriceChange, handleDeleteItem }) {
  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} handlePriceChange={handlePriceChange} handleDeleteItem={handleDeleteItem} />
    </main>
  );
}

export default PlantPage;
