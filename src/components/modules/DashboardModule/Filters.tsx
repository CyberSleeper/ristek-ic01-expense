import { CurrencyDollarIcon, FilterIcon } from "@icons"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

const Filters = () => {
  const [allCategory, setAllCategory] = useState<CategoryProps[]>([])
  useEffect(() => {
    axios.get("https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses/category")
    .then(res => {
      console.log(res.data)
      setAllCategory(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const router = useRouter();
  const { category_id, min_price, max_price } = router.query;

  const categoryArr = (category_id as string)?.split(",");
  const categorySet = new Set(categoryArr);

  const [categoryFilters, setCategoryFilters] = useState(categorySet);
  
  function updateFiltersCategory(checked: boolean, categoryFilter: CategoryProps) {
    if (checked) {
      setCategoryFilters((prev) => {
        const next = new Set<string>(prev).add(categoryFilter.id)
        updateParamCategory(next)
        return next
      });
    } else {
      setCategoryFilters((prev) => {
        const next = new Set<string>(prev);
        console.log(next)
        next.delete(categoryFilter.id);
        console.log(next)
        updateParamCategory(next)
        return next;
      })
    }
  }
  
  function updateParamCategory(filters: Set<string>) {
    const paramCategory = Array.from(filters).join(',')
    router.replace({
      query: { ...router.query, category_id: paramCategory },
    });
  }

  function updateFiltersMinPrice(val: number) {
    router.replace({
      query: { ...router.query, min_price: val }
    })
  }

  function updateFiltersMaxPrice(val: number) {
    router.replace({
      query: { ...router.query, max_price: val }
    })
  }

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
        {
          allCategory.map((val, index) => (
            <li>
              <div className="ms-2" key={index}>
                <label className="flex gap-1">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      updateFiltersCategory(e.target.checked, val);
                    }}
                    checked={categorySet.has(val.id)}
                  />
                  <Image src={`/assets/images/${val.id}.svg`} width={20} height={20} alt="" />
                  {val.name}
                </label>
              </div>
            </li>
          ))
        }
      </ul>

      <hr className="my-5 h-[1px] border-black bg-black"/>

      <span className="font-bold">Filter by Expenses Range</span>

      <div className="flex gap-3 mt-4 justify-center">
        <div className="block">
          <div className="text-center">
            <em>Min</em>
          </div>
          <div className="flex items-center">
            <div className="p-1 border-2 border-black border-r-0 border-r-transparent rounded-l-md">
              <CurrencyDollarIcon size="w-4 h-4" />
            </div>
            <input
              type="number"
              id="min_price"
              name="min_price"
              className="w-20 pl-1 border-solid border-y-black border-r-black border-l-0 rounded-l-none outline-none border-2 rounded-md"
              onChange={(e) => {
                updateFiltersMinPrice(e.target.valueAsNumber);
              }}
              value={!min_price ? "" : min_price}
              />
          </div>
        </div>
        <hr className="my-5 mt-9 h-[1px] w-10 border-black bg-black"/>
        <div className="block ">
          <div className="text-center">
            <em>Max</em>
          </div>
          <div className="flex items-center">
            <div className="p-1 border-2 border-black border-r-0 border-r-transparent rounded-l-md">
              <CurrencyDollarIcon size="w-4 h-4" />
            </div>
            <input
              type="number"
              id="max_price"
              name="max_price"
              className="w-20 pl-1 border-solid border-y-black border-r-black border-l-0 rounded-l-none outline-none border-2 rounded-md "
              onChange={(e) => {
                updateFiltersMaxPrice(e.target.valueAsNumber);
              }}
              value={!max_price ? "" : max_price}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters