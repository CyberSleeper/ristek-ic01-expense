import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import ExpenseCard from "src/components/elements/ExpenseCard"

const ExpensesSection = () => {
  const page = 1
  const [expensesData, setExpensesData] = useState<APIProps>()
  useEffect(() => {
    axios.get(`https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses?page=${page}`)
    .then(res => {
      console.log(res.data)
      setExpensesData(res.data)
    }).catch(err => {
      console.log(err)
    })
  })
  return (
    <section>
      <ul className="h-[70vh] overflow-y-scroll scrollbar-hide flex flex-col gap-5">
        {
          expensesData?.data.map((val, index) => (
            <Link href={`detail/${val.id}`}>
              <ExpenseCard key = {index} {...val}/>
            </Link>
          ))
        }
      </ul>
    </section>
  )
}

export default ExpensesSection