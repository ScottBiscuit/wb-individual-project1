import { Link, useRouteError } from 'react-router-dom';
import { Image, Card } from 'react-bootstrap';

export default  function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.response) {
    if (error.response.status === 401) {
      return (
        <>
          <Card className='text-center'>
            <Card.Img variant='top' src="./images/unauthorized.jpg" alt="Gandalf says You Shall Not Pass!" />
            <Card.Body className='bg-success-subtle'>
              <Card.Title className='bg-success-subtle'>OOPS! You will need to log in to do that...</Card.Title>
              {/* <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text> */}
                <Link to="/" className=''>Click here to go back to the homepage</Link>
              {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.Body>
          </Card>
          
        </>
      );
    }
  }

  return (
    <>
      <h1>Uh oh.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

