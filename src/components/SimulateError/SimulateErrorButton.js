import { useErrorBoundary} from 'react-error-boundary'

export default function SimulateErrorButton(){
    const {showBoundary} = useErrorBoundary();

    const simulateError = () => {
        //throw new Error('Sample Error');
        showBoundary({message:'Sample Error'});
      };

      return(
        <button onClick={simulateError}>
          Simulate Error
        </button>
      );
}