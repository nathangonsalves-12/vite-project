import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Properties from "./pages/Properties"


export default function App() {
  return <BrowserRouter>
  <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/properties" element={<Properties/>}/>
      </Routes>
    </main>
    <Footer/>
  </div>
  </BrowserRouter>
}
