import React, {useState, useEffect}from 'react'
import Card from './CardNew';
import ReportsNew from './ReportNew';
import ReportsNewHm from './ReportNewHm';
import RecentSales from './RecentSales';
import './dashboard.css';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
function Dashboard() {

  const [sensordata, setCards] = useState([])
  const [hm, setUsers] = useState([])
  const [temp, setAdmins] = useState([])

  const fetchData1 =() =>{
    fetch ("http://localhost:5000/sensordata")
    .then(res =>res.json())
    .then(books => {
      console.log(books);
      setCards(books);
    })
    .catch(e => console.log(e.message));
  };



  const fetchData2 =() =>{
    fetch ("http://localhost:5000/sensordata_temp")
    .then(res =>res.json())
    .then(users => {
      console.log(users);
      setUsers(users);
    })
    .catch(e => console.log(e.message));
  };

  const fetchData3 =() =>{
    fetch ("http://localhost:5000/sensordata_hm")
    .then(res =>res.json())
    .then(admins => {
      console.log(admins);
      setAdmins(admins);
    })
    .catch(e => console.log(e.message));
  };



  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();

  }, []);

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
            <div className="row">
             <Card sensordata={sensordata} temp ={temp} hm={hm}/>
             <div className='col-12'>
              <ReportsNew/>
              <ReportsNewHm/>
             </div>
             <div className='col-12'>
               <RecentSales/>
             </div>
            </div>
            </div>
            <div className="col-lg-4">
              <RecentActivity/>
              <BudgetReport/>
              <WebTraffic/>
            </div>
        </div>
    </section>
  );
}

export default Dashboard