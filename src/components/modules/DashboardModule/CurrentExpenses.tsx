import { CurrencyDollarIcon } from "@icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { currencyFormatter } from "@utils/currencyFormatter"

const CurrentExpenses = () => {
  const [expensesTotal, setExpensesTotal] = useState<any>()
  useEffect(() => {
    axios.get(`https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses/total`)
    .then(res => {
      console.log(res.data)
      setExpensesTotal(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="bg-white mb-5 px-5 py-4 w-full rounded-lg">
      <h1 className="font-bold text-2xl">
        Current Expenses
      </h1>
      <div className="mt-2 flex items-center gap-2">
        <CurrencyDollarIcon stroke="#19A7CE"/>
        <h2 className="text-[#19A7CE] font-bold text-2xl">
          {currencyFormatter(+expensesTotal?.total)}
        </h2>
      </div>
    </div>
  )
}

export default CurrentExpenses