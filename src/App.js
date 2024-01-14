import './App.css';
import girl from './girl.avif';
import './App1.css'
function App() {
  return (
    <>
    <div className="whole-container"><center><h1 className="head">BIODATA</h1></center><hr></hr>
    <div className="container">
      <div ><img className="image" src={girl}  alt="error occured"></img></div>
    <div><center><h2 className='run'>Hey! I am Aishwarya Tatiwar</h2></center></div>
    </div>
    
   <div className="animate"> <h3 className="sub-head">Introduction</h3></div>
    <p>I am a student studying at Shri Ramdeobaba College Of Engineering And Management, Nagpur.
      I am a keen learner about software and development.And I am looking forward for great opportunities in future.To know about my college :
      <a href="http://rknec.edu/">Click here</a>
    </p>
    <div className="animate"><h3 className="sub-head">Educational Qualifications</h3></div>
    <table>
      <tr>SSC-97.4%</tr>
      <tr>HSC-91.2%</tr>
      <tr>MHTCET-97.2 percentile</tr>
      <tr>JEE-86.4 percentile</tr>
      <tr>Sem-1: 9.2 CGPA</tr>
    </table>
    <div className="animate"><h3 className="sub-head">Skills</h3></div>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>C</li>
      <li>PYTHON</li>
      <li>SQL</li>
    
    </ul></div>
  </>
  );

  
}

export default App;
