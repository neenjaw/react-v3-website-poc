export enum ExerciseState {
  Locked = 'locked',
  Unlocked = 'unlocked',
  Completed = 'completed',
  InProgress = 'in_progress',
}

export type ExerciseData = {
  index: number
  slug: string
  uuid: string
  concepts: string[]
  prerequisites: string[]
  status: ExerciseState
}

export type ExerciseLayerData = ExerciseData[]
export type ExerciseLayersData = ExerciseLayerData[]
