import React from 'react'
import './App.css'

import { data2 as data } from './data/index'
import { ConceptsMap } from './concepts-map/ConceptsMap'

function App() {
  return (
    <ConceptsMap
      concepts={data.concepts}
      levels={data.levels}
      connections={data.connections}
    />
  )
}

export default App
