import { FilterIcon } from "@icons"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { DashboardContext } from "src/components/Context/DashboardContext"
import { FilterProps } from "./interface"

const Filters = () => {
  const foodId = "f12399a7-302c-452a-89d8-5ec21c4514e8";
  const transportationId = "d8e6963a-b544-4c31-bc90-6bb3e15203e2";
  const housingId = "afc106af-2790-4df0-8ed2-473d6ef4b595";
  const personalSpendingId = "6bcd7235-717e-43b9-bed1-13e0b04e4c0b";

  const ids = {
    food: foodId,
    transportation: transportationId,
    housing: housingId,
    personalSpending: personalSpendingId,
  }

  const { paramFilter, setParamFilter, setRefetch } = useContext(DashboardContext)
  const [stateFilter, setStateFilter] = useState<FilterProps>({
    food: false,
    personalSpending: false,
    transportation: false,
    housing: false
  })

  useEffect(() => {
    const urlFilter = (stateFilter.housing ? `,${housingId}` : "") + (stateFilter.food ? `,${foodId}` : "") + (stateFilter.transportation ? `,${transportationId}` : "") + (stateFilter.personalSpending ? `,${personalSpendingId}` : "")
    if (urlFilter.charAt(0) === ',') {
      setParamFilter(urlFilter.substring(1))
    } else {
      setParamFilter(urlFilter)
    }
    setRefetch(true)
  }, [stateFilter])

  return (
    <div className="bg-white w-full rounded-lg mt-5 p-5">
      <div className="flex items-center gap-2">
        <FilterIcon />
        <h1 className="font-bold text-xl">
          Filters
        </h1>
      </div>
      <p className="font-bold py-2">
        Filter by Transaction Category
      </p>
      <ul className="flex flex-col gap-1">
        <li>
          <label htmlFor="housing" className="flex gap-1">
            <input
              type="checkbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStateFilter({...stateFilter, housing: e.target.checked})
              }}
              value="Housing"
              id={housingId}
            />
            <Image src="/assets/images/HouseImage.svg" width={20} height={20} alt="" />
            <span>Housing</span>
          </label>
        </li>
        <li>
          <label htmlFor="food" className="flex gap-1">
            <input
              type="checkbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStateFilter({...stateFilter, food: e.target.checked})
              }}
              value="Food"
              id={foodId}
            />
            <Image src="/assets/images/FoodImage.svg" width={20} height={20} alt="" />
            <span>Food</span>
          </label>
        </li>
        <li>
          <label htmlFor="transportation" className="flex gap-1">
            <input
              type="checkbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStateFilter({...stateFilter, transportation: e.target.checked})
              }}
              value="Transportation"
              id={transportationId}
            />
            <Image src="/assets/images/TransportationImage.svg" width={20} height={20} alt="" />
            <span>Transportation</span>
          </label>
        </li>
        <li>
          <label htmlFor="personal_spending" className="flex gap-1">
            <input
              type="checkbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStateFilter({...stateFilter, personalSpending: e.target.checked})
              }}
              value="Personal Spending"
              id={personalSpendingId}
            />
            <Image src="/assets/images/PersonalSpendingImage.svg" width={20} height={20} alt="" />
            <span>Personal Spending</span>
          </label>
        </li>
      </ul>

      <hr className="my-5 h-[1px] border-black bg-black"/>

      <span className="font-bold">Filter by Expenses Range</span>

      <div className="flex gap-3 mt-4 justify-center">
        <div className="block">
          <label htmlFor="min_price" className="block text-center">
          <span><em>Min</em></span>
          </label>
          <input
            type="text"
            id="min_price"
            name="min_price"
            className="block w-24 border-solid border-black border-2 rounded-md"
          />
        </div>
        <hr className="my-5 mt-9 h-[1px] w-10 border-black bg-black"/>
        <div className="block">
          <label htmlFor="max_price" className="block text-center">
            <span><em>Max</em></span>
          </label>
          <input
            type="text"
            id="max_price"
            name="max_price"
            className="block w-24 border-solid border-black border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters