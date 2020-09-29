import React, { useEffect } from 'react'
import {
  addExercisePaths,
  removeExercisePaths,
} from '../hooks/useExercisePathStore'

import { ExerciseState, ExerciseData } from './exercise-types'

import './Exercise.css'

// TODO - on hover, should change state from active to inactive
// TODO - for different states (locked, unlocked, complete, etc) should change the appearance

export const Exercise = ({ data }: { data: ExerciseData }) => {
  const exerciseName = deslugify(data.slug)
  const active = false
  const status = data.status ?? ExerciseState.Locked

  useEffect(() => {
    addExercisePaths(data.slug, [...data.prerequisites], active)
    return () => {
      removeExercisePaths(data.slug)
    }
  }, [data.prerequisites, data.slug, active])

  return (
    <div
      className={`exercise__card ${active ? 'active_exercise' : ''}`}
      data-exercise-slug={data.slug}
      data-exercise-status={status}
    >
      <div className="exercise__display">
        <div className="exercise__display-name">{exerciseName}</div>
        <div className="exercise__display-stats"></div>
      </div>
      {/* render another component here for the status */}
    </div>
  )
}

function deslugify(slug: string): string {
  return slug
    .split('-')
    .map((part) => part[0].toUpperCase() + part.substr(1))
    .join(' ')
}
