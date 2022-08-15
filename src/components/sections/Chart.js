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
          width={900}
          height={550}
          series={[67,10,10,7.5,5]}
          options={{
            labels:['Public','Burn','Team','Events','Marketing'],
            legend:{fontSize:'22px',itemMargin:{horizontal:10,vertical:5}},
            responsive:[ 
                {
                  breakpoint: 1000,
                  options: {
                    chart: {
                      width: 400,
                      height: 400 
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true
                      }
                    },

                    legend: {
                      position: "bottom",
                      fontSize:'12px'
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