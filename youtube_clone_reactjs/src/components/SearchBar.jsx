import UseState from 'react';
import { UseNavigate } from 'react-router-dom';
import { paper, IconButton } from '@mui/material';
import { SearchIcon} from '@mui/icons-material';

const SearchBar= () => {
    
        <paper
        component ="form" 
        onSubmit= {() = {} }
        sx ={{
            borderRadius:20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxshadow: 'none',
            mr: { sm:5 }
        }}
        >
            <input className="search-bar"
            placeholder="search..."
            value=""
            onChange={ () => () }
            />
            <IconButton type="submit" sx={{ p:'10px', color: 'red'}}>
                <Search/>
            </IconButton>
        </paper>
    }

export default SearchBar;