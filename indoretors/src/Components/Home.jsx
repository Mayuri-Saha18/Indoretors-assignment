import React, { useState } from 'react';

const initialData = [

  { id: 1, name: 'Onboarding Call', colm1: '', colm2: '', colm3: '' },
  { id: 2, name: 'Google Search Console Access',colm1: '',colm2: '', colm3: '' },
  { id: 3, name: 'Google Analytics Access', colm1: '', colm2: '', colm3: '' },
  { id: 4, name: 'Website Access',colm1: '',colm2: '',colm3: '' },
  { id: 5, name: 'Technical Audit', colm1: '', colm2: '', colm3: '' },

  { id: 6, name: 'Competitor Analysis', colm1: '', colm2: '', colm3: '' },
  { id: 7, name: 'Anchor Text/ URL Mapping',colm1: '', colm2: '', colm3: '' },
  { id: 8, name: 'Site Level Optimization', colm1: '',colm2: '',colm3: '' },
  { id: 9, name: 'On Page Optimization',colm1: '',colm2: '',colm3: '' },
  { id: 10, name: 'Content Creation', colm1: '', colm2: '', colm3: '' },
  { id: 11, name: 'Content Publishing', colm1: '',colm2: '', colm3: '' },

];

const InputCell = ({value,onChange})=>(

  <input type="text" value={value} onChange={onChange}  />

);

const Row=({item,onChange})=>(


    <tr key={item.id}>


            <td>
            <InputCell value={item.name} onChange={(e) => onChange(item.id, 'name', e.target.value)} />
            </td>

            <td>
            <InputCell value={item.colm1} onChange={(e) => onChange(item.id, 'colm1', e.target.value)} />
            </td>

            <td>
            <InputCell value={item.colm2} onChange={(e) => onChange(item.id, 'colm2', e.target.value)} />
            </td>

            <td>
            <InputCell value={item.colm3} onChange={(e) => onChange(item.id, 'colm3', e.target.value)} />
            </td>

        
    </tr>
);


const Home = () => {


    const [data, setData] = useState(initialData);


    const handleChange = (id,items,value)=>{

            setData((prevData)=>prevData.map((item)=>(item.id===id ? { ...item, [items]: value } : item))

            );

    };

const handleSave=()=>{

        console.log('Saving the data:', data);
        alert('Data is saved');

    };


  return (
    <div>


         <div>

                <table border={1} style={{ margin:'auto', width: '80%',marginTop:'30px',borderColor:"green"}}>

                    <thead>

                        <tr>
                            <th>MONTH 1</th>
                        </tr>

                    </thead>


                    <tbody>{data.map((item)=> 

                            <Row key={item.id} item={item} onChange={handleChange}/>
                            
                            )}

                    </tbody>
                    
                    
                    <tfoot>

                        <tr>
                            <td colSpan="4">

                                <button onClick={handleSave} style={{backgroundColor:"green",color:"white"}}>Save</button>
                                
                            </td>
                        </tr>
                   
                   </tfoot>


                </table>

        </div>

    </div>
  )
}

export default Home