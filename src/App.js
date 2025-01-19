import AddTransaction from "./Comps/AddTransaction"
import AmountContainer from "./Comps/AmountContainer"
import NavBar from "./Comps/NavBar"
import Statement from "./Comps/Statement"


const App = () => {
   return(
    <div className="w-full pb-6 bg-darkBG ">
      <NavBar/>
      <AmountContainer/>
      <Statement/>
      <AddTransaction/>
    </div>
   )
}

export default App