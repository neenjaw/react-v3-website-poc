import React, { useEffect, useRef } from 'react'

import { useWebpageSize } from '../hooks/useWebpageSize'
import { slugToId } from './Exercise'
import { ExerciseState, ExerciseConnection } from './exercise-types'

import './ExerciseConnections.css'

enum ExercisePathState {
  Unavailable = 'unavailable',
  Available = 'available',
  Completed = 'completed',
}

type ExercisePathCoordinate = {
  x: number
  y: number
}

type ExercisePath = {
  start: ExercisePathCoordinate
  end: ExercisePathCoordinate
  state: ExercisePathState
}

type CategorizedExercisePaths = {
  unavailable: ExercisePath[]
  available: ExercisePath[]
  completed: ExercisePath[]
}

type DrawPathOptions = {
  existsActivePaths?: boolean
}

/**
 * ExerciseConnections
 * This react component manages an HTML5 canvas to draw connections between exercises
 * Exercises can self-register/unregister
 *
 * TODO:
 * - When the component is drawn/re-drawn:
 *   - Draw the arrows that are represented by the data in the path stores
 */
export const ExerciseConnections = ({
  connections,
}: {
  connections: ExerciseConnection[]
}) => {
  const { width: webpageWidth, height: webpageHeight } = useWebpageSize()
  const canvasEl = useRef(null)

  useEffect(() => {
    console.log({ webpageWidth, webpageHeight })

    // eslint-disable-next-line
    const dpi = window.devicePixelRatio
    const canvas = canvasEl.current as HTMLCanvasElement | null
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    const {
      unavailable: inactiveUnavailablePaths,
      available: inactiveAvailablePaths,
      completed: inactiveCompletedPaths,
    } = determinePathTypes(connections, false)

    const {
      unavailable: activeUnavailablePaths,
      available: activeAvailablePaths,
      completed: activeCompletedPaths,
    } = determinePathTypes(connections, true)

    // Determine the order drawn since canvas is drawn in bitmap
    // mode which means, things drawn first are covered up by
    // things drawn second if they overlap
    const drawOrder = [
      inactiveUnavailablePaths,
      inactiveCompletedPaths,
      inactiveAvailablePaths,
      activeUnavailablePaths,
      activeCompletedPaths,
      activeAvailablePaths,
    ]

    if (!canvas || !ctx) return

    canvas.height =
      webpageHeight -
      Number(canvas.style.borderTopWidth) -
      Number(canvas.style.borderBottomWidth)

    // Not sure why it needs two more pixel in chrome to account
    // for the width of the vertical scroll bar
    canvas.width =
      webpageWidth -
      Number(canvas.style.borderLeftWidth) -
      Number(canvas.style.borderRightWidth) -
      2 // See above

    const drawOptions = defaultDrawPathOptions()
    drawOptions.existsActivePaths = Boolean(
      activeUnavailablePaths.length ||
        activeAvailablePaths.length ||
        activeCompletedPaths.length
    )

    drawOrder.forEach((pathGroup) =>
      pathGroup.forEach((path) => drawPath(path, ctx, drawOptions))
    )
  }, [connections, webpageHeight, webpageWidth])

  return (
    <canvas ref={canvasEl} className="exercise-connections-canvas"></canvas>
  )
}

function determinePathTypes(
  connections: ExerciseConnection[],
  active: boolean
): CategorizedExercisePaths {
  const paths: CategorizedExercisePaths = {
    unavailable: [],
    available: [],
    completed: [],
  }

  connections.forEach(({ from, to }) => {
    const pathEndElement = document.getElementById(slugToId(to))
    if (!pathEndElement) return
    const pathStartElement = document.getElementById(slugToId(from))
    if (!pathStartElement) return

    const exerciseStatus = pathEndElement.dataset
      .exerciseStatus as ExerciseState
    const exercisePath = {
      start: getPathStartFromElement(pathStartElement),
      end: getPathEndFromElement(pathEndElement),
      state: getPathState(exerciseStatus),
    }

    switch (exercisePath.state) {
      case ExercisePathState.Available:
        paths.available.push(exercisePath)
        break
      case ExercisePathState.Completed:
        paths.completed.push(exercisePath)
        break
      default:
        paths.unavailable.push(exercisePath)
        break
    }
  })

  return paths
}

function getPathStartFromElement(el: HTMLElement): ExercisePathCoordinate {
  const x = toNearestHalf(el.offsetLeft + el.offsetWidth / 2)
  const y = Math.ceil(el.offsetTop + el.offsetHeight)

  return { x, y }
}

function getPathEndFromElement(el: HTMLElement): ExercisePathCoordinate {
  const x = toNearestHalf(el.offsetLeft + el.offsetWidth / 2)
  const y = Math.floor(el.offsetTop)

  return { x, y }
}

function toNearestHalf(n: number): number {
  return Math.ceil(n * 2) / 2
}

function getPathState(exerciseStatus: ExerciseState): ExercisePathState {
  if (
    exerciseStatus === ExerciseState.Unlocked ||
    exerciseStatus === ExerciseState.InProgress
  ) {
    return ExercisePathState.Available
  } else if (exerciseStatus === ExerciseState.Completed) {
    return ExercisePathState.Completed
  }

  return ExercisePathState.Unavailable
}

function defaultDrawPathOptions(): DrawPathOptions {
  return {
    existsActivePaths: false,
  }
}

function drawPath(
  path: ExercisePath,
  ctx: CanvasRenderingContext2D,
  options: DrawPathOptions
): void {
  ctx.beginPath()
  ctx.moveTo(path.start.x, path.start.y)
  ctx.lineTo(path.end.x, path.end.y)
  ctx.stroke()
}
