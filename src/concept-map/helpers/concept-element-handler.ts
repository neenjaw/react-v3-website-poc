const CONCEPT_BOX: { [key: string]: HTMLElement } = {}
const LISTENER_BOX: { [key: string]: ((_: any) => void)[] } = {}

// function to allow Concept to emit itself
export const emitConceptElement = (
  slug: string,
  element?: HTMLElement | null
): void => {
  if (!element) {
    delete CONCEPT_BOX[slug]
    LISTENER_BOX[slug].forEach((listener) => listener(null))
    return
  }

  CONCEPT_BOX[slug] = element
  LISTENER_BOX[slug]?.forEach((listener) => listener(element))
}

// function to allow ConnectionPathCanvas to add itself as a listener
export const addListenerForConcept = (
  slug: string,
  callback: (_: any) => void
): void => {
  const listeners = LISTENER_BOX[slug] ?? []
  listeners.push(callback)
  LISTENER_BOX[slug] = listeners

  if (CONCEPT_BOX[slug]) {
    callback(CONCEPT_BOX[slug])
  }
}

// function to allow ConnectionPathCanvas to remove itself as a listener
export const removeListenerForConcept = (
  slug: string,
  callback: (_: any) => void
): void => {
  const listeners = LISTENER_BOX[slug] ?? []
  const listenerIndex = listeners.indexOf(callback)
  if (listenerIndex > -1) {
    listeners.splice(listenerIndex, 1)
  }
}
