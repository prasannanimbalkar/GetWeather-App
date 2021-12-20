import React from 'react'

const weather = (props) => {
  return (
    <div>
      <div className='container'>
        <div className='cards'>
          <h1>{props.city}</h1>
          <h5 className='py-4'></h5>
          <i className={`wi ${props.favicon} display-1`}></i>
          <h5>
            {props.cel ? <h1 className='py-2'>{props.cel}&deg;</h1> : null}
          </h5>

          {minmaxtemp(props.min, props.max)}
          <h4 className='py-3'>{props.description}</h4>
        </div>
      </div>
    </div>
  )
}

function minmaxtemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className='px-4'>{min}&deg;</span>
        <span className='px-4'>{max}&deg;</span>
      </h3>
    )
  }
}

export default weather
