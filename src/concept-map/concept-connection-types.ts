export type ConceptConnection = {
  from: string
  to: string
}

export enum ConceptPathState {
  Unavailable = 'unavailable',
  Available = 'available',
  Completed = 'completed',
}

export type ConceptPathCoordinate = {
  x: number
  y: number
}

export type ConceptPath = {
  start: ConceptPathCoordinate
  end: ConceptPathCoordinate
  state: ConceptPathState
}

export function isConceptPath(
  conceptPath: ConceptPath | undefined
): conceptPath is ConceptPath {
  return conceptPath !== undefined
}
