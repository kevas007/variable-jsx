

function App() {
  let dateCourante = new Date();
  let tempsJavascript = dateCourante.getTime();
  let tempsPHP = tempsJavascript/1000;


  return (
    <div className="App">
  <footer>un site de molengeek</footer>
  <p>
    Temps Javascript : {tempsJavascript} milliseconds
  </p>
  <p>
    Temps PHP : {tempsPHP} seconds
  </p>
  <p>
    Date pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
  </p>
  <p>
    Date pour un humain: {dateCourante.getDate()+"/"+dateCourante.getMonth()+"/"+dateCourante.getFullYear()}
  </p>
    </div>
    
  );
}

export default App;
