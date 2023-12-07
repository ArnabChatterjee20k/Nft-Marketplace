import { BrowserRouter,Routes ,Route} from "react-router-dom"
import Header from "./components/Header"
import Collections from "./components/Collections"
import Hero from "./components/Hero"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/collections/:id" element={<Collections/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
