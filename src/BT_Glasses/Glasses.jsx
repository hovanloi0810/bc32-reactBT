import React, { Component } from 'react'
import data from './data.json'
import GlassesList from './GlassesList'
import Model from './Model'
import './style.css'

export default class Glasses extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selectGlasses: null,
    }
  }
  
  glassesSelect = (glasses) => {
    this.setState({ selectGlasses: glasses });
  }
  
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Try glasses app online</h1>
        
        <div className="">
          <Model glasses={this.state.selectGlasses} />
          <GlassesList onSelect={this.glassesSelect} data={data}/>
        </div>
      </div>
    )
  }
}
