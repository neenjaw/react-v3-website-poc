import React, { useState } from 'react'

import { Concept } from './Concept'
import { ConceptConnections } from './ConceptConnections'

import {
  IConcept,
  IConceptGraph,
  ConceptLayer,
  ConceptConnection,
} from './concept-types'

export const ConceptGraph = ({
  concepts,
  layout,
  connections,
}: IConceptGraph) => {
  const [active, setActive] = useState<string | null>(null)

  const conceptsBySlug = indexConceptsBySlug(concepts)
  const adjacentBySlug = indexAdjacentBySlug(connections)

  const adjacentConceptsToActive = new Set(
    Array.from(document.getElementsByClassName(`adjacent-to-${active}`)).map(
      (element) => (element as HTMLElement).dataset.conceptSlug
    )
  )

  return (
    <figure className="c-concept-graph">
      <ConceptConnections connections={connections} activeConcept={active} />
      <div className="track">
        {layout.map((layer: ConceptLayer, i: number) => (
          <div key={`layer-${i}`} className="layer">
            {layer.map((conceptSlug) => {
              const concept = conceptsBySlug.get(conceptSlug)
              const isDimmed =
                active !== null &&
                active !== concept?.slug &&
                !adjacentConceptsToActive.has(concept?.slug)

              // TODO: fix this error typescript error since it _may_ return undefined
              return !concept ? null : (
                <Concept
                  index={concept.index}
                  slug={concept.slug}
                  conceptExercise={concept.conceptExercise}
                  uuidOfExercise={concept.uuidOfExercise}
                  status={concept.status}
                  handleEnter={() => setActive(concept.slug)}
                  handleLeave={() => setActive(null)}
                  isActive={active === concept.slug}
                  isDimmed={isDimmed}
                  adjacentConcepts={adjacentBySlug.get(concept.slug) ?? []}
                />
              )
            })}
          </div>
        ))}
      </div>
    </figure>
  )
}

function indexConceptsBySlug(concepts: IConcept[]): Map<string, IConcept> {
  return concepts.reduce((memo, concept) => {
    memo.set(concept.slug, concept)
    return memo
  }, new Map<string, IConcept>())
}

type AdjacentIndex = Map<string, string[]>

function indexAdjacentBySlug(connections: ConceptConnection[]): AdjacentIndex {
  const addToIndex = (index: AdjacentIndex, from: string, to: string): void => {
    const list = index.get(from) ?? []
    list.push(to)
    index.set(from, list)
  }

  return connections.reduce((relatives, connection) => {
    addToIndex(relatives, connection.from, connection.to)
    addToIndex(relatives, connection.to, connection.from)
    return relatives
  }, new Map<string, string[]>())
}
