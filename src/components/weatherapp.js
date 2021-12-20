import React from 'react'
import './forms.css'

const Form = (props) => {
  return (
    <div className='container'>
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweatherdetails}>
        <div className='row'>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              name='city'
              autoComplete='off'
              placeholder='City'
            ></input>
          </div>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              name='country'
              autoComplete='off'
              placeholder='Country'
            ></input>
          </div>
          <div className='col-md-3 mt-md-0 text-md-left'></div>
          <button className='btn btn-primary'>Get Weather Info</button>
        </div>
      </form>
    </div>
  )
}
function error() {
  return (
    <div className='alert alert-danger mx-5' role='alert'>
      pleaser Enter Valid CityName and CountryName
    </div>
  )
}

export default Form
