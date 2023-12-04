import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {useState} from "react";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


function App() {
    const[ratingValue, setRatingValue]=useState<RatingValueType>(0)
    const[accordionCollapsed, setAccordionCollapsed]=useState(true)
    const[on, setOn]=useState(false)
    const [switchOn, setswitchOn]=useState(false)
    return (
        <div className="App">
            <OnOff on={on} setOn={setOn}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UncontrolledOnOff onChange={setswitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>


            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}



        </div>
    );
}


export default App;
