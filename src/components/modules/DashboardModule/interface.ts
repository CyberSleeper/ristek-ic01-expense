export interface PaginationProps {
  currentPage: number
  pages: number[]
}

export interface DotProps {
  isSelected: boolean
}

export interface FilterProps {
  food: boolean
  transportation: boolean
  housing: boolean
  personalSpending: boolean
}