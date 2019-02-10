import React, { Component } from 'react';
import ny from './images/nyc.jpg'
import Searchbar from './Searchbar/Searchbar.js'
import Hospitals from './Hospitals/Hospitals.js'
import IpPop from './IpPop/IpPop.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      filtered: {},
      inverted: false,
      clickcount: 0,
    };
    this.invert = this.invert.bind(this);
    this.counterIncreaseCallback = this.counterIncreaseCallback.bind(this);
    this.myCallback = this.myCallback.bind(this);
  }

  componentDidMount () {
    fetch('https://data.cityofnewyork.us/resource/w7a6-9xrz.json')
    .then(response => response.json())
    .then(ccc => this.setState({ data: ccc, filtered: ccc}));
  }

  counterIncreaseCallback () {
    this.setState({
      clickcount: this.state.clickcount + 1
    });
  }

  myCallback (dataFromSearchbar) {
    if (!dataFromSearchbar) {
      this.setState({filtered: this.state.data})
    } else {
      const filtered = this.state.data
      .filter(hosp => hosp.facility_name
        .toLowerCase().includes(dataFromSearchbar
          .toLowerCase()));
          this.setState({
            filtered
          });
        }
      }

      // componentDidUpdate () {
      //   console.log(this.state.ip);
      // }


      invert () {
        this.setState({
          inverted: !this.state.inverted
        });
        if(this.state.clickcount !== 0) {
          this.setState({
            clickcount: 0,
            inverted: false
          })
          alert('Back to Earth, counter RESET!');
        } else {
          this.setState({
            clickcount: 666,
            inverted: true
          })
          alert('Welcome to Hell!');
        }
      }

      render() {
        const { inverted, filtered, clickcount } = this.state
        console.log(this.state.clickcount);
        return (
          <div className="App">
            <img className={inverted ? 'invertThis' : ''} src={ny} alt='React Sucks' onDoubleClick={this.invert} />
            <Searchbar callFromApp={this.myCallback} />
            <IpPop clickcountAttr={clickcount}
                   clickcountSent={this.state.clickcount}
                   callFromApp={this.counterIncreaseCallback} />
            <div className='container'>
              {
                filtered.length ? filtered.map((hospital, index) => <Hospitals key={index} hospObj={hospital} />) : <h1>Hospital not found</h1>
            }
          </div>
        </div>
      );
    }
  }

  export default App;

  /* to render in App.js


  */
