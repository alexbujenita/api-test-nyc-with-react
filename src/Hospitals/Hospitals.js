import React, { Component } from 'react';
import './Hospitals.css'
//
class Hospitals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
    this.showType = this.showType.bind(this)
  }

  showType () {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    const { visible } = this.state
    const { facility_name, facility_type, phone, borough } = this.props.hospObj
    return (
      <div className='hospitalCard'>
        <h1 className='hospital-name'>{facility_name}</h1>
        <p>This hospital is located in {borough}</p>
        <p>For appointments please call {phone}</p>
        <p className={visible ? "visible" : "hidden"}>This facility is a {facility_type}</p>
        <button className='hospButton' onClick={this.showType}>Facility Type</button>
      </div>
    )
  }
}



// const Hospitals = ({ hospObj }) => {
//   const { facility_name, facility_type, phone, borough } = hospObj
//   return (
//     <div className='card'>
//     <h1 className='hospital-name'>{facility_name}</h1>
//     <p>This hospital is located in {borough}</p>
//     <p>For appointments please call {phone}</p>
//     <p>This facility is a {facility_type}</p>
//     <button>Facility Type</button>
//     </div>
//   )
// }
//
// const Hospitals = (props) => {
//   console.log(props.hospObj)
//   return (
//     <div>
//     <h1 className='hospital-name'>{props.hospObj.facility_name}</h1>
//     <p>This hospital is located in {props.hospObj.borough}</p>
//     <p>For appointments please call {props.hospObj.phone}</p>
//     <p>This facility is a {props.hospObj.facility_type}</p>
//     <button>Facility Type</button>
//     </div>
//   )
// }

export default Hospitals;
