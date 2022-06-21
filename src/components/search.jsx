import {Form, FormControl} from "react-bootstrap";
function Search() {
  return <Form className="d-flex">
  <FormControl
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
  />
</Form>
}

export default Search;