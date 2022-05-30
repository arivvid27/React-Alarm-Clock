import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class AlarmClock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: '',
      alarmTime: ''
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
    1000)
  }

  componentWillUnmount(){
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime(){
    this.setState({
      currentTime1: new Date().toLocaleTimeString('en-US', { hour12: false }),
	  currentTime2: new Date().toLocaleTimeString('en-US', { hour12: true })
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ':00'
    this.setState({
      alarmTime: inputAlarmTimeModified
    })
  }

  checkAlarmClock(){
    if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if(this.state.currentTime === this.state.alarmTime) {
        alert("its time!");
      } else {
        console.log("not yet");
      }
    }   
  }

  render() {
    return (
      <div className="alarm-clock">
		  <div className="title">
			    <h1>React Alarm Clock</h1>			  
		  </div>
		  <div className="currentTime">
        <h2>It is {this.state.currentTime1}.</h2>
		<h2>It is {this.state.currentTime2}.</h2>
			</div>
		  <div className="message">
        <h2>{this.alarmMessage}
        </h2>
			</div>
		  <div className="input">
        <form>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
		</div>
      </div>
    );
  }
}

ReactDOM.render(
    <AlarmClock />,
    document.getElementById('alarm-clock')
);

export default App.jsx