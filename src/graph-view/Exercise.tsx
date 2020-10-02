import React, { useState } from 'react'
import { ExerciseCompleteIcon } from './ExerciseCompleteIcon'

import { Exercise as IExercise } from './exercise-types'

import './Exercise.css'

export const Exercise = ({
  index,
  slug,
  concepts,
  prerequisites,
  status,
}: IExercise) => {
  const name = deslugify(slug)
  const [isActive, setActive] = useState(false)

  let classes = 'exercise-card'
  classes += ` exercise-card-${status}`
  classes += isActive ? ' exercise-card-active' : ''

  return (
    <div
      id={slugToId(slug)}
      className={classes}
      data-exercise-slug={slug}
      data-exercise-status={status}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="exercise-display">
        <div className="exercise-display-name">{name}</div>
        <ExerciseCompleteIcon show={false} />
      </div>
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
