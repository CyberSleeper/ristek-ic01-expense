import React from "react"
import { IconProps } from "./interface"

export const FilterIcon: React.FC<IconProps> = ({
  size = 'w-[32px] h-[32px]',
  fill = 'none',
  stroke = 'currentColor',
  className,
}) => {
  return(
    <svg 
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${className}`}
    >
      <path
        d="M4 5C4 4.44772 4.44772 4 5 4H27C27.5523 4 28 4.44772 28 5V8.91912C28 9.18434 27.8946 9.43869 27.7071 9.62623L18.9596 18.3738C18.772 18.5613 18.6667 18.8157 18.6667 19.0809V22.6667L13.3333 28V19.0809C13.3333 18.8157 13.228 18.5613 13.0404 18.3738L4.29289 9.62623C4.10536 9.43869 4 9.18434 4 8.91912V5Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

