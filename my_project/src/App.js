import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage, SigninPage, SignupPage} from './pages';

import WrapperContainer from './styles/WrapperContainer.styled';
function App() {
 
  return (
    <BrowserRouter> 
    <WrapperContainer>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/signin" element ={<SigninPage/>} />
        <Route path="/signup" element = {<SignupPage />} />
      </Routes>
      </WrapperContainer>
  </BrowserRouter>
  );
};

export default App;
