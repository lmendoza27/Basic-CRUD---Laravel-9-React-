import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { Link} from 'react-router-dom'

function Header()
{
  let user = JSON.parse(localStorage.getItem('user-info'))
  const history=useNavigate();
  function logOut()
  {
    localStorage.clear()
    history("/register")
  }
    return(
        <div>
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">E-comm</Navbar.Brand>
    <Nav className="mr-auto navbar_warapper">
        {/* Comment in JSX */}
    {
        localStorage.getItem('user-info') ?
        <>

      <Link to="/">List Products</Link>
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
    { localStorage.getItem('user-info')?
    <Nav>
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
      </NavDropdown>

    </Nav>
    :null
  }
  </Navbar>
        </div>
    )
}

export default Header