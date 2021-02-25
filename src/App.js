import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react'

import Startpage from './components/startpage';
import MobSession from './components/mobSession';

function App() {

  const [interval, setInterval] = useState();
  const [participants, setParticipants] = useState([]);
  const [step, setStep] = useState(0);

  const startMob = (startDate, endDate, participants) => {
    const startDateMillis = new Date();
    startDateMillis.setHours(startDate.split(':')[0]);
    startDateMillis.setMinutes(startDate.split(':')[1]);
    const endDateMillis = new Date();
    endDateMillis.setHours(endDate.split(':')[0]);
    endDateMillis.setMinutes(endDate.split(':')[1]);

    const diff = Math.abs(endDateMillis-startDateMillis);

    setInterval(diff/1000);
    setParticipants(participants);
    setStep(1);
  }

  return (
    <div className="App">
      {
        step === 0 && <Startpage startMob={startMob} />
      }
      {
        step === 1 && <MobSession interval={interval} participants={participants} />
      }
    </div>
  );
}

export default App;
