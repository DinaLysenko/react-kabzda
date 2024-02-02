import {CHANGE_COLLAPSED, reducer, StateType} from "./reducer";

test('collapsed should be true', ()=>{
    const startState: StateType={
        collapsed: false
    }
    const endState=reducer(startState, {type: CHANGE_COLLAPSED})
    expect(endState.collapsed).toBe(true)
})
test('collapsed should be false', ()=>{
    const startState: StateType={
        collapsed: true
    }
    const endState=reducer(startState, {type: CHANGE_COLLAPSED})
    expect(endState.collapsed).toBe(false)
})
test('collapsed should error', ()=>{
    const startState: StateType={
        collapsed: true
    }
    expect(()=>{reducer(startState, {type: "FAKE_TEST"})}).toThrowError()
})