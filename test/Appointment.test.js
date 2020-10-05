import React from 'react'
import ReactDOM from 'react-dom'
import Appointment from '../src/components/Appointment'

describe('Appointment', () => {

  it('renders the customer first name', () => {
    const customer = { firstName: 'Brian'}
    const component = <Appointment customer={customer} />
    const container = document.createElement('div')

    ReactDOM.render(component, container)
    expect(container.textContent).toMatch('Brian')
  })

  it('renders another customer first name', () => {
    const customer = { firstName: 'Casey' }
    const component = <Appointment customer={customer}/>
    const container = document.createElement('div')
  

    ReactDOM.render(component, container)
    expect(container.textContent).toMatch('Casey')
  })

})