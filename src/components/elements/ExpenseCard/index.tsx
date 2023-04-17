import HouseImage from '@images/HouseImage.svg'
import Image from "next/image"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CurrencyDollarIcon } from '@icons'
import { currencyFormatter } from '@utils/currencyFormatter'

const ExpenseCard = ({id}: ExpenseProps) => {
  const [detailData, setDetailData] = useState<DetailProps>()
  useEffect(() => {
    axios.get(`https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses/${id}`)
    .then(res => {
      console.log(res.data)
      setDetailData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [id])
  return (
    <div className="bg-white h-24 p-5 flex rounded-lg items-center justify-between">
      <div className='flex'>
        <Image src={`/assets/images/${detailData?.category.id}.svg`} width={50} height={50} alt="" />
        <div className='ml-4'>
          <div>
            {detailData?.category.name}
          </div>
          <div className='text-xl font-medium'>
            {detailData?.name}
          </div>
        </div>
      </div>
      <div className='flex items-center m-8'>
        <CurrencyDollarIcon stroke='#19A7CE'/>
        <span className="text-[#19A7CE] font-bold text-xl mx-2">
          {currencyFormatter(detailData?.amount)}
        </span>
      </div>
    </div>
  )
}

export default ExpenseCard