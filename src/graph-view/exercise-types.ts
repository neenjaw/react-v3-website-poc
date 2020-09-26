export type ExerciseData = {
  index: number
  slug: string
  uuid: string
  concepts: Array<string>
  prerequisites: Array<string>
  status?: 'locked' | 'unlocked' | 'complete' | 'in-progress'
}

export type ExerciseLayerData = Array<ExerciseData>
export type ExerciseLayersData = Array<ExerciseLayerData>
