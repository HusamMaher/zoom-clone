import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import io from 'socket.io-client';
const socket = io()
const editor = ClassicEditor;
class Editortest extends Component {


    socket = io.connect("http://localhost:4001");
  
    
  
    constructor(props) {
        super(props)
  
    var text1 = ''
    
    this.socket.on('text-recive',function(textdate){
       
        
        console.log(textdate)
   
      text1=textdate;
      alert(text1)
     
      
    })


    this.state= {
        data: `${text1}test`
    }
    
  }
  
    render() {
        
        return (
            <div style={{width:'88%'}} >
                
                <CKEditor
                
                    editor={ ClassicEditor }
                    data={this.state.data}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                   

                   
                
                    onChange={ ( event, editor ) => {
                        
                        var root = this;
                        
                       console.log(`${data}test test`)
                       
                        var data = editor.getData()
                       // data = editor.setData()
                        
                        // console.log( { event, editor,data } );
                        //var data = editor.getData();
                       
                        root.socket.emit('text-data',JSON.stringify(data)  );
                        this.setState({
                            data:this.state.data
                        })
                      
                   } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default Editortest;