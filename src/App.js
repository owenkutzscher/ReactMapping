import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import MusicVideo from './MusicVideo';


// lets make a lil thing that looks at 'music videos'
// and fuckin gives them a rating
// depending on some factors
// if length is super long, or the view count is super low
// then say "not a music video"
// else say "is a music video"

// steps
// first
  // make it print out the data for each one with the map funtion
// second
  // if statements going ham add text to the output saying is/isnt a music vid

const musicVideos = [
  {
    name: 'Pitbull - Give Me Everything ft. Ne-Yo, Afrojack, Nayer',
    length: 270,
    uploader: 'Pitbull',
    views: 944673511,
  },
  {
    name: 'Give Me Everything (1 hour looped)',

    // will an int work for the length??
    length: 1800,
    uploader: 'best 1 hour loops dot com',
    views: 30000,
  },
  {
    name: 'Give Me Everything  OFFICIAL MUSIC VIDEO',
    length: 270,
    uploader: 'Pitbull OFFICIAL',
    views: 90000,
  },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          
          
          <div>
            Which music video is the real one?
            Are any real music videos?



            {musicVideos.map((musicVideo) => 
                            
              
                <div key={musicVideo.name}>
                  {/* // ^^^ok way to this... */}

                  <MusicVideo name={musicVideo.name} length={musicVideo.length}
                  uploader={musicVideo.uploader} views={musicVideo.views}/>
                </div>
              
              
            )}
          </div>




        









        {/*











        //for beginning simple examples
//const employees = ['Anthony', 'Kevin', 'Stephenie', 'George'];
const employees = [
  {
    name: 'Anthony',
    id: 'ABC',
  },
  {
    name: 'George',
    id: 'CBA',
  },
  {
    name: 'Stephenie',
    //id: 'STE',
  },
];







        // final way to loop through
        {employees.map((employee) => (
          <div key={employee.id}>
            <Employee name={employee.name} id={employee.id} />
          </div>
          
        ))}


        // hip hip hurray this is a fire way to do it
        // well... idk just a better looking one of below
        {employees.map((employee) => (
          <div>
            <h6>
              {`Name: ${employee.name}, ID: ${employee.id}`}
            </h6>
          </div>
        ))}





        // this is the slightly improved version
        {employees.map((employee) => (
          <h1> {employee} </h1>
        ))}



        // this is the way to do it sold, can get a lil better with
        // making it not return anything
        {employees.map((employee) => {
          return <h1> {employee} </h1>
        })};




        {/*
        // worst way to loop though
        <h1> {employees[0]} </h1>
        <h1> {employees[1]} </h1>
        <h1> {employees[2]} </h1>
        <h1> {employees[3]} </h1>
        */}
      </header>
    </div>
  );
}


export default App;