import React, { useEffect, useRef } from 'react'

import { PathStore, useExercisePathStore } from './useExercisePathStore'

import './ExerciseConnections.css'

enum ExercisePathState {
  Unavailable = 'unavailable',
  Available = 'available',
  Completed = 'completed',
}

type ExercisePath = {
  start: string
  end: string
  state: ExercisePathState
  active: boolean
}

type DeterminePathTypesReturn = {
  unavailablePaths: ExercisePath[]
  availablePaths: ExercisePath[]
  completedPaths: ExercisePath[]
}

/**
 * ExerciseConnections
 * This react component manages an HTML5 canvas to draw connections between exercises
 * Exercises can self-register/unregister using the imperative handles provided by forwardRef
 *
 * TODO:
 * - When the component is drawn/re-drawn:
 *   - Draw the arrows that are represented by the data in the path stores
 */
export const ExerciseConnections = () => {
  const pathStore = useExercisePathStore()
  const canvasEl = useRef(null)

  useEffect(() => {
    console.log(pathStore)

    const {
      unavailablePaths: inactiveUnavailablePaths,
      availablePaths: inactiveAvailablePaths,
      completedPaths: inactiveCompletedPaths,
    } = determinePathTypes(pathStore.inactive)

    const {
      unavailablePaths: activeUnavailablePaths,
      availablePaths: activeAvailablePaths,
      completedPaths: activeCompletedPaths,
    } = determinePathTypes(pathStore.active)

    // Determine the order drawn since canvas is drawn in bitmap mode
    // which means, things drawn first are covered up by things drawn second
    // if they overlap
    const drawOrder = [
      inactiveUnavailablePaths,
      inactiveCompletedPaths,
      inactiveAvailablePaths,
      activeUnavailablePaths,
      activeCompletedPaths,
      activeAvailablePaths,
    ]

    // eslint-disable-next-line
    const dpi = window.devicePixelRatio
    const canvas = canvasEl.current as HTMLCanvasElement | null
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    canvas.height =
      document.body.scrollHeight -
      Number(canvas.style.borderTopWidth) -
      Number(canvas.style.borderBottomWidth)

    drawOrder.forEach((pathGroup) =>
      pathGroup.forEach((path) => drawPath(path, ctx))
    )

    canvas.width =
      document.documentElement.clientWidth -
      Number(canvas.style.borderLeftWidth) -
      Number(canvas.style.borderRightWidth) -
      2 // Not sure why it needs two more pixel in chrome

    // TODO - replace following with actual path drawing
    // This is a test square to ensure the component was being rendered behind the webpage
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(50, 50, 100, 100)
  }, [pathStore])

  return (
    <canvas ref={canvasEl} className="exercise-connections__canvas"></canvas>
  )
}

function determinePathTypes(pathStore: PathStore): DeterminePathTypesReturn {
  // Todo

  return {
    unavailablePaths: [],
    availablePaths: [],
    completedPaths: [],
  }
}

function drawPath(path: ExercisePath, ctx: CanvasRenderingContext2D): void {
  // Todo
}
