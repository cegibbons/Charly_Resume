import React from "react";
import { Pagination } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const routes = ["/", "/resume", "/about"];

const PaginationNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.indexOf(location.pathname);
  const page = currentIndex === -1 ? 1 : currentIndex + 1;

  const handleChange = (_event, value) => {
    const target = routes[value - 1];
    if (target) {
      navigate(target);
    }
  };

  return (
    <Pagination
      data-testid="pagination-nav"
      count={routes.length}
      page={page}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
      className="pagination"
    />
  );
};

export default PaginationNav;
