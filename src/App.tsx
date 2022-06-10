import { Provider } from "react-redux";
import { Navigate } from "react-router-dom";
import "./FireBaseSetup";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ConfigureStore } from "./AppState";
import DisplayPerson from "./components/DisplayPerson";
import GeeksButton from "./components/GeeksButton";
import ListNote from "./components/ListNote";
import ReactHookForm from "./components/ReactHoookForm";
import ReduserUi from "./components/ReduserUi";
import RouteA from "./components/RouteA";
import SimpleState from "./components/SimpleState";
import UseEffectMultiple from "./components/UseEffectMultiple";
import UseEffectOnce from "./components/UseEffectOnce";
import UseRefExample from "./components/UseRefExample";
import WriteContext from "./components/WriteContext";
import WriteReducer from "./components/WriteReducer";
import MaterialUi from "./concepts/MaterialUi";
import Authentication from "./LoginProject/Authentication";
import Home from "./LoginProject/Home";
import Login from "./LoginProject/Login";
import SignUp from "./LoginProject/SignUp";
import Profile from "./LoginProject/Profile";
import { Context } from "./LoginProject/UserContext";
import { useContext } from "react";
import { BrowserRouter } from 'react-router-dom';

export default function App() {

  const submitButton = <GeeksButton name='submitName' label='Submit' onClick={() => alert("Submit has invoked")} />
  const resetButton = <GeeksButton name='resetName' label='Reset' onClick={() => alert("Reset has invoked")} />

  const context = useContext(Context);
  const isUserExist = context && context.uid;
  return (

    <Provider store={ConfigureStore()}>

      <BrowserRouter>
        <Routes>
          <Route path='/UseEffectOnce' element={<UseEffectOnce />} />
          <Route path='/UseEffectMultiple' element={<UseEffectMultiple />} />
          <Route path='/DisplayPerson' element={<DisplayPerson />} />


          <Route path='/UseRef' element={<UseRefExample />} />
          <Route path='/WriteContext' element={<WriteContext />} />


          <Route path='/List' element={<ListNote />} />
          <Route path='/SimpleState' element={<SimpleState />} />
          <Route path='RouteA/:name' element={<RouteA />} />
          <Route path='/SubmitButton' element={submitButton} />
          <Route path='/ResetButton' element={resetButton} />

          {/* redux tutioral */}
          <Route path='/WriteReducer' element={<WriteReducer />} />
          <Route path='/ReduserUi' element={<ReduserUi />} />

          {/* React hook Form */}
          <Route path='/ReactHookForm' element={<ReactHookForm />} />

          {/* Material UI */}
          <Route path='/MaterialUi' element={<MaterialUi />} />

          {/* Login Project */}

          <Route path='/Authentication' element={<Authentication title={"Welcome to Authentication"} onSubmitClick={function (email: string, password: string, displayName?: string): Promise<string> {
            throw new Error("Function not implemented.");
          }} />} />

          {!isUserExist && <Route path='/Login' element={<Login />} />}
          {!isUserExist && <Route path='/SignUp' element={<SignUp />} />}
          <Route path='/Home' element={<Home />} />
          {!isUserExist && <Route path='/Profile' element={<Profile />} />}
          <Route path='/' element={<Navigate to={"/Home"} />} />


        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

// function SubmitOnClick() {
//   alert("submit has invoked");
// }
