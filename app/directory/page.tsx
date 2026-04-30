const locations = [
  {
    name: "Library",
    building: "Main Building",
    floor: "Ground Floor",
    description: "Quiet study spaces, book loans, and computer access.",
  },
  {
    name: "Student Services",
    building: "Admin Block",
    floor: "First Floor",
    description: "Support for registration, fees, and general student help.",
  },
  {
    name: "Canteen",
    building: "Student Centre",
    floor: "Ground Floor",
    description: "Food, drinks, and seating areas.",
  },
];

export default function Directory() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Campus Directory</h1>
      <p>Find useful campus locations and services.</p>

      <ul>
        {locations.map((location) => (
          <li key={location.name} style={{ marginBottom: "1rem" }}>
            <h2>{location.name}</h2>
            <p>Building: {location.building}</p>
            <p>Floor: {location.floor}</p>
            <p>{location.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}