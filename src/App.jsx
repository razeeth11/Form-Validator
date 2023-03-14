import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  return (
    <div className="App">
      <form action="#">
        <TextField className='fields' id="outlined-basic" label="Username" variant="outlined" />
        <TextField className='fields' id="outlined-basic" label="Email" variant="outlined" />
        <TextField className='fields' id="outlined-basic" label="Password" variant="outlined" />

        <Button className='fields' variant="contained">SUBMIT</Button>
      </form>
    </div>
  )
}

export default App
