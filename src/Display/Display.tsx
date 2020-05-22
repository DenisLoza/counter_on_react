import React, { useState } from 'react';
import s from './Display.module.css';
import {DisplayType} from '../App';


function Display(props: DisplayType) {

    return (
        <div className={s.display}>
            <div className={s.displayCount}>
                <div>
                    <p style={props.redButton}
                       className={s.count}>{props.count}</p>
                </div>
            </div>
            <button className={s.buttonInc}
                    disabled={props.setDisabled}
                    onClick={props.OnClickInc}>
                INC
            </button>
            <button className={s.buttonReset}
                    disabled={props.setDisabledReset}
                    onClick={props.OnClickRes}>
                RESET
            </button>
        </div>
    );
}

export default Display;