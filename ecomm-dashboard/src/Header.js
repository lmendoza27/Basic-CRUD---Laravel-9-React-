import {Navbar, Nav} from 'react-bootstrap'
import { Link} from 'react-router-dom'

function Header()
{
    return(
        <div>
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">E-comm</Navbar.Brand>
    <Nav className="mr-auto navbar_warapper">
        {/* Comment in JSX */}
    {
        localStorage.getItem('user-info') ?
        <>
      <Link to="/add">Add Product</Link>
      <Link to="/update">Update Product</Link>
        </>
        :
        <>
      <Link to="/login">Login Product</Link>
      <Link to="/register">Register Product</Link>
        </>
    }


    </Nav>
  </Navbar>
        </div>
    )
}

export default Header