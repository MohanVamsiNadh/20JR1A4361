import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TrainInfo = ({ trainData }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="bg-black shadow-lg rounded-lg p-6 space-y-4 text-center text-gray-800">
      <p className="text-yellow-100">
          Train ID: {trainData?.trainNumber}
        </p>
        <h2 className="text-yellow-100">Train Name: {trainData?.trainName}</h2>
        <p className="text-yellow-100">
          Delayed By Minutes: {trainData?.delayedBy}
        </p>
        <p className="text-yellow-100">
          Departure Time: {trainData?.departureTime.Hours}:{trainData?.departureTime.Minutes}
        </p>
        <p className="text-yellow-100">
        Sleeper Seats Available: {trainData?.seatsAvailable.sleeper}
        </p>
        <p className="text-yellow-100">
         AC Seats Available: {trainData?.seatsAvailable.AC}
        </p>
        <p className="text-yellow-100">
          Sleeper Cost: {trainData?.price.sleeper}
        </p>
        <p className="text-yellow-100">
          AC Cost: {trainData?.price.AC}
        </p>
        
      </div>
    </div>
  );
};

function SpecificTrainData() {
  const [trainData, setTrain] = useState(null);
  const { id } = useParams();

  const getTrain = () => {
    axios.get(`http://localhost:5000/train/trains/${id}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error('Error', error.message);
      });
  };

  useEffect(() => {
    getTrain();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4 text-red-500">Particular Train Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <TrainInfo trainData={trainData} />
      </div>
    </div>
  );
}

export default SpecificTrainData;
