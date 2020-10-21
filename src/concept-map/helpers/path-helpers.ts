import {
  ConceptPath,
  ConceptConnection,
  ConceptPathCoordinate,
  ConceptPathState,
  isConceptPath,
} from '../concept-connection-types'

import { ConceptStatus } from '../concept-types'

import { MountedConceptsRecord } from '../hooks/useMountedConcepts'

type CategorizedConceptPaths = {
  unavailable: ConceptPath[]
  available: ConceptPath[]
  completed: ConceptPath[]
}

export function mapToPaths(
  connections: ConceptConnection[],
  concepts: MountedConceptsRecord
): ConceptPath[] {
  return connections
    .map(({ from, to }) => {
      const pathStartElement = concepts[from]
      const pathEndElement = concepts[to]

      // If the start or end concept doesn't exist for some reason, skip
      if (!pathStartElement || !pathEndElement) {
        return undefined
      }

      return determinePath(pathStartElement, pathEndElement)
    })
    .filter(isConceptPath)
}

export function determinePath(
  pathStartElement: HTMLElement,
  pathEndElement: HTMLElement
) {
  const conceptStatus = pathEndElement.dataset.conceptStatus as ConceptStatus

  return {
    start: getPathStartFromElement(pathStartElement),
    end: getPathEndFromElement(pathEndElement),
    state: getPathState(conceptStatus),
  }
}

// calculate the start position of the path

function getPathStartFromElement(el: HTMLElement): ConceptPathCoordinate {
  const x = Math.floor(el.offsetLeft + el.offsetWidth / 2) + 0.5
  const y = Math.ceil(el.offsetTop + el.offsetHeight)

  return { x, y }
}

// calculate the end position of the path
function getPathEndFromElement(el: HTMLElement): ConceptPathCoordinate {
  const x = Math.floor(el.offsetLeft + el.offsetWidth / 2) + 0.5
  const y = Math.floor(el.offsetTop)

  return { x, y }
}

// Derive the path state from the concept state
function getPathState(conceptStatus: ConceptStatus): ConceptPathState {
  switch (conceptStatus) {
    case ConceptStatus.Unlocked:
    case ConceptStatus.InProgress:
      return ConceptPathState.Available
    case ConceptStatus.Completed:
      return ConceptPathState.Completed
    default:
      return ConceptPathState.Unavailable
  }
}
