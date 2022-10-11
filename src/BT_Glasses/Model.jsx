import React from 'react'
const Model = ({ glasses }) => {
  console.log(glasses);
  if (!glasses) {
    return (
      <div className='row'>
        <div className="col-12 text-center mb-5">
          <img src="./glassesImage/model.jpg" alt="" />
        </div>
      </div>
    )             
  }
  return (
    <div className='row'>
      <div className="col-12 text-center mb-5 position-relative">
        <img src="./glassesImage/model.jpg" alt="" />
      </div>
      <div className="position-absolute position-glasses">
        <img src={glasses.url} alt="" />
      </div>
    </div>
  )
}

export default Model