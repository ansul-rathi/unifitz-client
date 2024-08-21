import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../component/AuthContextProvider";
import Swal from "sweetalert2";

const Track = () => {
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [weight, setWeight] = useState("");
  const [fat, setFat] = useState("");
  const [bmi, setBMI] = useState("");
  const [postdate, setPostDate] = useState("");
  const [fitData, setFitData] = useState([]);
  const [btn, setBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const { filter } = useContext(AuthContext);

  useEffect(() => {
    filter &&
      filter[0] &&
      filter[0].id &&
      fetch(`https://healthandfitness.onrender.com/data/${filter[0].id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userdata: fitData }),
      });
  }, [fitData, filter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let obj = {
      id: Math.floor(Math.random() * 100),
      workout_name: name,
      activity: activity,
      weight: weight,
      fat: fat,
      bmi: bmi,
      date: postdate,
    };

    setFitData([...fitData, obj]);
    Swal.fire({
      position: "top-mid",
      icon: "success",
      title: "Your Data has been Added.",
      showConfirmButton: false,
      timer: 1500,
    });
    setBtn(false);
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Your <span className="text-indigo-600">fitness</span> Dashboard
      </h1>
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        Add <span className="text-indigo-600">Data</span>
        <button
          id="addnotice-btn"
          onClick={() => setBtn(!btn)}
          className="ml-4 w-10 h-10 rounded-full text-3xl text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          {btn ? "x" : "+"}
        </button>
      </h2>
      <div
        className={`model ${
          btn ? "flex" : "hidden"
        } flex-col items-center justify-center`}
      >
        <div className="bg-white rounded-lg shadow-md p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Workout name:
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Activity:
              </label>
              <select
                name="type"
                onChange={(e) => setActivity(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-indigo-600 rounded-md"
              >
                <option value="">Select Activity Type</option>
                <option value="cardiovascular_exercise">
                  Cardiovascular exercise
                </option>
                <option value="strength_training">Strength training</option>
                <option value="group_fitness_classes">
                  Group fitness classes
                </option>
                <option value="High_intensity_interval_training">
                  High-intensity interval training
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Body Weight:
              </label>
              <input
                type="number"
                name="Weight"
                onChange={(e) => setWeight(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Body Fat:
              </label>
              <input
                type="number"
                name="body_fat"
                onChange={(e) => setFat(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Heart Rate:
              </label>
              <input
                type="number"
                name="bmi"
                onChange={(e) => setBMI(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date:
              </label>
              <input
                type="date"
                data-testid="date"
                onChange={(e) => setPostDate(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-indigo-600 rounded-md"
              />
            </div>
            <div className="text-center">
              <input
                id="btn"
                type="submit"
                value="Submit"
                className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-2 px-4">Workout Name</th>
              <th className="py-2 px-4">Activity</th>
              <th className="py-2 px-4">Body Weight</th>
              <th className="py-2 px-4">Body Fat %</th>
              <th className="py-2 px-4">Heart Rate</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {fitData.map((el) => (
              <tr
                key={el.id}
                className="even:bg-gray-100 text-center border-b border-gray-200"
              >
                <td className="py-2 px-4">{el.workout_name}</td>
                <td className="py-2 px-4">{el.activity}</td>
                <td className="py-2 px-4">{el.weight} Kg</td>
                <td className="py-2 px-4">{el.fat}%</td>
                <td className="py-2 px-4">{el.bmi} BPM</td>
                <td className="py-2 px-4">{el.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Track;
