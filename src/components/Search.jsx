import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Search = ({ onQueryChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) {
            setQuery("");
            if (onQueryChange) {
                onQueryChange("");
            }
            return;
        }
        const normalized = trimmed.toLowerCase();
        const routes = [
            { keywords: ["home", "main", "landing"], path: "/" },
            { keywords: ["resume", "cv"], path: "/resume" },
            { keywords: ["about", "bio", "contact"], path: "/about" },
        ];
        const match = routes.find(({ keywords }) =>
            keywords.some((word) => normalized.includes(word))
        );
        if (match) {
            navigate(match.path);
            setQuery("");
            setError("");
            setIsOpen(false);
        } else {
            setError("No results found.");
        }
        if (onQueryChange) {
            onQueryChange(trimmed);
        }
    };

    const handleQueryChange = (event) => {
        const nextValue = event.target.value;
        setQuery(nextValue);
        if (error) {
            setError("");
        }
        if (onQueryChange) {
            onQueryChange(nextValue);
        }
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                if (!error || query.trim() === "") {
                    if (!error) {
                        setQuery("");
                    }
                    setIsOpen(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, error, query]);

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
                    <div className={`search-fields${error ? " has-error" : ""}`}>
                    <TextField
                        size="small"
                        placeholder="SEARCH BY PAGE NAME"
                        variant="outlined"
                        data-testid="search-input"
                        className="search-input"
                        value={query}
                        onChange={handleQueryChange}
                        error={Boolean(error)}
                        helperText={error}
                        sx={{
                            position: "relative",
                            "& .MuiFormHelperText-root": {
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                marginTop: "4px",
                            },
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleSearch();
                            }
                        }}
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