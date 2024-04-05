

import React from 'react'
import TokenGridBurn from './TokenGridBurn'




class DisplayToBurn extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = this.initialState()
    
    
  }
  initialState() {
    return {
      account: this.props.account,
      
    }
  }
  componentDidMount() {
        
        
 
  }

  render() {
    return (
      <div>
      <TokenGridBurn productPage={this.props.productPage} error={this.props.error}></TokenGridBurn>
      <div id="nfts-container">
        <div className='waiting-parent'>
          <h2 className='waiting-text'>Reading wallet...</h2>
        </div>    
      </div> 
      </div>
    )
  }
}

export default DisplayToBurn