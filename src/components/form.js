import React, { useState } from 'react';

function Form({ onAddHog }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedalAchieved, setHighestMedalAchieved] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHog = {
      id: Date.now(),
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      highestMedalAchieved,
      image,
    };

    onAddHog(newHog);
    setName('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedalAchieved('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      
      <label>Specialty:</label>
      <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
      
      <label>Weight:</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      
      <label>Greased:</label>
      <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />
      
      <label>Highest Medal Achieved:</label>
      <input type="text" value={highestMedalAchieved} onChange={(e) => setHighestMedalAchieved(e.target.value)} />
      
      <label>Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default Form;
