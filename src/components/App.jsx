import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import MyLoader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './api';
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [isLoading, setIsloading] = useState(false);


   /*useEffect(() => {
    if (!query) {
      setIsloading(true);
      try {
       const fetchData = async () => {
         const response = await fetchImages(query, page);
         setHits([...hits, ...response]);
         console.log(response);
         setIsloading(false);

         if (response.length === 0) {
           return toast.warn("We couldn't find result on your request.", {
             position: 'top-right',
             autoClose: 3000,
             theme: 'colored',
           });
         }

         if (page === 1)
           return toast.success(`Wow! We found what you need!`, {
             icon: '🚀',
             position: 'top-right',
             autoClose: 3000,
             theme: 'colored',
           });

         if (response.length < 12)
           return toast.info(`That's all. We don't have more images.`, {
             position: 'top-right',
             autoClose: 3000,
             theme: 'colored',
           });
        };
        fetchData();
      } catch (error) {
        toast.error(
            'Something was wrong. Restart your browser and try again.',
            {
              position: 'top-right',
              autoClose: 3000,
              theme: 'colored',
            });
      }
      finally {
        setIsloading(false);
      }
     }
     
   }, [page, query])*/
  
 

  useEffect(() => {
    if (!query) return;
     setIsloading(true);

    fetchImages(query, page)
      .then(response => {
        setHits(prev => [...response, ...prev]);
        setIsloading(false);
       
        if (response.length === 0) {
          return toast.warn("We couldn't find result on your request.", {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
        }

       if (page === 1){
          return toast.success(`Wow! We found what you need!`, {
           icon: '🚀',
           position: 'top-right',
           autoClose: 3000,
           theme: 'colored',
          });}
        
        if (response.length < 12)
           return toast.info(`That's all. We don't have more images.`, {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
           }); 
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [query, page]);

  console.log(hits)

  
  const handleSearch = newQuery => {
    setPage(1);
    setQuery(newQuery);
    setHits([]);
  };

  const loadMore = () => {
    setPage(prevState => {return (prevState + 1)});
  };
  

    const pageQuantity = Math.floor(hits.length / 12);

    return (
      <Container>
        <ToastContainer />
        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={hits} />
        {hits.length > 11 && !isLoading && pageQuantity === page && (
          <Button onClick={loadMore} />
        )}
        {isLoading && <MyLoader />}
      </Container>
    );
  }
