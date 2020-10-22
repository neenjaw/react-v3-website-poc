import React, { useEffect, useRef } from 'react'

import { useWebpageSize } from './hooks/useWebpageSize'

import { ConceptConnection } from './concept-connection-types'

import { defaultDrawPathOptions, drawPath } from './helpers/draw-helpers'
import { determinePath } from './helpers/path-helpers'
import {
  IDrawHandler,
  addDrawHandler,
  removeDrawHandler,
} from './helpers/concept-element-handler'
import { isConditionalExpression } from 'typescript'

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

  useEffect(() => {
    const drawSelf: IDrawHandler = (pathStartElement, pathEndElement) => {
      const canvas = canvasRef.current as HTMLCanvasElement | null
      if (!canvas) {
        return
      }
      console.log({ canvas })

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (pathStartElement === null || pathEndElement === null) {
        return
      }

      const path = determinePath(pathStartElement, pathEndElement)

      const drawOptions = defaultDrawPathOptions()
      drawOptions.scale = devicePixelRatio

      requestAnimationFrame(() => {
        drawPath(path, ctx, drawOptions)
        canvas.classList.remove('hidden')
      })
    }

    const { from, to } = connection
    console.log('adding')

    addDrawHandler(drawSelf, from, to)
    return () => {
      console.log('removing')
      removeDrawHandler(drawSelf, from, to)
    }
  }, [connection, canvasRef])

  const existsActivePaths = activeConcepts.size > 0
  const isInactive =
    existsActivePaths &&
    !(activeConcepts.has(connection.from) && activeConcepts.has(connection.to))

  const classNames = ['canvas', 'hidden']
  if (isInactive) {
    classNames.push('inactive')
  }

  const width = webpageWidth - 2 // to account for vertical scroll bar
  const height = webpageHeight

  return (
    <canvas
      ref={canvasRef}
      className={classNames.join(' ')}
      data-from={connection.from}
      data-to={connection.to}
      width={width * devicePixelRatio}
      height={height * devicePixelRatio}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  )
}

function connectionToKey({ from, to }: ConceptConnection): string {
  return `path-${from}-${to}`
}
