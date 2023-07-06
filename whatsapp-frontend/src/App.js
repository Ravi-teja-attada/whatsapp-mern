import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync').then((response)=>{
    console.log(response.data)
    setMessages(response.data)
  });
},[]);

  useEffect(()=>{
    var pusher = new Pusher('bd0a403dffe80809b82d', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])

  return (
    <div className="app">
    <div className="app_body">
      <Sidebar />
      <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
