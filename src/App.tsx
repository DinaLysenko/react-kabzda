import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {useState} from "react";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    const[ratingValue, setRatingValue]=useState<RatingValueType>(0)
    const[accordionCollapsed, setAccordionCollapsed]=useState(true)
    const[on, setOn]=useState(false)
    const [switchOn, setSwitchOn]=useState(false)
    return (
        <div className="App">
            <OnOff on={on} setOn={setOn}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating onChange={setRatingValue}/>


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
