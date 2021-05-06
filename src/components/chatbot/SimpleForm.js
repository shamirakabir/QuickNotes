import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available theme props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};

class SimpleForm extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot 
                steps={[
                {
                    id:'intro', 
                    message:'Hi, I am your class TA Chatbot. What can I help with?', 
                    trigger:'intro-user',
                },
                {
                    id:'intro-user', 
							      user:true,
							validator: (value) => {
				                
				                    return true;
				                  
				               
				              },
							trigger:'operating'
                 
                }
                    
                ,
                {
                    id:'operating', 
                    message:"The first approach is to chop things up into variable-sized pieces, as we saw with segmentation in virtual memoryin virtual memory, we call this idea paging, and it goes back to an early and important system, the atlas instead of splitting up a process’s address space into some number of variable-sized logical segments, we divide it into fixed-sized units, each of which we call a page", 
                    trigger: 'example'
                },{
                  id:'example',
                  user:true,
							  validator: (value) => {
				                
				                    return true;
				                  
				              },
							trigger:'final-oh'
                },
                  {
                id:'final-oh', 
                  message: "The Professor's Office hours are TTh 9:30 am - 11:30 am",
                  trigger: 'bye'
              },
              {
                id:'bye',
                user:true,
                trigger:'final'
              },
              {
                id:'final',
                message: "Bye!",
                end: true
              }

                ]}
                {...config}
            />
        </ThemeProvider>
        );
      }

    }

    export default SimpleForm;