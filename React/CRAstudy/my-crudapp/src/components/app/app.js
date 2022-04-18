import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App(){

    const data = [
        {name: 'Chel', salary: 800, increase: true},
        {name: 'Olya', salary: 3000, increase: false},
        {name: 'Ilya', salary: 8000, increase: true},
        {name:'Keks', salary:1222, increase:false}
    ]

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
            <EmployeesList data= {data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App