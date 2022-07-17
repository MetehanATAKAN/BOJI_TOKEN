import React from 'react'
import  Chart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import SectionHeader from './partials/SectionHeader';



const Chart2 = () => {

    const sectionHeader = {
        title: 'TOKEN DISTRIBUTION',
      };
    
  return (
    <div className='container'>
        <Row>
            <Col md={12}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Chart
          type='pie'
          width={700}
          height={550}
          series={[67,10,10,7.5,5]}
          options={{
            labels:['Public','Burn','Team','Events','Marketing'],
            responsive:[ 
                {
                  breakpoint: 1000,
                  options: {
                    plotOptions: {
                      bar: {
                        horizontal: true
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ]
              
          }}
          responsive={{
            breakpoint: undefined,
          }}
          />
          </Col>
          </Row>
    </div>
  )
}

export default Chart2