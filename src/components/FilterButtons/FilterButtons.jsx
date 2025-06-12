import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ items, activeItem, onChange, isCategory }) => {
  return (
    <div className={`filter-buttons ${isCategory ? 'category-buttons' : ''}`}>
      {items.map(item => (
        <button
          key={item}
          className={`filter-button ${activeItem === item ? 'active' : ''}`}
          onClick={() => onChange(item)}
        >
          {isCategory ? (
            <>
              {item === 'chai' && 'Chai'}
              {item === 'snacks' && 'Snacks'}
              {item === 'combos' && 'Combos'}
              {item === 'all' && 'All Items'}
            </>
          ) : (
            item
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;