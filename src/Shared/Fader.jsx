import {React, useEffect, useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import './Shared.css'

const Fader = () => {

    const [fadeProp, setFadeProp] = useState({
        fade: "fade-in", 
    });

    const titles = [
        'Interaction Designer', 'Software Developer'
    ]

    var [newTitle, setnewTitle] = useState("Interaction Designer");

    var [currentTitle, setCurrentTitle] = useState(0);

    const swapTitle = useCallback(() => {
        if(fadeProp.fade == "fade-in"){
            setFadeProp({
                fade:"fade-out"
            })
        }else{
            console.log(currentTitle);
            console.log(newTitle);
            if(currentTitle == 0){
                setnewTitle("Interaction Designer");
                setCurrentTitle(currentTitle++);
            }
            else{
                setnewTitle("Sofware Developer");
                setCurrentTitle(currentTitle--);
            } 
            setFadeProp({
                fade:"fade-in"
            }
        )
        }
    }, [fadeProp]);

    useEffect(() => {
        const intervalID = setInterval(swapTitle, 5000);
        return () => {setCurrentTitle({})}; // This worked for me;
    }, [swapTitle])
    /*useEffect(() => {
        const timeout = setInterval(() =>{
            var once = true;
            if(fadeProp.fade == "fade-in"){
                setFadeProp({
                    fade:"fade-out"
                })
            }else{
                setFadeProp({
                    fade:"fade-in"
                }
                
            )
            }
        }, 5000);
        return () => {};
    }, [fadeProp])*/

  return (
    <div>
      <p className={fadeProp.fade}>{newTitle}</p>
    </div>
  )
}

Fader.propTypes = {
    text: PropTypes.string
}

export default Fader;
