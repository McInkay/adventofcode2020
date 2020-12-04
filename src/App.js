import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h3> <Link to="/">Al's Advent of Code </Link> </h3>
        </header>

        <Switch>
          <Route path="/day/:dayNumber">
            <DayWrapper />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div className="calendar">{[...Array(24).keys()].map((day) => <DayEntry day={day + 1} key={day}></DayEntry>)}</div>;
}

function DayEntry({day}) {
  try {
    require(`../day${day}`);
    return (
      <Link to={`/day/${day}`}>Day {day}</Link>
    )
  } catch (e) {
    return (
      <p key={day} className="disabled">Day {day}</p>
    )
  }

}

function DayWrapper() {
  let { dayNumber } = useParams();
  let day;
  try {
    day = require(`../day${dayNumber}`);
  } catch (e) {
    
  }
  return (
    <div className="day-wrapper">
      {day ? (<h2>Day: {dayNumber} ({day.name}) - <a href={`https://github.com/McInkay/adventofcode2020/tree/master/day${dayNumber}`}>source</a></h2>) : (<h2>Day {dayNumber} not implemented yet</h2>)}
      {day && <Day day={day} />}
    </div>
  )
}

function ResultBox({data, func, x}) {
  return (
    <>
      <h2>Part {x} Result: <Result data={data} func={func}></Result></h2>
    </>
  )
}

function Result({data, func}) {
  if (!data) {
    return "Missing input data";
  }

  const result = String(func(data)).split("\n");
  return (
    <>
      {result.map((item, key) => (
        <span key={key}>{item}<br/></span>
      ))}
    </>
  )
}

function Day({day}) {
  let [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(day.data.default);
      const text = await res.text();
      setData(text);
    }
    fetchData();
  }, [day.data]);
  return (
    <div className="day">
      <div className="output-1"><ResultBox data={data} func={day.part1} x="1" /></div>
      <div className="output-2"><ResultBox data={data} func={day.part2} x="2" /></div>
      <div className="input-header"><h3>Input:</h3></div>
      <textarea className="data-input" 
                placeholder="Loading Data..." 
                value={data} 
                onChange={({target: {value}}) => setData(value)}></textarea>
    </div>
  );
}
