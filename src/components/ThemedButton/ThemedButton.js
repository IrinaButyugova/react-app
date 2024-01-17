import { useStateValue } from '../../state';
import { Button } from 'react-bootstrap';

export default function ThemedButton(){
  const [{ theme }, dispatch] = useStateValue();
  return (
    <Button
      style={{color:theme.primary}}
      onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: {primary: 'blue'}
      })}
    >
      Make me blue!
    </Button>
  );
}