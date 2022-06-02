import { useState } from 'react';
import GoalItem from '../GoalItem/GoalItem';
import NewGoal from '../NewGoal/NewGoal';
import './Goals.css'

const Goals = () => {
    
    let goals = [
        {
            id: '1a',
            goalDesc: 'Finish the course!'
        },
        {
            id: '2b',
            goalDesc: 'Buy new laptop'
        },
        {
            id: '3c',
            goalDesc: 'Buy piano :D'
        },
        {
            id: '1d',
            goalDesc: 'Something 1!'
        },
        {
            id: '2e',
            goalDesc: 'Something 2!'
        },
        {
            id: '3f',
            goalDesc: 'Something 3!'
        }

    ];

    const [goalsNow, updateGoals] = useState(goals);

    const deleteHandler = (itemToDelete) => {
        console.log(itemToDelete);
        goals = goalsNow.filter(goal => goal.goalDesc !== itemToDelete);
        updateGoals(goals);
    }


    const newGoalHandler = (newGoal) => {
        if(newGoal.goalDesc.length === 0){
            return;
        }else{
            goals = [...goalsNow, {id: Math.random().toString(), goalDesc: newGoal.goalDesc}];
            updateGoals(goals);
        }
        
    };

    return (            
        <div>
            <div className='new-goal'>
                <NewGoal addedGoal={newGoalHandler}/>
            </div>
            <div className='goals'>
                {goalsNow.map(goal => <GoalItem key={goal.id} value={goal.goalDesc} deleteItem={deleteHandler}>{goal.goalDesc}</GoalItem>)}
            </div>
        </div>
    );

}

export default Goals;
