import React, { useEffect } from 'react'

import { ExerciseData } from './exercise-types'

import './Exercise.css'

export interface IExercise {
  data: ExerciseData
  connectionHandler: any
}

// TODO - on load, should register with the canvas to have its lines drawn
// TODO - on hover, should change state from active to inactive
// TODO - for different states (locked, unlocked, complete, etc) should change the appearance

export const Exercise = ({ data, connectionHandler }: IExercise) => {
  const exerciseName = deslugify(data.slug)
  const unlocked = true
  const status = 'Available'

  useEffect(() => {
    const currentConnectionHandler = connectionHandler.current
    if (!currentConnectionHandler) {
      return
    }

    currentConnectionHandler.addExerciseLines(data.slug, [
      ...data.prerequisites,
    ])

    return () => {
      if (!currentConnectionHandler) {
        return
      }
    }
  }, [connectionHandler, data.slug, data.prerequisites])

  return (
    <div className="exercise__card" data-exercise-slug="">
      <div className="exercise__display">
        <div className="exercise__display-name">{exerciseName}</div>
        <div className="exercise__display-stats"></div>
      </div>
      {unlocked && <div className="exercise__status">{status}</div>}
    </div>
  )
}

function deslugify(slug: string): string {
  return slug
    .split('-')
    .map((part) => part[0].toUpperCase() + part.substr(1))
    .join(' ')
}
