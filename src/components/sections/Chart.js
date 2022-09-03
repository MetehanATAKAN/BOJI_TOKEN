import React from 'react'
import  Chart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import SectionHeader from './partials/SectionHeader';



const Chart2 = () => {

    const sectionHeader = {
        title: 'TOKEN DISTRIBUTION',
      };
    
  return (
    <div className='container' id='tokendistribution'>
        <Row>
            <Col md={12}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Chart
          type='pie'
          width={900}
          height={550}
          series={[67,7.5,10,10.2,5]}
          options={{
            labels:['Public','Events','Team','Burn','Marketing'],
            legend:{fontSize:'22px',itemMargin:{horizontal:10,vertical:5}},
            responsive:[ 
                {
                  breakpoint: 1000,
                  options: {
                    chart: {
                      width: 700,
                      height: 700 
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
                },
                {
                  breakpoint: 768,
                  options: {
                    chart: {
                      width: 550,
                      height: 550 
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
                },
                {
                  breakpoint: 578,
                  options: {
                    chart: {
                      width: 450,
                      height: 450 
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
                },
                {
                  breakpoint: 468,
                  options: {
                    chart: {
                      width: 374,
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
                },
                {
                  breakpoint: 382,
                  options: {
                    chart: {
                      width: 338,
                      height: 400 
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true
                      }
                    },

                    legend: {
                      position: "bottom",
                      fontSize:'9px'
                    }
                  }
                },
                {
                  breakpoint: 335,
                  options: {
                    chart: {
                      width: 275,
                      height: 400 
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true
                      }
                    },

                    legend: {
                      position: "bottom",
                      fontSize:'9px'
                    }
                  }
                },
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