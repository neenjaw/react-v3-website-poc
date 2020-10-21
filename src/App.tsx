import React from 'react'
import './App.css'

import { data } from './data/index'
import { ConceptMap } from './concept-map/ConceptMap'

function App() {
  return (
    <ConceptMap
      concepts={data.graph.concepts}
      levels={data.graph.levels}
      connections={data.graph.connections}
      status={data.graph.status}
    />
  )
}

export default App
