import React from 'react'

import { Exercise } from './Exercise'
import { ExerciseConnections } from './ExerciseConnections'

import {
  Exercise as ExerciseType,
  ExerciseGraph as ExerciseGraphInterface,
  ExerciseLayer,
} from './exercise-types'

import './ExerciseGraph.css'

export const ExerciseGraph = ({
  exercises,
  layout,
  connections,
}: ExerciseGraphInterface) => {
  console.log({ exercises, layout, connections })

  const exercisesBySlug = exercises.reduce((memo, exercise) => {
    memo.set(exercise.slug, exercise)
    return memo
  }, new Map<string, ExerciseType>())

  return (
    <>
      <ExerciseConnections connections={connections} />
      <div className="exercise-track">
        {layout.map((layer: ExerciseLayer, i: number) => (
          <div key={`layer-${i}`} className="exercise-layer">
            {layer.map((exerciseSlug) => {
              const exercise = exercisesBySlug.get(exerciseSlug)

              // TODO: fix this error
              if (!exercise) return 'no exercise'

              return (
                <Exercise
                  key={exercise.index}
                  uuid={exercise.uuid}
                  index={exercise.index}
                  slug={exercise.slug}
                  concepts={exercise.concepts}
                  prerequisites={exercise.prerequisites}
                  status={exercise.status}
                />
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}
