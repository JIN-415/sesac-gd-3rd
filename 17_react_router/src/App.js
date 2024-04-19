// import Test from './components/Test';

import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Board from './pages/Board';
// import BoradDetail from './pages/BoradDetail';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className='App'>
      {/* <h1>routing!</h1>
      <Routes>
        <Route path='/test' element={<Test />}></Route>
      </Routes> */}
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route to='/board/1' element={<BoradDetail />}></Route>

        <Route path='*' element={<NotFound />} />
      </Routes> */}
      <Header />
      {/* <ProductPage />
      <ProductDetailPage />
      <PhotoPage />
      <NotFound /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/1' element={<ProductDetailPage />} />
        <Route path='/photos' element={<PhotoPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
