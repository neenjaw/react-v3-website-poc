import React from 'react'

import { Exercise } from './Exercise'
import { ExerciseConnections } from './ExerciseConnections'

import { ExerciseLayersData } from './exercise-types'

import './ExerciseGraph.css'

interface IExerciseGraph {
  exerciseLayers: ExerciseLayersData
}

export const ExerciseGraph = ({ exerciseLayers }: IExerciseGraph) => {
  console.log({ exerciseLayers })

  return (
    <>
      <ExerciseConnections />
      <div className="exercise-track">
        {exerciseLayers.map((layerData, i) => (
          <div key={`layer-${i}`} className="exercise-layer">
            {layerData.map((exerciseData) => (
              <Exercise key={exerciseData.slug} data={exerciseData} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
