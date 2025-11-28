import { AppRouter } from "./AppRouter"
import { ModalProvider } from "./components/Modal/context"

function App() {
  return (
    <ModalProvider>
      <AppRouter/>
    </ModalProvider>
  )
}

export default App
