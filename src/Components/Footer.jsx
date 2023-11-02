import React from "react";
import { Link } from "react-router-dom";
const Footer = ({ totalProducts, productCount,setCurrentPage,currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productCount); i++) {
    pages.push(i);
  }

  return (
    <nav className="footer">
      {pages.map((page, index) => {
        return <button key={index} onClick={()=>{
          setCurrentPage(page)
        }} className={page==currentPage? 'active':""}>{page}</button>;
      })}
    </nav>
  );
};

export default Footer;

{
  /* <li class="page-item">
    <Link class="page-link" to="/">Previous</Link>
  </li> */
}
{
  /* <li class="page-item">
            <Link class="page-link" to="/women">
              1
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/men">
              2
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/jewelery">
              3
            </Link>
          </li>
          <li class="page-item">
          <Link class="page-link" to="/electronics">
          Next
          </Link>
        </li> */
}

//     <ul class="pagination justify-content-center">
// </ul>
//           </li>
//           <li>
