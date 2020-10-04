import React from 'react'
import './styles/tailwind.css'
import './App.css'

import { data } from './graph-data/data'
import { ConceptGraph } from './concept-exercise-graph/ConceptGraph'

function App() {
  return (
    <ConceptGraph
      concepts={data.concepts}
      layout={data.layout}
      connections={data.connections}
    />
  )
}

export default App
