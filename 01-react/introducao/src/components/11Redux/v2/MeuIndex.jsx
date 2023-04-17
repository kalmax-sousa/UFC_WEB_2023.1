import TelaPincipal from "./TelaPincipal";
import { Provider } from 'react-redux'
import { store } from "./store";

const MeuIndex = () => {
    return(
        <Provider store={store}>
            <TelaPincipal/>
        </Provider>
    );
}

export default MeuIndex;