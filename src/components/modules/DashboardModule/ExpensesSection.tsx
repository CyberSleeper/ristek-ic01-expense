import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import ExpenseCard from "src/components/elements/ExpenseCard"
import { useRouter } from "next/router"
import Pagination from '@mui/material/Pagination';

const ExpensesSection = () => {
  const [expensesData, setExpensesData] = useState<APIProps>()
  const router = useRouter();
  const { page } = router.query
  const [curPage, setCurPage] = useState(!page ? 1 : +page)
  useEffect(() => {
    const { category_id, min_price, max_price } = router.query;
    console.log(min_price)
    const urlTarget = `https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses?page=${curPage}`
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

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPage(value)
    router.replace({
      query: { ...router.query, page: value }
    })
  };

  return (
    <section>
      <ul className="h-[70vh] overflow-y-scroll flex flex-col gap-5">
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
      <div className="mt-8 flex justify-center">
        <Pagination
          page={curPage}
          count={expensesData?.paging.pageCount}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
    </section>
  )
}

export default ExpensesSection