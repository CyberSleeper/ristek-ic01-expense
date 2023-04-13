import { FilterIcon } from "@icons"
import Image from "next/image"

const Filters = () => {
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
              // onChange={filterHandler}
              value="Housing"
              id="2c056901-505d-4fb4-9bba-55aee6614f5f"
            />
            <Image src="/assets/images/HouseImage.svg" width={20} height={20} alt="" />
            <span>Housing</span>
          </label>
        </li>
        <li>
          <label htmlFor="food" className="flex gap-1">
            <input
              type="checkbox"
              // onChange={filterHandler}
              value="Food"
              id="1cc6910c-2199-4161-9cc2-4afbce992c62"
            />
            <Image src="/assets/images/FoodImage.svg" width={20} height={20} alt="" />
            <span>Food</span>
          </label>
        </li>
        <li>
          <label htmlFor="transportation" className="flex gap-1">
            <input
              type="checkbox"
              // onChange={filterHandler}
              value="Transportation"
              id="6a1f0505-a285-4481-92df-ffca07bbf76e"
            />
            <Image src="/assets/images/TransportationImage.svg" width={20} height={20} alt="" />
            <span>Transportation</span>
          </label>
        </li>
        <li>
          <label htmlFor="personal_spending" className="flex gap-1">
            <input
              type="checkbox"
              // onChange={filterHandler}
              value="Personal Spending"
              id="7aa0a831-ddcc-4a95-b4b6-8ae4c236beaf"
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