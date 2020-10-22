const CONCEPT_BOX: { [key: string]: HTMLElement } = {}
const LISTENER_BOX: { [key: string]: [(_: any) => void, string, string][] } = {}

// function to allow Concept to emit itself
export const emitConceptElement = (
  slug: string,
  element?: HTMLElement | null
): void => {
  if (!element) {
    delete CONCEPT_BOX[slug]
    LISTENER_BOX[slug].forEach(([listener, ,]) => listener(null))
    return
  }

  CONCEPT_BOX[slug] = element

  LISTENER_BOX[slug]?.forEach(([listener, from, to]) => {
    if (LISTENER_BOX[from] && LISTENER_BOX[to]) {
      listener(LISTENER_BOX[from])
      listener(LISTENER_BOX[to])
    }
  })
}

// function to allow ConnectionPathCanvas to add itself as a listener
export const addListenerForConcept = (
  from: string,
  fromCallback: (_: any) => void,
  to: string,
  toCallback: (_: any) => void
): void => {
  const fromListeners = LISTENER_BOX[from] ?? []
  fromListeners.push([fromCallback, from, to])
  LISTENER_BOX[from] = fromListeners

  const toListeners = LISTENER_BOX[from] ?? []
  toListeners.push([toCallback, from, to])
  LISTENER_BOX[from] = toListeners

  if (CONCEPT_BOX[from] && CONCEPT_BOX[to]) {
    fromCallback(CONCEPT_BOX[from])
    toCallback(CONCEPT_BOX[to])
  }
}

// function to allow ConnectionPathCanvas to remove itself as a listener
export const removeListenerForConcept = (
  from: string,
  fromCallback: (_: any) => void,
  to: string,
  toCallback: (_: any) => void
): void => {
  const fromListeners = LISTENER_BOX[from] ?? []
  const fromListenerIndex = fromListeners.findIndex(
    ([callback, ,]) => callback === fromCallback
  )
  if (fromListenerIndex > -1) {
    LISTENER_BOX[from] = fromListeners.splice(fromListenerIndex, 1)
  }

  const toListeners = LISTENER_BOX[to] ?? []
  const toListenerIndex = toListeners.findIndex(
    ([callback, ,]) => callback === toCallback
  )
  if (toListenerIndex > -1) {
    LISTENER_BOX[to] = toListeners.splice(toListenerIndex, 1)
  }
}
