import { useState, useLayoutEffect } from 'react'

export type MountedConceptsRecord = { [key: string]: HTMLElement | null }
type MountedConceptsRecordListener = (next: MountedConceptsRecord) => void

const MOUNTED_CONCEPTS: {
  current: MountedConceptsRecord
} = { current: {} }

const listeners: MountedConceptsRecordListener[] = []

export function registerMountedConcept(slug: string, ref: HTMLElement | null) {
  const next = { ...MOUNTED_CONCEPTS.current }
  next[slug] = ref
  MOUNTED_CONCEPTS.current = next
  listeners.forEach((listener) => listener(next))
}

export function unregisterMountedConcept(slug: string) {
  const next = { ...MOUNTED_CONCEPTS.current }

  delete next[slug]
  MOUNTED_CONCEPTS.current = next
  listeners.forEach((listener) => listener(next))
}

export function useMountedConcepts() {
  const [concepts, setConcepts] = useState(MOUNTED_CONCEPTS.current)

  useLayoutEffect(() => {
    listeners.push(setConcepts)

    // clean up listeners
    return () => {
      listeners.splice(listeners.indexOf(setConcepts), 1)
    }
  }, [setConcepts])

  return concepts
}
