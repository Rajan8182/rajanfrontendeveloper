import React from 'react';
import DataContext from './DataContext';
import ChildComponent from './ChildComponent';

function ParentComponent() {

  const data = 'Raju';

  return (<>
  
  <h1 className="heading">This is Parent Component</h1>

    <DataContext.Provider  value={data}  >
      <ChildComponent/>
    </DataContext.Provider>
  </>
  );
}

export default ParentComponent;