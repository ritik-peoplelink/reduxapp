import { useSelector,useDispatch, } from "react-redux";
import { incVolume } from "../actions";
import { decVolume } from "../actions";
const CalculatorScreen = () => {
    const initState = useSelector((state) => state.changeVolume);
    const dispatch = useDispatch();
    return(
        <>
            <div className="centerBox">
                <div>
                    <h2>Control Volume</h2>
                </div>
                <div className="controlRow">
                    <button onClick={()=>dispatch(incVolume())}>Increase volume</button>
                    <div className="valueBox">{initState}</div>
                    <button onClick={()=>dispatch(decVolume())}>Decrease volume</button>
                </div>
            </div>
        </>
    );
}
export default CalculatorScreen;