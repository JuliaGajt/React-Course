import './GoalItem.css'

const GoalItem = (props) => {

    const deleteHandler = (event) => {
        props.deleteItem(event.target.textContent)
    }

    return (
        <div className='goal-item' onClick={deleteHandler}>
            <a className='goal-tem__description'>{props.children}</a>
        </div>
    )


}

export default GoalItem;