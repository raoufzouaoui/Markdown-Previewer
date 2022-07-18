import React, { Component } from 'react';
import { marked } from 'marked';


const initState = `
This is a paragraphe
**This a bolded**
> Block Quotes!
# heading1
## heading 2

-List item 1
-List item 2
-List item 3

[Visit our link](https://www.google.com)

this is a inline code \`<div></div>\`

this is a block of code:

\`\`\`
  let x=1;
  let y=1;
  let z=x=y;
\`\`\`

![React](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      text:initState
    }
  }
  handleChange=(event)=>{
    this.setState({
      text : event.target.value
    })
  }
  render(){
    const {text} =this.state;
    
    const markdown = marked.parse(text,{breaks:true});
    
    return(
    <div>
      <h2 className="text-center m-4 text-white">Convert your Markdown</h2>
         <div className="row">
          <div className="col-6">
            <h5 className="text-center text-white">Enter your markdown here:</h5>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}>
            </textarea>
          </div>
          <div  className="col-6 "> 
            <h6 className="text-center text-white">See the result:</h6>
            <div className="preview rounded p-2" id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
              
             </div>
            </div>
         </div>
        </div>
    )
  }
}


export default App;
