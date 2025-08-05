import { useState } from "react"

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { PaginationButton, PaginationRoot } from './Pagination.style'
import type { PaginationProps } from './Pagination.types'

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, index) => start + index)

export const Pagination = ({
  count,
  page,
  defaultPage = 1,
  onChange,
  siblingCount = 1,
  boundaryCount = 1,
  sx,
  style,
  ...rest
}: PaginationProps) => {
  const [internalPage, setInternalPage] = useState(defaultPage)
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const currentPage = page ?? internalPage

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => {
    setInternalPage(newPage)
    onChange?.(event, newPage)
  }

  const siblingsStart = Math.max(
    Math.min(currentPage - siblingCount, count - siblingCount * 2 - 1),
    boundaryCount + 1,
  )
  const siblingsEnd = Math.min(
    Math.max(currentPage + siblingCount, siblingCount * 2 + boundaryCount + 2),
    count - boundaryCount,
  )

  const pages = [
    ...range(1, boundaryCount),
    ...(siblingsStart > boundaryCount + 1 ? ['ellipsis-start'] : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount ? ['ellipsis-end'] : []),
    ...range(count - boundaryCount + 1, count),
  ]

  return (
    <PaginationRoot role="navigation" style={resolvedStyle} {...rest}>
      <PaginationButton disabled={currentPage === 1} onClick={(event) => handleChange(event, currentPage - 1)}>
        Prev
      </PaginationButton>
      {pages.map((item, index) =>
        typeof item === 'string' ? (
          <span key={`${item}-${index}`}>…</span>
        ) : (
          <PaginationButton key={`page-${item}`} $selected={item === currentPage} onClick={(event) => handleChange(event, item)}>
            {item}
          </PaginationButton>
        ),
      )}
      <PaginationButton disabled={currentPage === count} onClick={(event) => handleChange(event, currentPage + 1)}>
        Next
      </PaginationButton>
    </PaginationRoot>
  )
}

Pagination.displayName = 'Pagination'
