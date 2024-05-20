import React, {useState, useEffect} from 'react'
import './recentSales.css';
import RecentSalesTable from './RecentSalesTable';
import CardFilter from './CardFilter';

function RecentSales() {
    
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);

    };

        const [books, setCards] = useState([]);

        const fetchData =() =>{
          fetch ("http://localhost:5000/books")
          .then(res =>res.json())
          .then(books => {
            console.log(books);
            setCards(books);
          })
          .catch(e => console.log(e.message));
        };
      
      
      
        useEffect(() => {
          fetchData();
        }, []);
    

  return (
    <div className='card recent-sales overflow-auto'>
        <CardFilter filterChange ={handleFilterChange}/>
        <div className='card-body'>
            <h5 className='card-title'>
                Search for Books<span>|{filter}</span>
            </h5>
            <RecentSalesTable books ={books}/>
        </div>
    </div>
  )
}

export default RecentSales;