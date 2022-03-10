import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleAddNewPlant, search, setSearch }) {
  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
