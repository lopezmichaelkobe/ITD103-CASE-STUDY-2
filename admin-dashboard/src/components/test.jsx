import React, {useState, useEffect}from 'react';

function Test() {




        /*Budget Chart*/
    const[cass1, setcass1] = useState([])
    const[cass2, setcass2] = useState([])
    const[cass3, setcass3] = useState([])

    const[ccs1, setccs1] = useState([])
    const[ccs2, setccs2] = useState([])
    const[ccs3, setccs3] = useState([])

    const[ceba1, setceba1] = useState([])
    const[ceba2, setceba2] = useState([])
    const[ceba3, setceba3] = useState([])

    const[ced1, setced1] = useState([])
    const[ced2, setced2] = useState([])
    const[ced3, setced3] = useState([])

    const[coe1, setcoe1] = useState([])
    const[coe2, setcoe2] = useState([])
    const[coe3, setcoe3] = useState([])

    const[con1, setcon1] = useState([])
    const[con2, setcon2] = useState([])
    const[con3, setcon3] = useState([])

    const[csm1, setcsm1] = useState([])
    const[csm2, setcsm2] = useState([])
    const[csm3, setcsm3] = useState([])


    /* ReportChart */

    


     /*BudgetChart: */

            /*CASS: */
      const fetchData7 =() =>{
        fetch ("http://localhost:5000/getCollegeCASS1")
        .then(res =>res.json())
        .then(cass1 => {
          console.log(cass1);
          setcass1(cass1);
        })
        .catch(e => console.log(e.message));
      };

      const fetchData8 =() =>{
        fetch ("http://localhost:5000/getCollegeCASS2")
        .then(res =>res.json())
        .then(cass2 => {
          console.log(cass2);
          setcass2(cass2);
        })
        .catch(e => console.log(e.message));
      };

      const fetchData9 =() =>{
        fetch ("http://localhost:5000/getCollegeCASS3")
        .then(res =>res.json())
        .then(cass3 => {
          console.log(cass3);
          setcass3(cass3);
        })
        .catch(e => console.log(e.message));
      };



            /*CCS: */
            const fetchData10 =() =>{
                fetch ("http://localhost:5000/getCollegeCCS1")
                .then(res =>res.json())
                .then(ccs1 => {
                  console.log(ccs1);
                  setccs1(ccs1);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData11 =() =>{
                fetch ("http://localhost:5000/getCollegeCCS2")
                .then(res =>res.json())
                .then(ccs2 => {
                  console.log(ccs2);
                  setccs2(ccs2);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData12 =() =>{
                fetch ("http://localhost:5000/getCollegeCCS3")
                .then(res =>res.json())
                .then(ccs3 => {
                  console.log(ccs3);
                  setccs3(ccs3);
                })
                .catch(e => console.log(e.message));
              };



                 /*CEBA: */
            const fetchData13 =() =>{
                fetch ("http://localhost:5000/getCollegeCEBA1")
                .then(res =>res.json())
                .then(ceba1 => {
                  console.log(ceba1);
                  setceba1(ceba1);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData14 =() =>{
                fetch ("http://localhost:5000/getCollegeCEBA2")
                .then(res =>res.json())
                .then(ceba2 => {
                  console.log(ceba2);
                  setceba2(ceba2);
                })
                .catch(e => console.log(e.message));
              };
        
              const fetchData15 =() =>{
                fetch ("http://localhost:5000/getCollegeCEBA3")
                .then(res =>res.json())
                .then(ceba3 => {
                  console.log(ceba3);
                  setceba3(ceba3);
                })
                .catch(e => console.log(e.message));
              };



            /*CED: */
            const fetchData16 = () => {
            fetch("http://localhost:5000/getCollegeCED1")
              .then(res => res.json())
              .then(ced1Data => {
            console.log(ced1Data);
            setced1(ced1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData17 = () => {
            fetch("http://localhost:5000/getCollegeCED2")
                .then(res => res.json())
                .then(ced2Data => {
                    console.log(ced2Data);
                    setced2(ced2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData18 = () => {
            fetch("http://localhost:5000/getCollegeCED3")
                .then(res => res.json())
                .then(ced3Data => {
                    console.log(ced3Data);
                    setced3(ced3Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };



         /*COE: */
         const fetchData19 = () => {
            fetch("http://localhost:5000/getCollegeCOE1")
              .then(res => res.json())
              .then(coe1Data => {
            console.log(coe1Data);
            setcoe1(coe1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData20 = () => {
            fetch("http://localhost:5000/getCollegeCOE2")
                .then(res => res.json())
                .then(coe2Data => {
                    console.log(coe2Data);
                    setcoe2(coe2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData21 = () => {
            fetch("http://localhost:5000/getCollegeCOE3")
                .then(res => res.json())
                .then(coe3 => {
                    console.log(coe3);
                    setcoe3(coe3); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };


        /*CON: */
        const fetchData22 = () => {
            fetch("http://localhost:5000/getCollegeCON1")
              .then(res => res.json())
              .then(con1Data => {
            console.log(con1Data);
            setcon1(con1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData23 = () => {
            fetch("http://localhost:5000/getCollegeCON2")
                .then(res => res.json())
                .then(con2Data => {
                    console.log(con2Data);
                    setcon2(con2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData24 = () => {
            fetch("http://localhost:5000/getCollegeCON3")
                .then(res => res.json())
                .then(con3 => {
                    console.log(con3);
                    setcon3(con3); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };



               /*CSM: */
        const fetchData25 = () => {
            fetch("http://localhost:5000/getCollegeCSM1")
              .then(res => res.json())
              .then(csm1Data => {
            console.log(csm1Data);
            setcsm1(csm1Data); // Update state with fetched data
             })
        .catch(e => console.log(e.message));
        };

        const fetchData26 = () => {
            fetch("http://localhost:5000/getCollegeCSM2")
                .then(res => res.json())
                .then(csm2Data => {
                    console.log(csm2Data);
                    setcsm2(csm2Data); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };

        const fetchData27 = () => {
            fetch("http://localhost:5000/getCollegeCSM3")
                .then(res => res.json())
                .then(csm3 => {
                    console.log(csm3);
                    setcsm3(csm3); // Update state with fetched data
                })
                .catch(e => console.log(e.message));
        };



      



      useEffect(() => {

        /*Budget Chart*/
        /* 1- Reference */
        /* 2- Fiction */
        /* 3- Non-fiction */
        fetchData7();
        fetchData8();
        fetchData9();

        fetchData10();
        fetchData11();
        fetchData12();

        fetchData13();
        fetchData14();
        fetchData15();

        fetchData16();
        fetchData17();
        fetchData18();

        fetchData19();
        fetchData20();
        fetchData21();


        fetchData22();
        fetchData23();
        fetchData24();

        fetchData25();
        fetchData26();
        fetchData27();







      }, []);
    
    

  return (
    
    <div>

        <h1>Total Borrowed Books every Colleges based on Genre (BudgetChart):</h1>
        <h1>Total CASS(Reference): {cass1.length}</h1>
        <h1>Total CASS(Fiction): {cass2.length}</h1>
        <h1>Total CASS(Non-Fiction): {cass3.length}</h1>

        <h1>Total CCS(Reference): {ccs1.length}</h1>
        <h1>Total CCS(Fiction): {ccs2.length}</h1>
        <h1>Total CCS(Non-Fiction): {ccs3.length}</h1>

        <h1>Total CEBA(Reference): {ceba1.length}</h1>
        <h1>Total CEBA(Fiction): {ceba2.length}</h1>
        <h1>Total CEBA(Non-Fiction): {ceba3.length}</h1>

        <h1>Total CED(Reference): {ced1.length}</h1>
        <h1>Total CED(Fiction): {ced2.length}</h1>
        <h1>Total CED(Non-Fiction): {ced3.length}</h1>

        <h1>Total COE(Reference): {coe1.length}</h1>
        <h1>Total COE(Fiction): {coe2.length}</h1>
        <h1>Total COE(Non-Fiction): {coe3.length}</h1>

        <h1>Total CON(Reference): {con1.length}</h1>
        <h1>Total CON(Fiction): {con2.length}</h1>
        <h1>Total CON(Non-Fiction): {con3.length}</h1>

        
        <h1>Total CSM(Reference): {csm1.length}</h1>
        <h1>Total CSM(Fiction): {csm2.length}</h1>
        <h1>Total CSM(Non-Fiction): {csm3.length}</h1>

    
    
    
    </div>
  )
}

export default Test