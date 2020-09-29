import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'

import './ExerciseConnections.css'

type LineStore = Map<string, Set<string>>

/**
 * ExerciseConnections
 * This react component manages an HTML5 canvas to draw connections between exercises
 * Exercises can self-register/unregister using the imperative handles provided by forwardRef
 *
 * TODO:
 * - When the component is drawn/re-drawn:
 *   - Draw the arrows that are represented by the data in the line stores
 */
export const ExerciseConnections = forwardRef((props, ref) => {
  const [lineStore, setLineStore] = useState(new Map() as LineStore)

  const updateLines = (lines: LineStore) => {
    console.log(lines)

    setLineStore(lines)
  }

  const addExerciseLines = (exercise: string, prerequisites: string[]) => {
    const nextPrerequisites = new Set(
      lineStore.get(exercise) ?? new Set<string>()
    )
    prerequisites.forEach((prerequisite) => nextPrerequisites.add(prerequisite))
    const nextLineStore = new Map(lineStore).set(exercise, nextPrerequisites)

    updateLines(nextLineStore)
  }

  const removeExerciseLines = (exercise: string) => {
    const nextLineStore = new Map(lineStore)
    nextLineStore.delete(exercise)
    updateLines(nextLineStore)
  }

  useImperativeHandle(ref, () => {
    return {
      addExerciseLines,
      removeExerciseLines,
    }
  })

  const canvasEl = useRef(null)

  useEffect(() => {
    console.log({ lineStore })

    // eslint-disable-next-line
    const dpi = window.devicePixelRatio
    const canvas = canvasEl.current as HTMLCanvasElement | null
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    canvas.height =
      document.body.scrollHeight -
      Number(canvas.style.borderTopWidth) -
      Number(canvas.style.borderBottomWidth)

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
})
