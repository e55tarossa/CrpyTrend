import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Typography } from 'antd';
import Loader from './Loader';
const { Title } = Typography; //Typography.title


const Trending = () => {
    const [dataFetch, setDataFetch] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                console.log(response.data.coins);
                setDataFetch(response.data.coins);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    if (!dataFetch?.length) return <Loader />

    return (
        <>
            <div className='flex items-center mt-10'>
                <Title level={2} className="mr-2">Top-8 trending coins on</Title>
                <img alt="CoinGecko Logo" height={100} width={130} class="darkhide" src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"></img>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-10 gap-x-14 mt-5 mb-5'>
                {dataFetch?.map((data) => (
                    <div key={data.item.id} class="p-6 mx-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className='flex justify-between'>
                            <img src={data.item.large} alt="" width={50} />
                            <span>#{data.item.coin_id}</span>
                        </div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.item.name}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">#Ranking : {data.item.market_cap_rank || "Unknow"}</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">#Price : {data.item.price_btc || "Unknow"}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Trending