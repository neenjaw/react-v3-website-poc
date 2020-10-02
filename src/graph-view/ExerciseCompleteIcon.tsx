import React from 'react'

export const ExerciseCompleteIcon = ({ show }: { show: boolean }) => {
  if (!show) return null

  return <span>C</span>
}
