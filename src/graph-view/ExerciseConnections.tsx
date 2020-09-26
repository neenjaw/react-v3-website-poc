import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'

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
export const ExerciseConnections = forwardRef((_props, ref) => {
  const [inactiveLines, setInactiveLines] = useState(new Map() as LineStore)
  const [activeLines, setActiveLines] = useState(new Map() as LineStore)

  const updateLines = (lines: LineStore, active: boolean) => {
    if (active) {
      setActiveLines(lines)
    } else {
      setInactiveLines(lines)
    }
  }

  const addLines = (
    prereqs: Array<string>,
    exercise: string,
    isActive: boolean = false
  ) => {
    const linesStore = isActive ? activeLines : inactiveLines
    const nextPrereqs = new Set(linesStore.get(exercise) ?? new Set<string>())
    prereqs.forEach((prereq) => nextPrereqs.add(prereq))
    const nextLineStore = new Map(linesStore).set(exercise, nextPrereqs)

    updateLines(nextLineStore, isActive)
  }

  const removeLines = (exercise: string, isActive: boolean = false) => {
    const lineStore = isActive ? activeLines : inactiveLines
    const nextLineStore = new Map(lineStore)
    nextLineStore.delete(exercise)
    updateLines(nextLineStore, isActive)
  }

  useImperativeHandle(ref, () => {
    return {
      addLines,
      removeLines,
    }
  })

  const canvasEl = useRef(null)

  useEffect(() => {
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
    // TODO - replace preceeding
  }, [activeLines, inactiveLines])

  return (
    <canvas ref={canvasEl} className="exercise-connections__canvas"></canvas>
  )
})
