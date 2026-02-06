import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Search = ({ onQueryChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSearch = () => {
        const trimmed = query.trim();
        setIsOpen(false);
        if (!trimmed) {
            setQuery("");
            if (onQueryChange) {
                onQueryChange("");
            }
            return;
        }
        alert(`Searching for: ${trimmed}`);
        setIsOpen(false);
    };

    const handleQueryChange = (event) => {
        const nextValue = event.target.value;
        setQuery(nextValue);
        if (onQueryChange) {
            onQueryChange(nextValue);
        }
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div ref={containerRef} className="search-container">
            {!isOpen && (
                <span className="search-icon-wrap">
                    <SearchIcon
                        sx={{ cursor: "pointer" }}
                        onClick={handleToggle}
                        data-testid="search-icon"
                    />
                </span>
            )}
            {isOpen && (
                <>
                    <span className="search-break" aria-hidden="true" />
                    <div className="search-fields">
                    <TextField
                        size="small"
                        placeholder="Search"
                        variant="outlined"
                        data-testid="search-input"
                        className="search-input"
                        value={query}
                        onChange={handleQueryChange}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        className="search-button buttonColors"
                        onClick={handleSearch}
                        data-testid="search-button"
                    >
                        Search
                    </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Search;