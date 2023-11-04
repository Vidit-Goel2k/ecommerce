import myContext from './myContext';

const MyState = (props) => {

    const state = {
        name: 'Vidit Goel',
        class: '2 B'
    }

    const color = "red"

    return (
        <myContext.Provider value={{state, color}}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState