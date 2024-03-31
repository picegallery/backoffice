export interface EventTarget {
  name: string
  value: string
}

export interface EventHandle {
  target: EventTarget
}

export type InputType = 'text' | 'password' | 'email' | 'number'

export interface InputDataArray {
  property: string
  index: number
  field: string
}
