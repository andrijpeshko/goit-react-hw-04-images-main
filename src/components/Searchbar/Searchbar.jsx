import {useState} from 'react';
import {
  WrapSearchbar,
  Searchform,
  SearchformButton,
  SearchInput,
} from './Searchbar.styled';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({onSubmit}) {
const [query, setQuery] = useState('');

 const handleInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error(
        'Field for searching is empty. Add information for request.',
        {
          position: 'top-right',
          autoClose: 3000,
          theme: 'colored',
        }
      );
    }
    onSubmit(query);
    setQuery('');
  };


    return (
      <Formik>
        <WrapSearchbar>
          <Searchform onSubmit={handleSubmit}>
            <SearchInput
              onChange={handleInputChange}
              value={query}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <SearchformButton type="submit">
              <FcSearch size="30">Search</FcSearch>
            </SearchformButton>
          </Searchform>
        </WrapSearchbar>
      </Formik>
    );
  }

