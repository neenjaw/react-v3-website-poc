import React, { useEffect, useReducer, useRef } from 'react'

import { useWebpageSize } from './hooks/useWebpageSize'

import { ConceptConnection } from './concept-connection-types'

import { defaultDrawPathOptions, drawPath } from './helpers/draw-helpers'
import { determinePath } from './helpers/path-helpers'
import {
  addListenerForConcepts,
  removeListenerForConcepts,
} from './helpers/concept-element-handler'

/**
 * ConceptConnections
 */
export const ConceptConnections = ({
  connections,
  activeConcepts,
}: {
  connections: ConceptConnection[]
  activeConcepts: Set<string>
}) => {
  return (
    <>
      {connections.map((connection, i) => {
        const key = connectionToKey(connection)
        return (
          <ConnectionPathCanvas
            key={key}
            activeConcepts={activeConcepts}
            connection={connection}
          />
        )
      })}
    </>
  )
}

const ConnectionPathCanvas = ({
  activeConcepts,
  connection,
}: {
  activeConcepts: Set<string>
  connection: ConceptConnection
}) => {
  const { width: webpageWidth, height: webpageHeight } = useWebpageSize()
  const canvasRef = useRef(null)

  const [[fromRef, toRef], setRefs] = useReducer(
    (_: any, newRefs: [any, any]) => newRefs,
    [null, null]
  )

  useEffect(() => {
    const { from, to } = connection
    addListenerForConcepts(setRefs, from, to)
    return () => {
      removeListenerForConcepts(setRefs, from, to)
    }
  }, [connection, setRefs])

  useEffect(() => {
    const pathStartElement = fromRef
    const pathEndElement = toRef

    if (!pathStartElement || !pathEndElement) {
      return
    }

    const canvas = canvasRef.current as HTMLCanvasElement | null
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    const width =
      webpageWidth -
      Number(canvas.style.borderLeftWidth) -
      Number(canvas.style.borderRightWidth) -
      2 // to account for vertical scroll bar

    const height =
      webpageHeight -
      Number(canvas.style.borderTopWidth) -
      Number(canvas.style.borderBottomWidth)

    canvas.width = width * devicePixelRatio
    canvas.height = height * devicePixelRatio

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    const path = determinePath(pathStartElement, pathEndElement)

    const drawOptions = defaultDrawPathOptions()
    drawOptions.scale = devicePixelRatio

    drawPath(path, ctx, drawOptions)
  }, [fromRef, toRef, webpageHeight, webpageWidth])

  const existsActivePaths = activeConcepts.size > 0
  const isInactive =
    existsActivePaths &&
    !(activeConcepts.has(connection.from) && activeConcepts.has(connection.to))

  const classNames = ['canvas']
  if (isInactive) {
    classNames.push('inactive')
  }
  if (!fromRef || !toRef) {
    classNames.push('hidden')
  }

  if (!fromRef || !toRef) {
    return null
  }

  console.log(connectionToKey(connection))

  return (
    <canvas
      ref={canvasRef}
      className={classNames.join(' ')}
      data-from={connection.from}
      data-to={connection.to}
    />
  )
}

function connectionToKey({ from, to }: ConceptConnection): string {
  return `path-${from}-${to}`
}
