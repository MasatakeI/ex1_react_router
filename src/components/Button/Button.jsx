

import React from "react";
import './Button.css';


const Button=(props)=>{
    let {onClickHandler}=props;

    if(typeof onClickHandler!=='function'){
        onClickHandler=()=>{};
    }

    return (
            <div className="Button" onClick={onClickHandler}>
                {props.children}
            </div>
            );
};

export default Button;
// class Button extends React.Component{
//     constructor(props){
//         super(props);

//         this.onClickHandler=this.onClickHandler.bind(this);
//     }

//     onClickHandler(){
//         if (typeof this.props.onClickHandler==='function') {
//             this.props.onClickHandler();
//         }
//     }

//     render(){
//         return (
//             <div className="Button" onClick={this.onClickHandler}>
//                 {this.props.children}
//             </div>
//         );
//     }
// };

// 