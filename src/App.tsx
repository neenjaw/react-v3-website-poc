import React from 'react'
import './App.css'

import { data } from './graph-view/data'
import { ExerciseGraph } from './graph-view/ExerciseGraph'

function App() {
  return (
    <div className="App">
      <ExerciseGraph
        exercises={data.exercises}
        layout={data.layout}
        connections={data.connections}
      />
    </div>
  )
}

export default App
