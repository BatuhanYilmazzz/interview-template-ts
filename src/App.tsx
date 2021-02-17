import React, { useEffect } from 'react';
import Header from 'src/components/header';
import { fetchHome } from 'src/store/actions';
import { useDispatch } from 'react-redux';
const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHome());
    }, []);
    return (
        <div className="App">
            <Header title="hey" name="hey" />
        </div>
    );
};

export default App;
