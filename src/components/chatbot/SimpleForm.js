import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available theme props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#e87217',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#e87217',
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
                    message:"Paging is when pages are brought into physical memory when they are needed", 
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