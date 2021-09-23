import React, { Component } from 'react';
import { add, addDays,format,formatDuration, intervalToDuration } from 'date-fns';
export default class CreateTodo extends Component {
    render() {
        const date = new Date();
        
        const dateFormatted = format(date, "MM/dd/yyyy"); //prints current date
        
        return (
            <div>
                <p>{dateFormatted}</p>
               <a href="http://cs480-projects.github.io/teams-fall2021/Gits-Greatest/index.html">Class Coment Website</a>
                
            </div>
        )
    }
}