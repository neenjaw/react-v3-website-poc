const CONCEPT_BOX: { [key: string]: HTMLElement } = {}
const LISTENER_BOX: {
  [key: string]: [(refs: [any, any]) => void, string, string][]
} = {}

// function to allow Concept to emit itself
export const emitConceptElement = (
  slug: string,
  element?: HTMLElement | null
): void => {
  if (!element) {
    delete CONCEPT_BOX[slug]
    LISTENER_BOX[slug].forEach(([listener, ,]) => listener([null, null]))
    return
  }

  CONCEPT_BOX[slug] = element

  LISTENER_BOX[slug]?.forEach(([listener, from, to]) => {
    if (LISTENER_BOX[from] && LISTENER_BOX[to]) {
      listener([LISTENER_BOX[from], LISTENER_BOX[to]])
    }
  })
}

// function to allow ConnectionPathCanvas to add itself as a listener
export const addListenerForConcepts = (
  callback: (refs: [any, any]) => void,
  from: string,
  to: string
): void => {
  const fromListeners = LISTENER_BOX[from] ?? []
  fromListeners.push([callback, from, to])
  LISTENER_BOX[from] = fromListeners

  const toListeners = LISTENER_BOX[to] ?? []
  toListeners.push([callback, from, to])
  LISTENER_BOX[to] = toListeners

  if (CONCEPT_BOX[from] && CONCEPT_BOX[to]) {
    callback([CONCEPT_BOX[from], CONCEPT_BOX[to]])
  }
}

// function to allow ConnectionPathCanvas to remove itself as a listener
export const removeListenerForConcepts = (
  callback: (from: any, to: any) => void,
  from: string,
  to: string
): void => {
  const fromListeners = LISTENER_BOX[from] ?? []
  const fromListenerIndex = fromListeners.findIndex(
    ([fromCallback, ,]) => fromCallback === callback
  )
  if (fromListenerIndex > -1) {
    LISTENER_BOX[from] = fromListeners.splice(fromListenerIndex, 1)
  }

  const toListeners = LISTENER_BOX[to] ?? []
  const toListenerIndex = toListeners.findIndex(
    ([toCallback, ,]) => toCallback === callback
  )
  if (toListenerIndex > -1) {
    LISTENER_BOX[to] = toListeners.splice(toListenerIndex, 1)
  }
}
