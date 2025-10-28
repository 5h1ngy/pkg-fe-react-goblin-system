import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

type CreateIconOptions = {
  displayName: string
  viewBox?: string
  fillRule?: 'nonzero' | 'evenodd'
  clipRule?: 'nonzero' | 'evenodd'
}

function createIcon(
  pathD: string,
  { displayName, viewBox = '0 0 24 24', fillRule, clipRule }: CreateIconOptions,
) {
  const Icon = ({ size = 24, width, height, ...rest }: IconProps) => (
    <svg
      width={width ?? size}
      height={height ?? size}
      viewBox={viewBox}
      fill="currentColor"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={pathD} fillRule={fillRule} clipRule={clipRule} />
    </svg>
  )

  Icon.displayName = displayName

  return Icon
}

export const AddIcon = createIcon(
  'M12 5c.552 0 1 .448 1 1v5h5c.552 0 1 .448 1 1s-.448 1-1 1h-5v5c0 .552-.448 1-1 1s-1-.448-1-1v-5H6c-.552 0-1-.448-1-1s.448-1 1-1h5V6c0-.552.448-1 1-1z',
  { displayName: 'AddIcon' },
)

export const CloseIcon = createIcon(
  'M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-6.29 6.3-1.42-1.42L10.59 12 4.29 5.71 5.7 4.29 12 10.59l6.29-6.3z',
  { displayName: 'CloseIcon' },
)

export const FavoriteIcon = createIcon(
  'M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  { displayName: 'FavoriteIcon' },
)

export const MailIcon = createIcon(
  'M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z',
  { displayName: 'MailIcon' },
)

export const PhoneIcon = createIcon(
  'M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.07 21 3 13.93 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
  { displayName: 'PhoneIcon' },
)

export const ChevronLeftIcon = createIcon('M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z', {
  displayName: 'ChevronLeftIcon',
})

export const ChevronRightIcon = createIcon('M8.59 7.41 10 6l6 6-6 6-1.41-1.41L13.17 12z', {
  displayName: 'ChevronRightIcon',
})

export const MoreHorizIcon = createIcon(
  'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  { displayName: 'MoreHorizIcon' },
)

export const CheckIcon = createIcon('M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', {
  displayName: 'CheckIcon',
})

export const CircleIcon = createIcon(
  'M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z',
  { displayName: 'CircleIcon' },
)

export const ExpandMoreIcon = createIcon('M12 15.5 6 9.5 7.41 8.09 12 12.67l4.59-4.58L18 9.5z', {
  displayName: 'ExpandMoreIcon',
})

export const StarIcon = createIcon(
  'M12 17.27 18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  { displayName: 'StarIcon', fillRule: 'evenodd', clipRule: 'evenodd' },
)

export const StarBorderIcon = createIcon(
  'M22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24 7.45 13.97 5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-5.22 4.73 1.1 4.73L12 15.4l-5.88 3.3 1.1-4.73-3.62-3.95 4.91-.42L12 5.1l2.49 5 4.91.4-3.62 3.95z',
  { displayName: 'StarBorderIcon', fillRule: 'evenodd', clipRule: 'evenodd' },
)

export const FolderIcon = createIcon(
  'M10 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z',
  { displayName: 'FolderIcon' },
)
