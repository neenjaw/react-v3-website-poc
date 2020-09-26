import React from 'react'
import './App.css'
import './graph-view/Graph.css'

import { data } from './graph-view/data'
import { ExerciseGraph } from './graph-view/ExerciseGraph'

function App() {
  return (
    <div className="App">
      <ExerciseGraph exerciseLayers={data} />
    </div>
  )
}

export default App
