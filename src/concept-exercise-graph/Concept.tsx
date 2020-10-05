import React from 'react'
import { CompleteIcon } from './CompleteIcon'

import { IConcept, ConceptState } from './concept-types'

export const Concept = ({
  index,
  slug,
  conceptExercise,
  uuidOfExercise,
  status,
  handleEnter,
  handleLeave,
  isActive,
  isDimmed,
  adjacentConcepts,
}: IConcept & {
  isActive: boolean
  isDimmed: boolean
  adjacentConcepts: string[]
}) => {
  const name = slugToTitlecase(slug)

  let classes = 'card'
  classes += ` card-${status}`
  classes += isActive ? ' card-active' : ''
  classes += isDimmed ? ' dim' : ''
  adjacentConcepts.forEach((adjacentConcept: string): void => {
    classes += ` adjacent-to-${adjacentConcept}`
  })

  return (
    <section
      id={conceptSlugToId(slug)}
      className={classes}
      data-concept-slug={slug}
      data-concept-exercise={conceptExercise}
      data-concept-status={status}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="display">
        <div className="name">{name}</div>
        <CompleteIcon show={ConceptState.Completed === status} />
      </div>
    </section>
  )
}

function slugToTitlecase(slug: string): string {
  return slug
    .split('-')
    .map((part) => part[0].toUpperCase() + part.substr(1))
    .join(' ')
}

export function conceptExerciseSlugToId(slug: string): string {
  return `concept-exercise-${slug}`
}

export function conceptSlugToId(slug: string): string {
  return `concept-${slug}`
}
