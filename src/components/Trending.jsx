import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Row } from 'antd';


const Trending = () => {
    const [dataFetch, setDataFetch] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                console.log(response.data.coins);
                setDataFetch(response.data.coins);
            } catch (error) {

            }
        }
        fetchData()
    }, [])


    return (
        <>
            <Row>
                {dataFetch?.map((data) => (
                    <Col span={4}>
                        <div key={data.item.id} style={{ border: "2px solid green", margin:"2px", padding:"2px" }}>
                            <div>{data.item.name}</div>
                            <img src={data.item.large} alt="" width={50} />
                            <p>Price : {data.item.price_btc}</p>
                            <p>market_cap_rank : {data.item.market_cap_rank}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            {/* {dataFetch?.map((data) => (
                <div key={data.item.id} style={{ borderBottom: "2px solid green" }}>
                    <div>{data.item.name}</div>
                    <img src={data.item.large} alt="" width={50} />
                    <p>Price : {data.item.price_btc}</p>
                    <p>market_cap_rank : {data.item.market_cap_rank}</p>
                </div>

            ))} */}
        </>
    )
}

export default Trending