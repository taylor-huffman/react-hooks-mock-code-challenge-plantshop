import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handlePriceChange, handleDeleteItem }) {
  return (
    <ul className="cards">{plants.map(plant => {
      return <PlantCard key={plant.id} plant={plant} handlePriceChange={handlePriceChange} handleDeleteItem={handleDeleteItem} />
    })}</ul>
  );
}

export default PlantList;
