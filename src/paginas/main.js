import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Netflix from "./netflix";
import Trailer from "./Trailer_invasao";
import Trailerhora from "./Trailer_horadorush";
import Trailerjhon from "./Trailer_Jhonwick";
import TrailerTWD from "./Trailer_TWD";
import Trailerp from "./Trailer_powerrangers"
import TrailerM from "./Trailer_Mandalorian";
import Hbo from "./hbo";


const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/netflix" element={<Netflix/>}/>
        <Route exact path="/Trailer_invasao" element={<Trailer/>}/>
        <Route exact path="/Trailer_horadorush" element={<Trailerhora/>}/>*/
        <Route exact path="/Trailer_Jhonwick" element={<Trailerjhon/>}/>
        <Route exact path="/Trailer_TWD" element={<TrailerTWD/>}/>
        <Route exact path="/Trailer_powerrangers" element={<Trailerp/>}/>
        <Route exact path="/Trailer_Mandalorian" element={<TrailerM/>}/>
        <Route exact path="/Hbo" element={<Hbo/>}/>

    </Routes>
)
export default Main;


