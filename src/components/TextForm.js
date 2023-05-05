import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [fWord, findWord] = useState('');
    const [rWord, replaceWord] = useState('');
    const handleUpclick = () =>{
        console.log("We clicked");
        let newValue = text.toUpperCase();
        setText(newValue);
    }
    const handleLoclick = () =>{
        let newValue = text.toLowerCase();
        setText(newValue);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleExpressSpace = () =>{
        let newtext = text.split(/[  ]+/);
        setText(newtext.join(" "));
    }
    const handleClear = () => {
        let newVal = '';
        setText(newVal);
    }
    const handleOnchange = (event) =>{
        // console.log("We clicked");
        setText(event.target.value)
    }
    const handleFindWord = (event) => {
        findWord(event.target.value);
    }
    const handleReplaceWord = (event) => {
        replaceWord(event.target.value);
        console.log(replaceWord(event.target.value)) ;
    };
    const handleReplaceClick = () => {
        let newTexts = text.replaceAll(fWord,rWord);
        setText(newTexts);
    }
    return (
        <>
        
        <div className='container' style= {{color: props.mode=== 'dark'? 'white': 'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode ==='dark' ? 'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpclick}>UpperCase</button>
            <button className='btn btn-primary mx-4' onClick={handleLoclick}>LowerCase</button>
            <button type="submit" onClick={speak} className="btn btn-primary me-4">Speak</button>
            <button type="submit" onClick={handleExpressSpace} className="btn btn-primary me-4">Remove Express Space</button>
            <button type="submit" onClick={handleClear} className="btn btn-primary me-4">Clear</button>
        </div>

        <div className='container my-5' style= {{color: props.mode=== 'dark'? 'white': 'black'}}>
            <form className="row g-3">
                <div className="col-auto">
                    <input className="form-control" id="inputPassword2" value={fWord} onChange={handleFindWord} placeholder="Find"/>
                </div>
                <div className="col-auto">
                    <input className="form-control" id="inputPassword2" value={rWord} onChange={handleReplaceWord} placeholder="Replace"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={handleReplaceClick}>Change</button>
                </div>
            </form>
        </div>

        <div className='container my-3' style= {{color: props.mode=== 'dark'? 'white': 'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
