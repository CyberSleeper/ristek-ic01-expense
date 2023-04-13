import React from "react"
import { IconProps } from "./interface"

export const CurrencyDollarIcon: React.FC<IconProps> = ({
	size = 'w-[39px] h-[39px]',
	fill = 'none',
	stroke = 'currentColor',
	className,
}) => {
	return (
		<svg 
			viewBox="0 0 39 39"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
			className={`${size} ${className}`}
		>
			<path
				d="M23.8337 14.2804C24.1957 14.6975 24.8273 14.7423 25.2444 14.3803C25.6616 14.0183 25.7063 13.3868 25.3443 12.9696L23.8337 14.2804ZM15.1663 24.7196C14.8044 24.3025 14.1728 24.2577 13.7556 24.6197C13.3385 24.9817 13.2938 25.6132 13.6557 26.0304L15.1663 24.7196ZM20.5 9.70833C20.5 9.15605 20.0523 8.70833 19.5 8.70833C18.9477 8.70833 18.5 9.15605 18.5 9.70833H20.5ZM18.5 29.2916C18.5 29.8439 18.9477 30.2917 19.5 30.2917C20.0523 30.2917 20.5 29.844 20.5 29.2917L18.5 29.2916ZM36.125 19.5C36.125 28.6817 28.6817 36.125 19.5 36.125V38.125C29.7863 38.125 38.125 29.7863 38.125 19.5H36.125ZM19.5 36.125C10.3183 36.125 2.875 28.6817 2.875 19.5H0.875C0.875 29.7863 9.2137 38.125 19.5 38.125V36.125ZM2.875 19.5C2.875 10.3183 10.3183 2.875 19.5 2.875V0.875C9.2137 0.875 0.875 9.2137 0.875 19.5H2.875ZM19.5 2.875C28.6817 2.875 36.125 10.3183 36.125 19.5H38.125C38.125 9.2137 29.7863 0.875 19.5 0.875V2.875ZM19.5 18.5C18.0476 18.5 16.7778 18.1057 15.9004 17.5208C15.0161 16.9312 14.625 16.2265 14.625 15.5833H12.625C12.625 17.1033 13.5491 18.3569 14.791 19.1849C16.04 20.0175 17.7078 20.5 19.5 20.5V18.5ZM14.625 15.5833C14.625 14.9402 15.0161 14.2355 15.9004 13.6459C16.7778 13.061 18.0476 12.6667 19.5 12.6667V10.6667C17.7078 10.6667 16.04 11.1492 14.791 11.9818C13.5491 12.8097 12.625 14.0634 12.625 15.5833H14.625ZM19.5 12.6667C21.4679 12.6667 23.0563 13.3844 23.8337 14.2804L25.3443 12.9696C24.0901 11.5242 21.8812 10.6667 19.5 10.6667V12.6667ZM19.5 20.5C20.9524 20.5 22.2222 20.8943 23.0996 21.4792C23.984 22.0688 24.375 22.7735 24.375 23.4167H26.375C26.375 21.8967 25.4509 20.6431 24.209 19.8151C22.96 18.9825 21.2922 18.5 19.5 18.5V20.5ZM18.5 9.70833V11.6667H20.5V9.70833H18.5ZM18.5 27.3333L18.5 29.2916L20.5 29.2917L20.5 27.3334L18.5 27.3333ZM19.5 26.3333C17.5321 26.3333 15.9437 25.6156 15.1663 24.7196L13.6557 26.0304C14.9099 27.4758 17.1188 28.3333 19.5 28.3333L19.5 26.3333ZM24.375 23.4167C24.375 24.0598 23.984 24.7645 23.0996 25.3541C22.2222 25.939 20.9525 26.3333 19.5 26.3333V28.3333C21.2923 28.3333 22.9601 27.8508 24.209 27.0182C25.4509 26.1903 26.375 24.9366 26.375 23.4167H24.375ZM18.5 11.6667L18.5 27.3333L20.5 27.3333L20.5 11.6667L18.5 11.6667Z" 
				stroke={stroke}
				fill="#19A7CE"
			/>
		</svg>

	)
}
