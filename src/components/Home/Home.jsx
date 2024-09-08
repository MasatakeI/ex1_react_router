import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    return (
        <div>
            <h1>ホーム</h1>
            <Button 
                onClickHandler={()=>{
                    navigate('/quiz');
                }}
            >
            クイズページへ移動
            </Button>
        </div>
    );
};

export default Home;