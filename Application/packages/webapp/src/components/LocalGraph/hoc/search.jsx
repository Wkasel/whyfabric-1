import React from 'react';
import { GraphContext } from '../contexts';

const GraphSearch = () => {
  const { searchTerm, handleInputChange, handleSubmit } = useGraphSearch();
  return (
    <>
      <Input
        value={(value || {}).name || searchString}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 200)}
        placeholder={placeholder}
      />

      {isLoading && <span>Loading...</span>}

      {showOptions && (
        <Options>
          {locations.map((item, id) => (
            <Option key={id} onClick={() => onChange(item)}>
              {item.name}
            </Option>
          ))}
        </Options>
      )}
    </>
  );
};

const withGraph = (Component) => {
  const GraphedComponent = () => {
    return <GraphContext.Consumer />;
  };
};
