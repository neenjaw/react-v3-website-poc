import React, { useEffect, useState } from 'react'
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
  const [isActive, setActive] = useState(false)
  const status = data.status ?? ExerciseState.Locked

  useEffect(() => {
    addExercisePaths(data.slug, [...data.prerequisites], isActive)
    return () => {
      removeExercisePaths(data.slug)
    }
  }, [data.prerequisites, data.slug, isActive])

  let classes = 'exercise-card'
  classes += ` exercise-card-${data.status}`
  classes += isActive ? ' exercise-card-active' : ''

  return (
    <div
      id={slugToId(data.slug)}
      className={classes}
      data-exercise-slug={data.slug}
      data-exercise-status={status}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="exercise-display">
        <div className="exercise-display-name">{exerciseName}</div>
        <div className="exercise-display-stats"></div>
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

export function slugToId(slug: string): string {
  return `concept-exercise-${slug}`
}
