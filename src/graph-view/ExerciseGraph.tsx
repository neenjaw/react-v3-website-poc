import React, { useRef } from 'react'

import { Exercise } from './Exercise'
import { ExerciseConnections } from './ExerciseConnections'

import { ExerciseLayersData } from './exercise-types'

import './ExerciseGraph.css'

/**
 * TODO:
 * - make use canvas in the exercise component
 */

interface IExerciseGraph {
  exerciseLayers: ExerciseLayersData
}

export const ExerciseGraph = ({ exerciseLayers }: IExerciseGraph) => {
  console.log({ exerciseLayers })

  const connectionsEl = useRef(null)

  return (
    <>
      <ExerciseConnections ref={connectionsEl} />
      <div className="exercise__track">
        {exerciseLayers.map((layerData, i) => (
          <div key={`layer-${i}`} className="exercise__layer">
            {layerData.map((exerciseData) => (
              <Exercise
                key={exerciseData.slug}
                data={exerciseData}
                connectionHandler={connectionsEl}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
