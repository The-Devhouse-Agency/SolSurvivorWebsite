import {ReactComponent as Discord} from '../images/discord.svg';
import {ReactComponent as Twitter} from '../images/twitter.svg';


export const Contact = (props) => {

  return (
    <div>
      <div id='contact'>
        <div className='container'>
   
            <div className='row'>
              
              <div className='social'>
                <ul>
                  <li>
                    <a href="https://www.discord.gg/SERs">
                      <Discord/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/SolSurvivorGame">
                    <Twitter/>
                    </a>
                  </li>
                </ul>  
                <div className='container text-center'>
                <p>2022 The Devhouse Agency. All rights reserved.
                  </p>
                </div>
              
           
              </div>
            </div>
        
        </div>
      </div>

    </div>
  )
}
