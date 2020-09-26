import React from 'react'

import { ExerciseData } from './exercise-types'

export interface IExercise {
  data: ExerciseData
  canvas: HTMLCanvasElement | null
}

// TODO - on load, should register with the canvas to have its lines drawn
// TODO - on hover, should change state from active to inactive
// TODO - for different states (locked, unlocked, complete, etc) should change the appearance

export const Exercise = ({ data }: IExercise) => {
  const exerciseName = deslugify(data.slug)
  const unlocked = true
  const status = 'Available'

  return (
    <div className="exercise__card" data-exercise-slug="">
      <div className="exercise__display">
        <div className="exercise__display__name">{exerciseName}</div>
        <div className="exercise__display__stats"></div>
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
