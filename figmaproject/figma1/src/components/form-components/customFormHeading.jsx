import React from 'react'

const CustomFormHeading = ({children}) => {
  return (
    <div
      className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex justify-content-start align-items-center c-bShadow "
      style={{ maxWidth: `${window.innerWidth}` }}
    >
        {children}
    </div>
  )
}

export default CustomFormHeading