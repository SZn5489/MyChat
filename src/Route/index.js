import { Route, Routes, Navigate } from "react-router-dom";
import ChatPage from "../pages/chat";
import LoginPage from "../pages/login";

export default function MyRoutes(){
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/demo/login" />}></Route>
            <Route path="/demo/">
                <Route path="login" element={<LoginPage />} />
                <Route path="chat" element={<ChatPage />} />
            </Route>
            
        </Routes>
    )
}