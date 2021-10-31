import React from 'react';
import './event-list.css';

const EventList = ({ items }) => {

    return (
        <div className='section-center'>
            {items.map((eventItem)=>{
                const {id, name, date, image} = eventItem;
                return <article key={id} className="menu-item">
                    
                    <b4>{name} on {date}</b4>
                    <img src={image} alt={name} className='photo' />
                </article>
            })}
        </div>
    )


};

export default EventList