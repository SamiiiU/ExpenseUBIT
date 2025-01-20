import AddTransaction from "./Comps/AddTransaction"
import AmountContainer from "./Comps/AmountContainer"
import LoginSignUp from "./Comps/LoginSignUp"
import NavBar from "./Comps/NavBar"
import Statement from "./Comps/Statement"


const App = () => {
   return(
    <div className="w-full pb-6 bg-darkBG ">
      <NavBar/>
      <AmountContainer/>
      <Statement/>
      <AddTransaction/>

      <LoginSignUp/>
    </div>
   )
}

export default App