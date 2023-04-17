import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

import ExpenseCard from "src/components/elements/ExpenseCard"
import { useRouter } from "next/router"
import { DEFAULT_MIN_VERSION } from "tls"

const ExpensesSection = () => {
  const page = 1
  const [expensesData, setExpensesData] = useState<APIProps>()
  const router = useRouter();
  useEffect(() => {
    const { category_id, min_price, max_price } = router.query;
    console.log(min_price)
    const urlTarget = `https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses?page=${page}`
      + (!category_id ? "" : `&category_id=${category_id}`)
      + (!min_price ? "" : `&min_price=${min_price}`)
      + (!max_price ? "" : `&max_price=${max_price}`)
    ;

    console.log(category_id)
    axios.get(urlTarget)
    .then(res => {
      console.log(res.data)
      setExpensesData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [router])
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