import React from 'react'
import Modal from 'react-bootstrap/Modal'
import '../IpPop/IpPop.css'
import { alertSpam } from '../utils/window-writer.js'


class IpPopModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      className: 'bottom-right',
      ip: {},
      show: false,
    };
    this.showIP = this.showIP.bind(this);
  }

  componentDidMount () {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(resolved => this.setState({ ip: resolved }))
  }


  showIP() {
    this.setState({ show: !this.state.show });

    if(this.props.clickcountSent === 6) {
      alert("That's it mate! Search how to listen to your browser");
      window.location.replace("http://google.com");
    } else if(this.props.clickcountSent === 4){
      alert("SLOW DOWN!!!");
    }

    if(this.props.clickcountSent === 666) {
  setTimeout(alertSpam, 1000);

  const call = () => window.location.replace('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6e73a6b8-8288-40ca-9197-1474bb806cb8/d3hz2py-7d7efa0d-e58b-4b5c-97ed-2df59ce894e9.jpg');
  setTimeout(call, 7000);

}


    this.props.callFromApp();
    console.log(this.state.ip);
    if(this.state.className === 'bottom-right') {
      this.setState({
        className: 'clicked'
      })
    } else {
      this.setState({
        className: 'bottom-right'
      })
    }
  }

  render () {
    return (
      <div className={this.state.className} onClick={this.showIP}>
        {this.state.className === 'bottom-right' ?
        <h3>Click here for your IP address</h3>
        : <Modal  show={this.state.show} onHide={this.showIP}>
        <Modal.Body >
          <p className="display-3">Your IP is {this.state.ip.ip}</p>
          </Modal.Body>
          </Modal>}
      </div>
    );
  }
};


export default IpPopModal
