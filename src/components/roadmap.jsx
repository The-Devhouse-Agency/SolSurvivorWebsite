import {ReactComponent as Line} from '../images/Line1.svg';
import {ReactComponent as Ellipse} from '../images/Ellipse.svg';

export const Roadmap = (props) => {
  return (
    
    <header >
      <div className='roadmap'>
        <div className='overlay2'>
      
          <div className='container' >
            <div className='row intro-text'>
                <h1 id="roadmap">Roadmap</h1>

       
            </div>
          </div>
            
            <div className='container ' style={{marginBottom:'50px'}} >
              <div id="mobile-row" class="row justify-content-md-center justify-content-xs-center">

              <div id="mobile-roadmap" class="col-md-5 order-sm-2 mobile-roadmap">
                  <h3 className="timeline-text" style={{textAlign:'right'}}>Playable Beta at Release, Immediate Utility, Companion Mint, Token</h3>
                  <p className="timeline-text" style={{textAlign:'right'}}>A full, playable beta version of Sol Survivor will be released shortly after minting completes. This beta will be the base the SurvivorDAO uses to build the game full from! The beta will be continuously updated as bugs are fixed in a gamified, and rewarding bug finding system. Holders will be able to play, report bugs, and do it in a fun way where they're rewarded for it! </p>
              </div>

              <div class="col-md-2 col-xs-2 order-2 order-sm-1">
                <div class="row timeline">
                  <Ellipse className="svg" />
                </div >
                <div className="row timeline">
                  <Line />
                </div>
              </div>

              <div class="col-md-5 col-xs-0 order-3">
              
              </div>
              </div>



              <div class="row justify-content-md-center">
                
                <div class="col-md-5 col-xs-0">
                </div>


                <div class="col-md-2 col-xs-2 justify-content-center">
                  <div className="row timeline">
                    <Ellipse className='svg'/>
                  </div>
                  <div className="row timeline">
                    <Line />
                  </div>
              
                </div>

                <div class="col-md-5">
                    
                  <h3 className="timeline-text" >Sol Survivor Comic Series, Game Updates, Merch, Branding</h3>

                  <p className="timeline-text" > Game Updates:
                  As mentioned above, the Sol Survivor beta will be continuously updated. In Q2 after the initial gamified bug bounty, we will begin introducing new game content and features. Some of these updates will include:  New Weapons, Features, Maps, Companions
                  
                  Sol Survivor: The Comic</p>
                </div>
              </div>





              <div class="row justify-content-md-center">
                <div id="mobile-roadmap2" class="col-md-5 ">
                  <h3 className="timeline-text" style={{textAlign:'right'}}>The Final Game</h3>
                
                  <p className="timeline-text" style={{textAlign:'right'}}> We intend to have the full Sol Survivor game, created with the community, full ready for release on Steam... and then what?</p>
                </div>
                <div class="col-md-2 col-xs-2 justify-content-center">
                <div className="row timeline">
                <Ellipse className="svg" id="mobile-final"/>
                    </div>

                </div>
                <div class="col-md-5 col-xs-0">
              
                </div>
              </div>

          </div>
        </div>
      </div>
    </header>
  )
}
