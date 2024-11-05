import React, { useState } from 'react';
import './App.css';
import porkersData from './porkers_data'; // Your data file
import HogList from './HogList';
import Nav from './Nav';
import Form from './Form';

function App() {
  const [hogs, setHogs] = useState(porkersData); // Original hog data
  const [filteredHogs, setFilteredHogs] = useState(porkersData); // Filtered hog data
  const [sortOption, setSortOption] = useState(''); // Sort by name or weight
  const [showGreasedOnly, setShowGreasedOnly] = useState(false); // Show greased only

  // Function to handle greased filter
  const handleGreasedFilter = () => {
    setShowGreasedOnly(!showGreasedOnly);
  };

  // Function to handle sorting based on name or weight
  const handleSortChange = (option) => {
    setSortOption(option);
    const sortedHogs = [...filteredHogs].sort((a, b) => {
      if (option === 'name') {
        return a.name.localeCompare(b.name); // Sort by name
      } else if (option === 'weight') {
        return a.weight - b.weight; // Sort by weight
      }
      return 0;
    });
    setFilteredHogs(sortedHogs);
  };

  // Filter the hogs based on greased
  const filterHogs = () => {
    let filtered = hogs;
    if (showGreasedOnly) {
      filtered = filtered.filter(hog => hog.greased);
    }
    if (sortOption) {
      filtered = filtered.sort((a, b) => {
        if (sortOption === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortOption === 'weight') {
          return a.weight - b.weight;
        }
        return 0;
      });
    }
    setFilteredHogs(filtered);
  };

  // Handle adding a new hog
  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
    setFilteredHogs([...hogs, newHog]); // Update the filtered hog list as well
  };

  // Re-filter when showGreasedOnly or sortOption changes
  React.useEffect(() => {
    filterHogs();
  }, [showGreasedOnly, sortOption]);

  return (
    <div className="App">
      <Nav 
        onGreasedFilter={handleGreasedFilter}
        onSortChange={handleSortChange}
      />
      <HogList hogs={filteredHogs} />
      <Form onAddHog={handleAddHog} />
    </div>
  );
}

export default App;
