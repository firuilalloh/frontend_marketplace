import { useEffect, useState } from "react";
import api from "../lib/axios";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await api.get("menu");
        // console.log("Data dari API:", res.data);
        if (Array.isArray(res.data.data)) {
          setFoods(res.data.data);
        } else {
          console.warn("Data bukan array:", res.data);
          setFoods([]);
        }
      } catch (err) {
        console.error("Gagal fetch data:", err);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Menu Makanan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white/80 backdrop-blur-md shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {food.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{food.name}</p>
              <p className="mt-3 font-bold text-[#00B3AB]">{food.category}</p>
              <p className="mt-3 font-bold text-[#00B3AB]">${food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
