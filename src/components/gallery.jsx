import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' >
      <div className='container'>
        <div className='row '>
        <div className="col-xs-12 col-md-6 align-items-end" >
            <div className='portfolio-items' style={{maxWidth:'100%'}}>
              {props.data
                ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-sm-6 col-xs-4 col-md-4 col-lg-4'>
                    <Image title={d.title}  smallImage={d.smallImage} />
                  </div>
                ))
                : 'Loading...'}
            </div>
          </div>
          <div class="col-xs-12 col-md-6 align-items-end gallery-text" >
              {/* <video autoplay muted loop  >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type='video/mp4'/>
              </video> */}
              
                  <h1 style={{ color: 'black', textAlign: 'left' }}>
                  Immediate Utility, Safe House & Companion NFT
                    <span></span>
                  </h1>
                  <p style={{ color: 'black', textAlign: 'left'}}>Every project has staking now, but ours is a little different. Shortly after mint, you will have the option to stake your survivor in a safe house for a set period of time, after that time is up. He returns with a companion for you... after all, you wouldn't want to go through the zombie apocalypse alone, would you? </p>
          
            </div>
        </div>
      </div>
    </div>
  )
}
