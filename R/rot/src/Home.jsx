import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import  './home.css'
import { Link } from 'react-router-dom'
function Home(){
    return(
        <div className='sign' >
         <Card style={{ width: '18rem' }}>
      <Card.Img/>
      <Card.Body>
        <Card.Title>Movie description</Card.Title>
        <Card.Text>
         Click the botton below 
        </Card.Text>
        <Link to='/movie'><Button variant="primary">Click here</Button></Link>  
      </Card.Body>
    </Card>
        </div>
    )
}

export default Home