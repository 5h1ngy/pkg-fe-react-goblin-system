import { SxProps } from '../../../system'

export interface TransferListItem {
  label: string
  value: string
}

export interface TransferListProps {
  left: TransferListItem[]
  right: TransferListItem[]
  onChange?: (left: TransferListItem[], right: TransferListItem[]) => void
  sx?: SxProps
}
