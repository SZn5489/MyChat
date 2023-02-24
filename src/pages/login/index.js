import { Box } from "@mui/system";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errInfo, setErrInfo] = useState("");
    const navigate = useNavigate();
    
    const mainCss = {
        position:"relative", width:"500px", height:"500px",margin:"100px auto", border:"3px solid #000"
    }
    const insideBoxCss = {position:"absolute", marginRight:"20px", marginLeft:"20px",marginTop:"60px"}
    const titleCss = {width:"460px",top:"20px", textAlign:"center", fontFamily:"Open Sans", fontSize:"24px", fontStyle:"normal",
    fontWeight:"600", lineHeight:"36px"}
    const contentCss = {display:"flex", flexFlow:"column", marginTop:"30px"}
    const textFieldCss = {marginTop:"20px", marginBottom:"20px"}
    const loginBtnCss = {width:"200px", marginTop:"50px"}

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginBtnClick = (e) => {
        if(username === "Admin" && password === "123456"){
            setErrInfo("")
            navigate("/demo/chat")
        }
        else{
            setErrInfo("username or password err!")
        }
    }

    return (
        <Box sx={mainCss}>
            <Box sx={insideBoxCss}>
                <Box sx={titleCss}>Demo ChatGPT</Box>
                <Box sx={contentCss}>
                    <TextField sx={textFieldCss} label="username" variant="standard" 
                    onChange={handleUsernameChange} value={username}
                    />
                    <TextField sx={textFieldCss} label="password" variant="standard" type="password" 
                    onChange={handlePasswordChange} value={password} />
                    <Box sx={{color:"red"}}>{errInfo}</Box>
                    <Box>
                        <Button sx={loginBtnCss} variant="contained" onClick={handleLoginBtnClick}>
                            Login in
                        </Button>
                    </Box>
                </Box> 
                
            </Box>
        </Box>
    )
}

export default LoginPage;