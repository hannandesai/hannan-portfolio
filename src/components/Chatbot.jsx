import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Chatbot = () => {
    const [messages, setMessages] = React.useState([]);
    const [question, setQuestion] = React.useState('');
    const [showChat, setShowChat] = React.useState(false);
    const chatBodyRef = useRef(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);
    function sendQuestion() {
        let sessionId = localStorage.getItem('sessionId');
        if (!sessionId) {
            sessionId = uuidv4();
            localStorage.setItem('sessionId', sessionId);
        }
        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'question', message: question }
        ]);

        fetch('https://qg07jah810.execute-api.us-east-1.amazonaws.com/prod/getLexResponse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question, sessionId: sessionId})
        }).then(response => response.json()).then(response => {
            if (response.statusCode == 200) {
                const data = JSON.parse(response.body);
                if (data.response && data.response.length > 0) {
                    data.response.forEach((response) => {
                        setMessages(prevMessages => [
                            ...prevMessages,
                            { type: 'answer', message: response.content }
                        ]);
                    })
                }
                setQuestion('');
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        showChat ? (
            <div className="chatbot-overlay" style={overlayStyle}>
                <div className="container py-2">
                    <div className="row d-flex">
                        <div className="col-md-12 col-lg-12 col-xl-12">
                            <div className="card" style={{ backgroundColor: '#424242' }}>
                                <div className="card-header d-flex justify-content-between align-items-center p-3" style={{ borderTop: '4px solid #18d26e', borderBottom: '1px solid grey' }}>
                                    <h5 className="mb-0 text-green">Chat Messages</h5>
                                    <div className="d-flex flex-row align-items-center">
                                        {/* <span className="badge me-3" style={{backgroundColor: "#18d26e"}}>20</span> */}
                                        <i className="bi bi-dash-lg me-3 text-green" onClick={() => setShowChat(false)} style={{ cursor: 'pointer' }}></i>
                                        {/* <i className="bi bi-x-lg text-green" onClick={() => setShowChat(false)} style={{ cursor: 'pointer' }}></i> */}
                                    </div>
                                </div>
                                <div className="card-body" ref={chatBodyRef} style={{ position: 'relative', height: '400px', overflowY: 'scroll' }}>
                                    {messages.map((message, index) => (
                                        message.type === 'question' ? (
                                            <div key={index}>
                                                <div className="d-flex justify-content-end">
                                                    {/* <p className="small mb-1 text-white">23 Jan 2:05 pm</p> */}
                                                    <p className="small mb-1 text-white">User</p>
                                                </div>
                                                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                                    <div>
                                                        <p className="small p-2 mb-3 text-white rounded-3" style={{ backgroundColor: "#18d26e" }}>{message.message}</p>
                                                    </div>
                                                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} /> */}
                                                </div>
                                            </ div>
                                        ) : (
                                            <div key={index}>
                                                <div className="d-flex justify-content-between">
                                                    <p className="small mb-1 text-white">Lexie</p>
                                                    {/* <p className="small mb-1 text-white">23 Jan 2:00 pm</p> */}
                                                </div>
                                                <div className="d-flex flex-row justify-content-start">
                                                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} /> */}
                                                    <div>
                                                        <p className="small p-2 mb-3 rounded-3" style={{ backgroundColor: "white" }}>{message.message}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                                <div className="card-footer d-flex justify-content-start align-items-center p-3" style={{ borderTop: '1px solid grey' }}>
                                    <div className="input-group mb-0">
                                        <input type="text" className="form-control" placeholder="Type message" aria-label="Recipient's username" aria-describedby="button-addon2" value={question} onChange={(e) => setQuestion(e.target.value)} />
                                        <button className="btn btn-warning text-white" type="button" id="button-addon2" style={{ paddingTop: '.55rem', backgroundColor: '#18d26e' }} onClick={sendQuestion}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <a id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center active" onClick={() => setShowChat(true)} style={{ cursor: 'pointer' }}>
                {/* <i className="bi bi-arrow-up-short"></i> */}
                <img src="/img/chat-bubble.png" alt="Chatbot" style={{ width: '24px', height: '24px', lineHeight: 1 }} />
            </a>
        )
    );
};

const overlayStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    zIndex: 1000,
    width: '400px',
    maxHeight: '500vh',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Chatbot;