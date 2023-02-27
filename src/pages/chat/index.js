import { Divider, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { sendToChatGPT } from "../../actions/SendAction";
import { useDispatch, useSelector } from "react-redux";


function ChatPage() {

    const [nowChat, setNowChat] = useState("");
    const [chatList, setChatList] = useState([]);
    const [onLoad, setOnLoad] = useState(false);
    const [oldAnswer, setOldAnswer] = useState("");

    const dispatch = useDispatch()

    const selector = (state) => {
        return {
            ansText: state.Send.answerText
        }
    }

    const { ansText } = useSelector(selector);

    useEffect(() => {
        if (ansText !== oldAnswer) {
            chatList.push(ansText)
            setOnLoad(false)
            setOldAnswer(ansText)
        }
    }, [ansText])

    useEffect(()=>{
        window.scrollTo(0, document.documentElement.scrollHeight)
    },[document.documentElement.scrollHeight])


    const nameCss = { textAlign: "left", marginLeft: "10px", marginTop: "10px" }

    const ansCss = { minHeight: "50px", display: "flex", flexFlow: "column", backgroundColor: "#11C2EE" }
    const userCss = { minHeight: "50px", display: "flex", flexFlow: "column", backgroundColor: "#66FF00" }

    const handleInputChange = (e) => {
        setNowChat(e.target.value);
    }

    const handleEnterInputField = (e) => {
        if (e.keyCode === 13) {
            //输入为回车键
            handleSendClick();
        }
    }

    const handleSendClick = (e) => {
        if (onLoad) {
            window.alert("耐心等待一会吧...")
            return false;
        }
        if (nowChat !== "") {
            chatList.push(nowChat)
            var nowSendChat = nowChat
            setNowChat("")
            dispatch(sendToChatGPT(nowSendChat))
            setOnLoad(true)
            window.scrollTo(0, document.documentElement.scrollHeight)
        }
    }


    return (
        <Box sx={{ alignItems: "center" }}>
            <Box sx={{position:"absolute", top:"5%", left:"50%",transform:"translate(-50%,0)", display: "flex", flexFlow: "column", width: "1000px" }}>
                {chatList.map((value, index) => (
                    <Box>
                        {index % 2 === 0 ?
                            <Box sx={userCss}>
                                <Box sx={nameCss}>You:</Box>
                                <Box sx={{ textAlign: "left", minHeight: "50px", marginLeft: "50px" }}>{value}</Box>
                            </Box> :
                            <Box sx={ansCss}>
                                <Box sx={nameCss}>ChatGPT:</Box>
                                <Box sx={{ textAlign: "left", minHeight: "50px", marginLeft: "50px" }}>{value}</Box>
                            </Box>}
                        <Divider />
                    </Box>

                ))}
                <Box sx={{height:"200px"}}></Box>
            </Box>
            <OutlinedInput
                sx={{ position: "fixed", top: "80%", left: "50%",transform: "translate(-50%,-50%)", zIndex: "9999", width: 1000, border: "1px, solid, #808080" }}
                onChange={handleInputChange}
                value={nowChat}
                onKeyDown={handleEnterInputField}

            />


        </Box>
    )
}

export default ChatPage;