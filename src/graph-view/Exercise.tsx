import React from 'react'
import { ExerciseCompleteIcon } from './ExerciseCompleteIcon'

import { Exercise as IExercise, ExerciseState } from './exercise-types'

import './Exercise.css'

export const Exercise = ({
  index,
  slug,
  concepts,
  prerequisites,
  status,
  isActive,
  handleEnter,
  handleLeave,
}: IExercise & { isActive: boolean }) => {
  const name = deslugify(slug)

  let classes = 'exercise-card'
  classes += ` exercise-card-${status}`
  classes += isActive ? ' exercise-card-active' : ''

  return (
    <section
      id={slugToId(slug)}
      className={classes}
      data-exercise-slug={slug}
      data-exercise-status={status}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="exercise-display">
        <div className="exercise-display-name">{name}</div>
        <ExerciseCompleteIcon show={ExerciseState.Completed === status} />
      </div>
    </section>
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
