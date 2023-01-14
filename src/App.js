
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Requests from './Requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchURL={Requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Trending" fetchURL={Requests.fetchTrending}/>
      <Row title="Top-Rated"  fetchURL={Requests.fetchTopRated} />
      <Row title="Animation"  fetchURL={Requests.fetchAnimation} />
      <Row title="Sci-Fi"  fetchURL={Requests.fetchSci_fi} />
      <Row title="Action-Movies"  fetchURL={Requests.fetchActionMovies} />
      <Row title="Comedy-Movies"  fetchURL={Requests.fetchComedyMovies} />
      <Row title="Drama"  fetchURL={Requests.fetchDrama} />
      <Row title="Horro-Movies"  fetchURL={Requests.fetchHorrorMovies} />
      <Row title="Romance-Movies"  fetchURL={Requests.fetchRomanceMovies} />
      <Row title="Documentaries"  fetchURL={Requests.fetchDocumentaries} />
      
      
     </div>
  );
}

export default App;
