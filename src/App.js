import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
       <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
