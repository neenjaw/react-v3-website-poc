import { useLayoutEffect, useState } from 'react'

export type LineStore = Map<string, Set<string>>

type StatefulLineStore = {
  active: LineStore
  inactive: LineStore
}

type LineStoreListener = (next: StatefulLineStore) => void

const EXERCISE_LINE_STORE: {
  current: StatefulLineStore
} = {
  current: {
    active: new Map(),
    inactive: new Map(),
  },
}

const listeners: LineStoreListener[] = []

export const addExerciseLines = (
  exercise: string,
  prerequisites: string[],
  isActive: boolean
) => {
  const lineStore = isActive
    ? EXERCISE_LINE_STORE.current.active
    : EXERCISE_LINE_STORE.current.inactive

  const nextPrerequisites = new Set(
    lineStore.get(exercise) ?? new Set<string>()
  )
  prerequisites.forEach((prerequisite) => nextPrerequisites.add(prerequisite))
  const nextLineStore = new Map(lineStore).set(exercise, nextPrerequisites)

  const nextLineStoreState = {
    active: isActive ? nextLineStore : EXERCISE_LINE_STORE.current.active,
    inactive: !isActive ? nextLineStore : EXERCISE_LINE_STORE.current.inactive,
  }

  EXERCISE_LINE_STORE.current = nextLineStoreState
  listeners.forEach((listener) => listener(nextLineStoreState))
}

export const removeExerciseLines = (exercise: string) => {
  const nextActiveLineStore = new Map(EXERCISE_LINE_STORE.current.active)
  nextActiveLineStore.delete(exercise)

  const nextInactiveLineStore = new Map(EXERCISE_LINE_STORE.current.inactive)
  nextInactiveLineStore.delete(exercise)

  const nextLineStoreState = {
    active: nextActiveLineStore,
    inactive: nextInactiveLineStore,
  }

  EXERCISE_LINE_STORE.current = nextLineStoreState
  listeners.forEach((listener) => listener(nextLineStoreState))
}

export const useExerciseLineStore = () => {
  const [lineStore, setLineStore] = useState(EXERCISE_LINE_STORE.current)

  useLayoutEffect(() => {
    listeners.push(setLineStore)

    return () => {
      listeners.splice(listeners.indexOf(setLineStore), 1)
    }
  }, [setLineStore])

  return lineStore
}
