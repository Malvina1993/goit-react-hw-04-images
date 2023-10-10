import React, { Component } from 'react'
import { Hourglass } from 'react-loader-spinner'


export default class Loader extends Component {
  render() {
    return (
      <div>
        <Hourglass
          visible={true}
          height="40"
          width="40"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      </div>
    )
  }
}
