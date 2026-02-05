import PlantCard from "./PlantCard";

export default function Plants({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}