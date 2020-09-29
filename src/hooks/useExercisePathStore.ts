import { useLayoutEffect, useState } from 'react'

export type PathStore = Map<string, Set<string>>

type StatefulPathStore = {
  active: PathStore
  inactive: PathStore
}

type PathStoreListener = (next: StatefulPathStore) => void

const EXERCISE_PATH_STORE: {
  current: StatefulPathStore
} = {
  current: {
    active: new Map(),
    inactive: new Map(),
  },
}

const listeners: PathStoreListener[] = []

export const addExercisePaths = (
  exercise: string,
  prerequisites: string[],
  isActive: boolean
) => {
  const pathStore = isActive
    ? EXERCISE_PATH_STORE.current.active
    : EXERCISE_PATH_STORE.current.inactive

  const nextPrerequisites = new Set(
    pathStore.get(exercise) ?? new Set<string>()
  )
  prerequisites.forEach((prerequisite) => nextPrerequisites.add(prerequisite))
  const nextPathStore = new Map(pathStore).set(exercise, nextPrerequisites)

  const nextPathStoreState = {
    active: isActive ? nextPathStore : EXERCISE_PATH_STORE.current.active,
    inactive: !isActive ? nextPathStore : EXERCISE_PATH_STORE.current.inactive,
  }

  EXERCISE_PATH_STORE.current = nextPathStoreState
  listeners.forEach((listener) => listener(nextPathStoreState))
}

export const removeExercisePaths = (exercise: string) => {
  const nextActivePathStore = new Map(EXERCISE_PATH_STORE.current.active)
  nextActivePathStore.delete(exercise)

  const nextInactivePathStore = new Map(EXERCISE_PATH_STORE.current.inactive)
  nextInactivePathStore.delete(exercise)

  const nextPathStoreState = {
    active: nextActivePathStore,
    inactive: nextInactivePathStore,
  }

  EXERCISE_PATH_STORE.current = nextPathStoreState
  listeners.forEach((listener) => listener(nextPathStoreState))
}

export const useExercisePathStore = () => {
  const [pathStore, setPathStore] = useState(EXERCISE_PATH_STORE.current)

  useLayoutEffect(() => {
    listeners.push(setPathStore)

    return () => {
      listeners.splice(listeners.indexOf(setPathStore), 1)
    }
  }, [setPathStore])

  return pathStore
}
