import WarningDialog from "./components/WarningDialog"
import Main from "./main-components/Main"

function App() {

  return (
    <div>

      <WarningDialog text='are you sure you want delete your task ?'/>
      <Main />

    </div>
  )
}

export default App
