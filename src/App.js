import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import catto from "./catto.jfif"
function App() {
  const styled= {color: "black", textAlign:'left'}
  return (
    <div style={styled}>
      <Profile fullName= "Business catto">
        <img src={catto} alt="Office cat" width="300"></img>
      </Profile>
      
    </div>
  );
}

export default App;
