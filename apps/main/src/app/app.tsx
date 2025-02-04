import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import {Navigation} from "@temp/Navigation";
import Example from "./Example/Example";

export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Navigation/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/example"
          element={<Example/>}
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
