import axios from "axios"
import Link from "next/link"
import { useEffect, useState, useContext } from "react"
import { DashboardContext } from "src/components/Context/DashboardContext"
import ExpenseCard from "src/components/elements/ExpenseCard"

const ExpensesSection = () => {
  const { refetch, setRefetch, paramFilter, minPrice, maxPrice } = useContext(DashboardContext)
  const page = 1
  const [expensesData, setExpensesData] = useState<APIProps>()
  useEffect(() => {
    if (refetch) {
      setRefetch(false);
      const urlTarget = `https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses?page=${page}`
        + (paramFilter !== "" ? `&category_id=${paramFilter}` : "")
        + (minPrice !== "" ? `&min_price=${minPrice}` : "")
        + (maxPrice !== "" ? `&max_price=${maxPrice}` : "")
      ;
      console.log(urlTarget)
      axios.get(urlTarget)
      .then(res => {
        console.log(res.data)
        setExpensesData(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [paramFilter, expensesData, minPrice, maxPrice])
  return (
    <section>
      <ul className="h-[70vh] overflow-y-scroll scrollbar-hide flex flex-col gap-5">
        {
          expensesData?.data.map((val, index) => (
            <li>
              <Link href={`detail/${val.id}`}>
                <ExpenseCard key = {index} {...val}/>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default ExpensesSection