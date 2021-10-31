import React, { useState } from 'react';
import './app.css';
import CityMonth from '../city-month/city-month';
// import EvBlock from '../ev-block/ev-block';
import EvItem from '../ev-item/ev-item';
import City from '../city/city.js';
import EventList from '../event-list/event-list'
import items from './event';

const allCity = ['all', ...new Set(items.map((item) => item.city))];


function App() {
    const [eventItems, setEventItems] = useState(items);
    const [city, setCity] = useState(allCity);

    const filterItems = (city) => {
        if (city === 'all') {
          setEventItems(items);
          return;
        }
        const newItems = items.filter((item) => item.city === city);
        setEventItems(newItems);
      };

    return (
        <div className="app">
            <main>
                <h2>Event Listing</h2>
                <CityMonth/> 
                <EvItem/>
            </main>

            
            <h2>Event Listing</h2>
            <div>
                <City city={city} filterItems={filterItems}/>
                <EventList items={eventItems}/>
            </div>
            
           

        </div>

    )
}

export default App;