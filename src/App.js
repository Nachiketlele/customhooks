
import './App.css';
import useFetch from './hooks/useFetch';
import useTimeout from './hooks/useTimeout';

function App() {
    const ready = useTimeout(5000)
   const {data,loading,error}=useFetch()
   console.log(data)
  return (
    <div className="App" >
        <h1>{ready?"Ready":"NotReady"}</h1>
        <div>
           {loading && "loading"}
           {data?.length>0&&data.map((item)=>{
            return <div key={item.id}>{item.login}</div>
           })}
        </div>
    </div>
  );
}

export default App;
