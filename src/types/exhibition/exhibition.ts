export enum ExhibitionType {
  HYBRID = 'hybrid',
  VIRTUAL = 'virtual',
  PHYSICAL = 'physical',
  ARTFAIR = 'art-fair',
  SOLO = 'solo',
  OTHER = 'other'
}
export type Exhibition = {
  id: string
  exhibitionType: ExhibitionType
  title: string
  description: string
  startDate: string
  endDate: string
}
