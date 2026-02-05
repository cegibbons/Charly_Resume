import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <SearchIcon
            sx={{ cursor: "pointer" }}
            onClick={() => alert('Search icon clicked!')}
        />
    );
};

export default Search;