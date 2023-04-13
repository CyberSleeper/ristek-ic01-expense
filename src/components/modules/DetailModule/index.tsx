import { FaArrowLeft } from "react-icons/fa"
import { useRouter } from "next/router";
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from "axios";
import Image from "next/image";
import { CurrencyDollarIcon } from "@icons";
import { currencyFormatter } from "@utils/currencyFormatter";

export const DetailModule: React.FC = () => {
  const routerQuery = useRouter().query;
  const [detailData, setDetailData] = useState<DetailProps>()
  useEffect(() => {
    axios.get(`https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses/${routerQuery.id}`)
    .then(res => {
      console.log(res.data)
      setDetailData(res.data)
    }).catch(err => {
      console.log(err)
    })
  })
  const createdAt = new Date(detailData?.created_at!);
  return (
    <>
      <button type="button">
        <Link href="/" className="flex items-center text-white font-bold gap-2">
            <FaArrowLeft size={25}/>
            <span className="text-3xl">Back</span>
        </Link>
      </button>
      <article className="bg-white w-1/2 px-12 py-16 mx-auto rounded mt-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            {detailData?.category.name === "Food" && <Image src="/assets/images/FoodImage.svg" width={50} height={50} alt="" />}
            {detailData?.category.name === "Transportation" && <Image src="/assets/images/TransportationImage.svg" width={50} height={50} alt="" />}
            {detailData?.category.name === "Housing" && <Image src="/assets/images/HouseImage.svg" width={50} height={50} alt="" />}
            {detailData?.category.name === "Personal Spending" && <Image src="/assets/images/PersonalSpendingImage.svg" width={50} height={50} alt="" />}
            <h1>
              {detailData?.name}
            </h1>
          </div>
          <div className="flex font-bold items-center gap-1">
            <CurrencyDollarIcon stroke="#19A7CE" size="w-[26px] h-[26px]"/>
            <span className="text-[#19A7CE] text-xl mx-2">
              {currencyFormatter(detailData?.amount)}
            </span>
          </div>
        </div>

        <hr className="my-5 h-[1px] border-black bg-black"/>

        <div className="flex flex-col gap-5">
          <span className="font-medium">
            Transaction Details
          </span>
          <div className="justify-between flex">
            <span className="">ID</span>
            <span className="font-bold">{detailData?.id}</span>
          </div>
          <div className="justify-between flex">
            <span>Type</span>
            <span className="font-bold">{detailData?.category.name}</span>
          </div>
          <div className="justify-between flex">
            <span>Time</span>
            <span className="font-bold">{createdAt.toLocaleString()}</span>
          </div>
        </div>

        <hr className="my-5 h-[1px] border-black bg-black"/>

        <div>
          <div className="font-medium mb-4">
            Notes
          </div>
          <div className="text-sm">
            {detailData?.description}
          </div>
        </div>
      </article>
    </>
  )
}