import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import SignupForm from '../components/login/SignupForm';
import LoginForm from '../components/login/LoginForm';

export default function Home() {

  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth', formData);

    if (res.data.success) {
      navigate('/party');
    }
  };
  const handleSignup = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/signup', formData);

    if (res.data.success) {
      navigate('/party');
    }
  };

  return (
    <>
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title className='bg-success-subtle p-2'>Log In</Card.Title>
          <Card.Text className='p-2'>
          <LoginForm onLogin={handleLogin} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className='bg-success-subtle p-2'>Sign Up</Card.Title>
          <Card.Text className='p-2'>
          <SignupForm onSignup={handleSignup} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="../images/d20.png" />
      </Card>
    </CardGroup>
    </>
  );
}
