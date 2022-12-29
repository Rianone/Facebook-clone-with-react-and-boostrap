import './css/global.css';
import "./LoginPages/Login.js"
import LoginPage from './LoginPages/Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from './LoginPages/ForgotPassword';
import ResetPassword from './LoginPages/ResetPassword';
import ForgotSendEmail from './LoginPages/ForgotSendEmail';
import NoLongerAccess from './LoginPages/NoLongerAccess';
import ChooseNewPassword from './LoginPages/ChooseNewPassword';
import ProfilePage from './ProfilePages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>

         {/*Login routes*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword></ForgotPassword>} />
        <Route path="/reset-password" element={<ResetPassword></ResetPassword>} />
        <Route path="/send-reset-email" element={<ForgotSendEmail></ForgotSendEmail>} />
        <Route path="/no-longer-access" element={<NoLongerAccess></NoLongerAccess>} />
        <Route path="/choose-new-password" element={<ChooseNewPassword></ChooseNewPassword>} />

        {/* Profile routes */}
        <Route path="/profile" element={<ProfilePage></ProfilePage>} />
        <Route path="/" element={<LoginPage/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
