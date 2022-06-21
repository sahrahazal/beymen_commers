import {NavDropdown} from "react-bootstrap";
function SubMenu(props) {
  var navList = [];
  for (const cat of props.cats) {
    navList.push(
      <NavDropdown.Item key={cat.catName} href={cat.catURL}>{cat.catName}</NavDropdown.Item>
    )
  }
  return <>
    {navList}
  </>;
}
export default SubMenu;