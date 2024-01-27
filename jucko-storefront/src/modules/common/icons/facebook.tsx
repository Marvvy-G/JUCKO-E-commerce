import React from "react"

import { IconProps } from "types/icon"

const Ideal: React.FC<IconProps> = ({
  size = "39",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg 
    width={size} 
    height={size}
    viewBox="0 0 24 24" 
    fill="none" 
    {...attributes}
    xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21V13.0001M12 13.0001V10.0001C12 8.02404 13.3537 7.03622 15.5 7.18462M12 13.0001L15 13.0001M12 13.0001H9" stroke="#4460A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
      </svg>
  )
}

export default Ideal
