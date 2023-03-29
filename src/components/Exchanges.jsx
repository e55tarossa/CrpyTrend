import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import Loader from './Loader';
import axios from 'axios';

const { Text } = Typography;
const { Panel } = Collapse;


const Exchanges = () => {

  const [dataFetch, setDataFetch] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
        console.log(response?.data);
        setDataFetch(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  if(!dataFetch) return <Loader/>

  console.log(dataFetch);


  return (
    <>
      <Row>
        <Col span={4}> Exchanges Name</Col>
        <Col span={4}> 24h Trade Volume</Col>
        <Col span={4}> 24h Trade Volume Normalized</Col>
        <Col span={4}> Trust Score</Col>
        <Col span={4}> Year Established</Col>
      </Row>
      {dataFetch?.map((exchange) => (
        <>
          <Row key={exchange?.id} className="p-10">
            <Col span={4}>
              <Text><strong>{exchange?.trust_score_rank}.</strong></Text>
              <Avatar className="exchange-image" src={exchange?.image} />
              <Text><strong>{exchange?.name}</strong></Text>
            </Col>
            <Col span={4}>{millify(exchange?.trade_volume_24h_btc)}</Col>
            <Col span={4}>{millify(exchange?.trade_volume_24h_btc_normalized)}</Col>
            <Col span={4}>{exchange?.trust_score}</Col>
            <Col span={4}>{exchange?.year_established}</Col>
          </Row>
        </>
      ))}
      {/* <Row>
        {dataFetch?.map((exchange) => (
          <Col span={24}>
          <Collapse >
          <Panel
                key={exchange?.id}
                showArrow={false}
                header={(
                  <Row key={exchange?.id}>
                    <Col span={12}>
                       <Text><strong>{exchange?.trust_score_rank}.</strong></Text> 
                      <Avatar className="exchange-image" src={exchange?.image} />
                       <Text><strong>{exchange?.name}</strong></Text> 
                    </Col>
                    <Col span={12}>{exchange?.trade_volume_24h_btc}</Col>
                    <Col span={12}>{millify(exchange?.trade_volume_24h_btc_normalized)}</Col> 
                      <Col span={12}>{exchange?.year_established}</Col> 
                  </Row>
                  )}
              >
                {HTMLReactParser("Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut voluptatum tempore odio fugit eius? Necessitatibus ullam enim velit, tenetur distinctio corrupti aperiam neque nostrum libero, nam reprehenderit unde totam." || '')}
              </Panel>
          </Collapse>
        </Col>
        ))}

      </Row> */}
    </>
  )
}

export default Exchanges