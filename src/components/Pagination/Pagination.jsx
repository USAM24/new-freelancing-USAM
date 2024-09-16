import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({ postsPerPage, totalPosts, setCurrentPage }) => {
    const numbers = Math.ceil(totalPosts / postsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Pagination 
            count={numbers} 
            variant="outlined" 
            shape="rounded" 
            onChange={handlePageChange} 
            hidePrevButton 
            hideNextButton
            sx={{
                "& .MuiPaginationItem-root": {
                    color: "#F2F2F2", // Normal state color
                    backgroundColor: "#04AE95"
                },
                "& .Mui-selected": {
                    color: "#04AE95", // Text color in active state
                    backgroundColor: "#F2F2F2", // Background color in active state
                    
                },
                "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "#037C6A", // Active hover state
                    color: "#F2F2F2"
                },
            }}
        />
    );
};

export default PaginationComponent;
