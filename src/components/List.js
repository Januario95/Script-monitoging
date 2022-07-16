import React, { useEffect, useState } from 'react';
import ListTable from './ListTable';


const data = type => {
    if (type === 'dev') {
        return {
            'URL': 'http://localhost:8000',
            'token': 'fd8068e77a29c03af33aed4981333cc2c2f6c5ae'
        }
    } else if (type === 'prod') {
        return {
            'URL': 'https://bluguard-attendance.herokuapp.com',
            'token': '3d7fbc0bc2ea8cb3c5e8afb4a7d289d04880b14f'
        }
    }
}


const List = () => {
    const [scripts, setScripts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);

    const fetchScripts = () => {
        const Token = data('dev');
        fetch(`${Token.URL}/bluguard37/scripts/`, {
            headers: {
                'Authorization': `Token ${Token.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setScripts(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchScripts();
        let setInterval1 = setInterval(fetchScripts, 1000);
    }, []);

    return (
        <div className="script-list">
            <h3>Scripts</h3>
            <table className="list-table styled-table">
                <thead>
                    <tr>
                        <th>Script Name</th>
                        <th>Description</th>
                        <th>Running Status</th>
                    </tr>
                </thead>
                <tbody>
                    {isEmpty ? (
                        scripts.map((script, index) => (
                            <ListTable
                                key={index}
                                script={script}
                            />
                        ))
                    ) :  <tr className="no-data">
                            <td colSpan="11">No data available</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List;

