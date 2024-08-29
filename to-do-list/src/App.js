import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [activity, setActivity] = useState("");
  const [listdata, setListData] = useState([]);
  const [select, setSelect] = useState([]);

  function addActivity() {
    if (activity.length != 0) {
      setListData((listdata) => {
        const updatedlist = [...listdata, activity];

        setActivity("");
        return updatedlist;
      });
    }
  }
  function removeactivity(i) {
    const update = listdata.filter((ele, id) => {
      return i != id;
    });
    setListData(update);
    setSelect(select.filter((index) => index !== i));
  }
  function addselect(e) {
    const value = parseInt(e.target.value, 10);
    setSelect((prevSelect) => {
      if (prevSelect.includes(value)) {
        return prevSelect.filter((id) => id !== value);
      } else {
        return [...prevSelect, value];
      }
    });
  }

  function removeSelectedActivities() {
    setListData((prevListData) =>
      prevListData.filter((_, index) => !select.includes(index))
    );
    setSelect([]);
  }
  return (
    <div className="">
      <div className="header">
        <div className="App">
          <h1>
            <u>To Do List</u>
          </h1>
          <input
            type="text"
            
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="Add new activity"
          />
          <button onClick={addActivity}>add</button>
          <div className="todolist">{`My To-do-List : )`}</div>
          <div>
            {listdata != [] &&
              listdata.map((data, i) => {
                return (
                  <>
                    <p key={i}>
                      <div>
                        <input
                          type="checkbox"
                          value={i}
                          checked={select.includes(i)}
                          onChange={addselect}
                        />
                        <span className="activitylist">{data}</span>

                        <button onClick={() => removeactivity(i)}>
                          remove
                        </button>
                      </div>
                    </p>
                  </>
                );
              })}
          </div>
          <div>
            {listdata.length > 1 && (
              <button onClick={removeSelectedActivities}>
                Remove Selected
              </button>
            )}
          </div>
          <div>
            {listdata.length > 1 && (
              <button onClick={() => setListData([])}>Delete All</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
