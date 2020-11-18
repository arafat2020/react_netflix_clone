import './App.css';
import Row from './Row';
import requist from './requists';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row larger_row title="NETFLIX ORIGINAL" fetchReq={requist.netflixOriginal} />
      <Row title="Trending Now" fetchReq={requist.fetchTrending} />
      <Row title="Top Rated" fetchReq={requist.fetchToprated} />
      <Row title="Action Movie" fetchReq={requist.actionMovie} />
      <Row title="Comedy Movie" fetchReq={requist.comideyMovie} />
      <Row title="Horror Movie" fetchReq={requist.horrorMovie} />
      <Row title="Romance Movie" fetchReq={requist.romanceMovie} />
      <Row title="Documentaries" fetchReq={requist.documantary} />
      
    </div>
  );
}

export default App;
