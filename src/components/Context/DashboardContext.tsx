import React, { Children, useState } from 'react'
import { useContext, createContext } from 'react'
import { ReactNode } from 'react'

export const DashboardContext = createContext<{
  minPrice: string,
  setMinPrice: React.Dispatch<React.SetStateAction<string>>,
  maxPrice: string,
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>,
  paramFilter: string,
  setParamFilter: React.Dispatch<React.SetStateAction<string>>,
  refetch: boolean,
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>
}>({
  minPrice: "",
  setMinPrice: undefined as unknown as React.Dispatch<React.SetStateAction<string>>,
  maxPrice: "",
  setMaxPrice: undefined as unknown as React.Dispatch<React.SetStateAction<string>>,
  paramFilter: "",
  setParamFilter: undefined as unknown as React.Dispatch<React.SetStateAction<string>>,
  refetch: true,
  setRefetch: undefined as unknown as React.Dispatch<React.SetStateAction<boolean>>
})

export const DashboardProvider = ({children}: {children: ReactNode}) => {
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("999999999")
  const [paramFilter, setParamFilter] = useState<string>("")
  const [refetch, setRefetch] = useState(true)
  const contextValue = {
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    paramFilter,
    setParamFilter,
    refetch,
    setRefetch
  }
  
  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  )
}
