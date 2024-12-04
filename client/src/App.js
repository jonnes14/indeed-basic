import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import { routePath } from "./routes/route";
import AllPosts from "./Pages/AllPosts";
function App() {
  return (
       <Router>
        <Routes>
          <Route path={routePath.home} element={<Home/>}/>
          <Route path={routePath.posts} element={<AllPosts />}/>
          <Route path={routePath.create} element={<CreatePost />} />
        </Routes>
       </Router>  
  );  
}

export default App;
