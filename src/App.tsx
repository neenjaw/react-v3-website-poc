import React from 'react'
import './App.css'

// import { data1 as data } from './data/index'
import { data } from './data/index'
import { ConceptMap } from './concept-map/ConceptMap'

function App() {
  return (
    <ConceptMap
      concepts={data.concepts}
      levels={data.levels}
      connections={data.connections}
      status={data.status}
    />
  )
}

export default App
