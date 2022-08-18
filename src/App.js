import "./App.css";
import PodcastList from "./components/PodcastList";
function App() {
  return (
    <div className="App">
      {/*esto es el header*/}
      <div className="container mx-auto px-4 mt-10 pb-5 flex flex-row shadow-md ">
        <div className=" flex-initial">
          <p className="text-2xl font-semibold text-sky-600"> Podcaster</p>
        </div>
      </div>
      {/* fin del header*/}

      {/*esto es el contendedor principal*/}
     <PodcastList/>
   
    </div>
  );
}

export default App;
