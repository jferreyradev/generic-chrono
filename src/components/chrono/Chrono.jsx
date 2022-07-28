import { useTicktimer } from "../../hooks/useTicktimer_v2";
import Display from "./Display";
import StampsTimes from "./StampsTimes";

const Chrono = ({ title }) => {

  const [running, stamps, methods, time] = useTicktimer()

  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <Display time={time()} />
      
      <div >
        <button onClick={() => { running ? methods.pause() : methods.start() }} >
          {!running ? "Start" : "Pause"}
        </button>
        <button onClick={() => methods.reset()}>Reset</button>
        <button onClick={() => methods.stamp()}>Stamp</button>
      </div>
      
      <StampsTimes times={stamps} />

    </div>
  )

};

export default Chrono;