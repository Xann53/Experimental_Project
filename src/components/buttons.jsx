import React, { Component } from "react";
import "../styleSheet/componentCSS.css";

function SampleButton() {
    return (
        <>
            <div class="transparent1 style1">
                <div class="style2">
                    <button class="button1 bSize1">sample button 1</button>
                    <button class="button2 bSize1">sample button 2</button>
                </div>
                <div class="style2">
                    <button class="button3 bSize1">sample button 3</button>
                    <button class="button4 bSize1">sample button 4</button>
                </div>
                <div class="blurryImg" />
            </div>
        </>
    );
}

export default SampleButton;