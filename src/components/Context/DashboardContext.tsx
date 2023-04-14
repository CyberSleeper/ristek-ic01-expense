import React, { Children, useState } from 'react'
import { useContext, createContext } from 'react'
import { ReactNode } from 'react'

export const DashboardContext = createContext<{
  paramFilter: string,
  setParamFilter: React.Dispatch<React.SetStateAction<string>>,
  refetch: boolean,
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>
}>({
  paramFilter: "",
  setParamFilter: undefined as unknown as React.Dispatch<React.SetStateAction<string>>,
  refetch: true,
  setRefetch: undefined as unknown as React.Dispatch<React.SetStateAction<boolean>>
})

export const DashboardProvider = ({children}: {children: ReactNode}) => {
  const [paramFilter, setParamFilter] = useState<string>("")
  const [refetch, setRefetch] = useState(true)
  const contextValue = {
    paramFilter: paramFilter,
    setParamFilter: setParamFilter,
    refetch: refetch,
    setRefetch: setRefetch
  }
  
  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  )
}
