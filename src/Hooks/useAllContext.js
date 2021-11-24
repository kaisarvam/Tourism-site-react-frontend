import { useContext } from 'react';
import { AllDataContext } from '../Contexts/AllContext';

const useAllContext = () => {
    
    const AllData = useContext(AllDataContext);
    console.log("from useAll Context : ",AllData);
    return (AllData);
};

export default useAllContext;