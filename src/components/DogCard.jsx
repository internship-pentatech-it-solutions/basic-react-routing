import { useState, useEffect } from "react";

const DogCard = () => {
  const [DogsData, SetDogsData] = useState({});
  const [Loading, SetLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch new dog data
  const FetchDogsData = async () => {
    try {
      const response = await fetch(`https://randomfox.ca/floof/`);
      let DogsData = await response.json();
      SetDogsData(DogsData);
    } catch (error) {
      setError("Error fetching data");
      SetDogsData(null);
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    FetchDogsData();
  }, []);

  const HandleRandomChange = () => {
    SetLoading(true); // Show loading state while fetching new data
    FetchDogsData(); // Fetch new dog data when button is clicked
  };

  if (Loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      Random Dog
      <div className="max-w-96 mb-8">
        {DogsData.image && (
          <img
            className="w-full h-[250px] object-cover"
            src={DogsData.image}
            alt="random dog"
          />
        )}
      </div>
      <button onClick={HandleRandomChange} className="bg-blue-600 rounded">
        Get Random Dog
      </button>
    </div>
  );
};

export default DogCard;
