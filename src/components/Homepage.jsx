import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import axios from 'axios';
const { Title } = Typography; //Typography.title

const Homepage = () => {
  // const { data, isFetching} = useGetCryptosQuery(10);
  // const globalStats = data?.data?.stats;
  // const [dataFetch, setDataFetch] = useState();

  // console.log(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //         headers: {
  //           'X-CMC_Pro_API_Key': 'db64aa7a-d13e-4791-b472-bb1e84ad46d9',
  //         },
  //       });
  //       setDataFetch(response.data);
  //       console.log(response.data);
  //     } catch ( error ) {

  //     }
  //   }
  //   fetchData()
  // },[])



  // if(isFetching) return <Loader/>

  return (
    <>
      <Title level={2} className="mt-10">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats?.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} /></Col> */}
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats?.exchanges)} /></Col> */}
        {/* <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col> */}
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={1} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={1} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={1} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={1} /></Col>
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies"  value={1} /></Col> */}
        <Col span={12}><Statistic title="Total Markets" value={1} /></Col>
      </Row>
      <div className="flex justify-between items-center mt-5">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="mr-2"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="flex justify-between items-center mt-5">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="mr-2"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage