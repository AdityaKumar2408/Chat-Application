import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage=(props)=>{
        
    return (
        <div style={{ height:'100vh'}}>
        <PrettyChatWindow
           projectId='512c4282-09cd-438b-a393-978fa4d1bffe'
           username={props.user.username}    
           secret={props.user.secret}
           style={{height:'100%'}} 
           />   
        </div>
    )
}

export default ChatsPage
