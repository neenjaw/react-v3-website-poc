import React, { useEffect, useRef } from 'react'

import { useWebpageSize } from './hooks/useWebpageSize'
import { useMountedConcepts } from './hooks/useMountedConcepts'

import { ConceptConnection } from './concept-connection-types'

import { defaultDrawPathOptions, drawPath } from './helpers/draw-helpers'
import { determinePath } from './helpers/path-helpers'

/**
 * ConceptConnections
 * This react component manages an HTML5 canvas to draw connections between concepts
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
  const mountedConcepts = useMountedConcepts()
  const { width: webpageWidth, height: webpageHeight } = useWebpageSize()
  const canvasRef = useRef(null)

  const key = connectionToKey(connection)
  const pathStartElement = mountedConcepts[connection.from]
  const pathEndElement = mountedConcepts[connection.to]

  useEffect(() => {
    console.log(['effect start', Date.now(), key]) // LOG
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
  }, [
    key,
    connection.from,
    connection.to,
    mountedConcepts,
    webpageHeight,
    webpageWidth,
    pathStartElement,
    pathEndElement,
  ])

  const existsActivePaths = activeConcepts.size > 0
  const isInactive =
    existsActivePaths &&
    !(activeConcepts.has(connection.from) && activeConcepts.has(connection.to))

  const classNames = ['canvas']
  if (isInactive) {
    classNames.push('inactive')
  }

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
