import { IconButton, Paper,Divider,InputBase, Button } from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { sendToChatGPT } from "../../actions/SendAction";
import { useDispatch, useSelector } from "react-redux";


function ChatPage(){

    const [nowChat, setNowChat] = useState("");

    const [userChatList, setUserChatList] = useState([]);
    const [chatList, setChatList] = useState([]);

    const dispatch = useDispatch()

    const selector = (state) =>{
        return {
            ansText:state.Send.answerText
        }
    }

    const {ansText} = useSelector(selector);

    useEffect(()=>{
        if(ansText !== ""){
            setChatList([...chatList, ansText])
        }
        console.log(ansText)
    },[ansText])

    const nameCss = {textAlign:"left",marginLeft:"10px", marginTop:"10px"}

    const ansCss = {minHeight:"50px", backgroundColor:"#D8D6D6", display:"flex", flexFlow:"column"}

    const handleInputChange = (e) =>{
        setNowChat(e.target.value);
    }

    const handleSendClick=(e)=>{
        if(nowChat !== ""){
            chatList.push(nowChat)
            var nowSendChat = nowChat
            setNowChat("")
            dispatch(sendToChatGPT(nowSendChat))
        }
    }


    return (
        <Box sx={{alignItems:"center"}}>
            <Box sx={{marginTop:"30px",marginLeft:"200px", display:"flex", flexFlow:"column", width:"1000px"}}>
                {chatList.map((value, index) => (
                    <Box sx={ansCss}>
                        {index % 2 === 0 ? <Box sx={nameCss}>You:</Box> : <Box sx={nameCss}>ChatGPT:</Box>}
                        <Box sx={{textAlign:"left", minHeight:"50px", backgroundColor:"#D8D6D6"}}>{value}</Box>
                        <Divider />
                    </Box>
                    
                ))}
            </Box>
            
            <Paper
                component="form"
                sx={{marginLeft:"200px",marginTop:"50px",marginBottom:"30px", display: 'flex', alignItems: 'center', width: 1000, height:"50px", border:"1px solid #D8D6D6"  }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1,zIndex:"9999", height:"90%" }}
                    onChange={handleInputChange}
                    value={nowChat}
                />
                <Button endIcon={<SendIcon />} onClick={handleSendClick} ></Button>
            </Paper>
            
            
        </Box>
    )
}

export default ChatPage;