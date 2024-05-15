import React, { createContext, useState } from 'react'

const cartUpdater=createContext()
 const CartUpdaterContext = ({children}) => {
    const [updater,setUpdater]=useState(false)
  return (<cartUpdater.Provider value={{updater,setUpdater}}>
    {children}
   </cartUpdater.Provider>
  )
}

export {cartUpdater,CartUpdaterContext}