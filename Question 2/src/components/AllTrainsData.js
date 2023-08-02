
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const TrainTableInfo = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-yellow-200">
          <th className="px-4 py-2">Train ID</th>
            <th className="px-4 py-2">Train Name</th>
            <th className="px-4 py-2">Departure Time</th>
            <th className="px-4 py-2">Delayed By Minutes</th>
            <th className="px-4 py-2">Sleeper Seats Available</th>
            <th className="px-4 py-2">AC Seats Available</th>
            <th className="px-4 py-2">Sleeper Cost</th>
            <th className="px-4 py-2">AC Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((train, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}>
              <td className="border px-4 py-2 text-blue-900 underline" >  <Link to={ `/${train.trainNumber}  `} >{train.trainNumber}  </Link>   </td>
              <td className="border px-4 py-2">{train.trainName}</td>
              <td className="border px-4 py-2">{train.departureTime.Hours}:{train.departureTime.Minutes}</td>
              <td className="border px-4 py-2">{train.delayedBy}</td>
              <td className="border px-4 py-2">{train.seatsAvailable.sleeper}</td>
              <td className="border px-4 py-2">{train.seatsAvailable.AC}</td>
              <td className="border px-4 py-2">{train.price.sleeper}</td>
              <td className="border px-4 py-2">{train.price.AC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


function AllTrainsData(){
    const [trains, setTrains] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/train/trains')
          .then(response => {
            setTrains(response.data);
            console.log(trains)
          })
          .catch(error => {
            console.error('Error ', error.message);
          });
      }, []);
    return (
        <div>
        <center>
          <h1 className='text-4xl font-bold mb-4 text-red-500'> Available Trains Information </h1>
        </center>
        
        <div className="container mx-auto p-4">
      <TrainTableInfo data={trains} />
    </div>
      </div>
    )
}

export default AllTrainsData