import { toast } from "react-toastify";

export const getStates = () => {
    let states = [];
    const storedStates = localStorage.getItem('states')

    if (storedStates) {
        states = JSON.parse(storedStates)
    }
    return states;
}

//save

export const saveStates = state => {
    let states = getStates()
    const isExist = states.find(value => value.id === state.id)
    if (isExist) {
        return toast.error("Already in cart")
    }
    states.push(state)
    localStorage.setItem('states', JSON.stringify(states))
    toast.success("Successfully Add to cart")
}

//Delete

export const deleteStates = id => {
    let states = getStates()
    const remaining = states.filter(value => value.id != id)
    localStorage.setItem('states', JSON.stringify(remaining))
    toast.success("States Remove from your cart")
}