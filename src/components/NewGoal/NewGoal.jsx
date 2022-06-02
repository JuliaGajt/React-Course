import { useState } from 'react';
import './NewGoal.css'

const NewGoal = (props) => {

    const [goalNow, setGoal] = useState('');
    const [isValid, setValid] = useState(true);


    const submitHandler = (event) => {
        
        event.preventDefault();
        let newGoal = {
            goalDesc: goalNow
        }
        props.addedGoal(newGoal);
        setGoal(''); 

        if(goalNow.length === 0){
            setValid(false);
        }
        


    }

    const goalChangeHandler = (event) => {
        if(event.target.value.trim().length > 0){
            setValid(true);        
        }
        setGoal(event.target.value);

    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-goal__div'>
                <div className='new-goal__form'>
                    <label className={`${!isValid? 'invalid-goal__label' : 'valid-goal__label'}`}>Course goal</label>
                    <input className={`goal__input ${!isValid? 'invalid-goal__input': ''}`} type='text' value={goalNow} onChange={goalChangeHandler}></input>
                </div>
                <div className='new-goal__submit_div'>
                    <button type='submit' className='new-goal__submit_button'>Submit</button>
                </div>
            </div>
            

        </form>
    )

};

export default NewGoal;