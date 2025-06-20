import React ,{useContext} from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import {context} from '../../context/Context';
const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(context);


  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt='user icon' />
        </div>
        <div className='main-container'>

            {
                !showResult ?
                <>
                    <div className='greet'>
                <p><span>Hello Dev.</span></p>
                <p>How can I assist you today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest beautiful places to see on upcoming locations.</p>
                    <img src={assets.compass_icon} alt='' />
                </div>
                <div className='card'>
                    <p>Briefly summarize this concept : urban planning</p>
                    <img src={assets.message_icon} alt='' />
                </div>
                <div className='card'>
                    <p>Brainstorm ideas for a new feature in the app.</p>
                    <img src={assets.bulb_icon} alt='' />
                </div>
                <div className='card'>
                    <p>Improve the readability of the code.</p>
                    <img src={assets.code_icon} alt='' />
                </div>
            </div>
            </> 
            :
            <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt='' />
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt='' />
                    {loading
                    ? <div className='loader'>
                        <hr/>
                        <hr/>   
                        <hr/>
                    </div>
                    : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                    }
                    
                </div>
            </div>

            }
            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here..' />
                    <div>
                        <img src={assets.gallery_icon} alt='' />
                        <img src={assets.mic_icon} alt='' />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt='' />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini is a large multimodal model that can accept images and text as input, and generate text as output. It is designed to be helpful, honest, and harmless.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
