import React ,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText] =useState('');
    const upClick = () =>{
        //console.log("Uppercasr clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clearClick = () =>{
        //console.log("Uppercasr clicked" + text)
        let newText = '';
        setText(newText);
    }
    const lowClick = ()=>{
       // console.log("lower Clicked" + text);
        let lowText = text.toLowerCase();
        setText(lowText); 
    }
    const handleCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const onChange = (event) =>{
        console.log("Onchange clickrd");
        setText(event.target.value);
    }
    
    
  return (
      <>
  <div className="container" > 
  <h3>{props.heading}</h3> 
    <div className='mb-3' >
       <textarea className={ `form-control text-${props.mode === 'dark' ? 'white' : 'black'}`}id="myBox" onChange={onChange}  value={text} rows="8" style={{backgroundColor: props.toggleMode==='dark'?'grey':'white'}} ></textarea>
</div>
    <button className='btn btn-primary  ' onClick={upClick}>Uppercase </button>
    <button className='mx-1 btn btn-info ' onClick={lowClick}>LowweCase </button>
    <button className='mx-1 btn btn-info ' onClick={clearClick}>Clear Text </button>
    <button className='mx-1 btn btn-info ' onClick={handleCopy}>Copy Text </button>
    <br />
</div>
 <div className="container my-3">
            
            <h3>Your Test Summary</h3>
            <small>{text.split(" ").length} words and {text.length} characters</small>
            <small>{0.008 * text.split(" ").length} minutes read</small>
            <h3>Preview</h3>
            <p> {text.length>0?text:"Enter something to preview in the textbox above"} </p>
        </div>
       
    </>
  )
}
