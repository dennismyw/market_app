import { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/names"); // Replace "/api/names" with your actual API endpoint
        const data = response.data;
        setNames(data);
      } catch (error) {
        console.error("Error fetching names:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Names:</h2>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
