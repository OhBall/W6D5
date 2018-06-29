import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    let date = new Date();
    this.state = {date: date};
    this.tick = this.tick.bind(this);
  }

  tick() {
    // this.setState(
    // let hours = this.state.hours;
    // let mins = this.state.minutes;
    // let seconds = this.state.seconds;
    // let date = this.state.date;
    //
    // seconds += 1;
    //
    // if (seconds >= 60) {
    //   seconds = 0;
    //   minutes += 1;
    //   if (minutes >= 60) {
    //     minutes = 0;
    //     hours += 1;
    //     if (hours >= 24) {
    //       hours = 0;
    //     }
    //   }
    // }
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.intId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intId);
  }

  prettify(integer) {
    if (integer < 10) {
      return `0${integer}`;
    }
    return `${integer}`;
  }

  getDayOfWeek(day) {
    let days = {
      1: "Mon",
      2: "Tues",
      3: "Wed",
      4: "Thurs",
      5: "Fri",
      6: "Sat",
      7: "Sun"
    };

    return days[day];
  }

  getMonthOfYear(month) {
    let months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec"
    };

    return months[month];
  }

  render() {
    let dateO = this.state.date;

    let hours = this.prettify(dateO.getHours());
    let mins = this.prettify(dateO.getMinutes());
    let seconds = this.prettify(dateO.getSeconds());
    let date = this.prettify(dateO.getDate());
    let day = this.getDayOfWeek(dateO.getDay());
    let month = this.getMonthOfYear(dateO.getMonth());
    let year = dateO.getYear() + 1900;
    return (
      <div className='clock'>
        <h1>Clock</h1>
        <section className='clock-body'>
          <div className='time'>
            <p>Time:</p>
            <p>{hours}:{mins}:{seconds}</p>
          </div>
          <div className='date'>
            <p>Date:</p>
            <p>{day} {month} {date} {year}</p>
          </div>
        </section>
      </div>

    );
  }
}

export default Clock;
