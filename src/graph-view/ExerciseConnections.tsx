import React, { useEffect, useRef } from 'react'

import { LineStore, useExerciseLineStore } from './useExerciseLineStore'

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
 *   - Draw the arrows that are represented by the data in the line stores
 */
export const ExerciseConnections = () => {
  const lineStore = useExerciseLineStore()
  const canvasEl = useRef(null)

  useEffect(() => {
    console.log(lineStore)

    const {
      unavailablePaths: inactiveUnavailablePaths,
      availablePaths: inactiveAvailablePaths,
      completedPaths: inactiveCompletedPaths,
    } = determinePathTypes(lineStore.inactive)

    const {
      unavailablePaths: activeUnavailablePaths,
      availablePaths: activeAvailablePaths,
      completedPaths: activeCompletedPaths,
    } = determinePathTypes(lineStore.active)

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

    // TODO - replace following with actual line drawing
    // This is a test square to ensure the component was being rendered behind the webpage
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(50, 50, 100, 100)
  }, [lineStore])

  return (
    <canvas ref={canvasEl} className="exercise-connections__canvas"></canvas>
  )
}

function determinePathTypes(lineStore: LineStore): DeterminePathTypesReturn {
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
