import React from 'react'
import ReactDOM from 'react-dom'
import { 
    Appointment,
    AppointmentsDayView        
} from '../src/Appointment'

describe('Appointment', () => {
    let container
    let customer
  
    beforeEach(() => {
        container = document.createElement('div')
    })

    const render = component => ReactDOM.render(component, container)

    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' }
        render(<Appointment customer={customer}/>)
        expect(container.textContent).toMatch('Ashley')
    })

    it('renders the customer first name', () => {
        customer = { firstName: 'Jordan' }
        render(<Appointment customer={customer}/>)
        expect(container.textContent).toMatch('Jordan')
    })
});

describe('AppointmentDayView', () => {
    let container

    beforeEach(() => {
        container = document.createElement('div')
    })

    const render = component => ReactDOM.render(component, container)

    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={{}}/>)
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })
})