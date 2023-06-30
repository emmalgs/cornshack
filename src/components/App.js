import './App.css';
import CornControl from './CornControl';
import cornguy from "./../img/cornguy2.gif";

function App() {
  return (
      <div className='main'>
        <CornControl />
        <img src={cornguy} alt="dancing corn guy" className='corn-guy' />
      </div>
  )
}

export default App;
