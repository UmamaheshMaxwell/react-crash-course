import { Arrow } from './1.components/1.function/Arrow';
import Greet from './1.components/1.function/Greet';
import { Named } from './1.components/1.function/Named';
// import Welcome from './1.components/2.class/Welcome';
//import WelcomeOne from './1.components/2.class/WelcomeOne';
import Hello from './2.jsx/Hello';
import Greeting from './3.props/Greeting';
import Welcome from './3.props/Welcome';
import WelcomeOne from './3.props/WelcomeOne';
import Counter from './4.state/Counter';
import Message from './4.state/Message';
import ClassClick from './5.event-handling/ClassClick';
import EventBind from './5.event-handling/EventBind';
import FunctionClick from './5.event-handling/FunctionClick';
import Parent from './5.event-handling/parent-child/Parent';
import UserGreeting from './6.conditional-rendering/UserGreeting';
import UserGreetingOne from './6.conditional-rendering/UserGreetingOne';
import UserGreetingThree from './6.conditional-rendering/UserGreetingThree';
import UserGreetingTwo from './6.conditional-rendering/UserGreetingTwo';
import NameList from './7.list-rendering/NameList';
import NameListOne from './7.list-rendering/NameListOne';
import NameListThree from './7.list-rendering/NameListThree';
import NameListTwo from './7.list-rendering/NameListTwo';
import InlineStyling from './8.styling/InlineStyling';
import Stylesheet from './8.styling/Stylesheet';
import './8.styling/appStyles.css'
import styles from './8.styling/appStyles.module.css'
import Form from './9.form-handling/Form';
import FormOne from './9.form-handling/FormOne';
import LifeCycleA from './10.life-cycle/LifeCycleA';
import Api from './11.api-calls/Api';
import UserApi from './11.api-calls/UserApi';
import Axios from './11.api-calls/Axios';
import Student from './11.api-calls/node-api/Student';


function App() {
  return (
    <div className="container">
      <Student />
      {/* <Axios /> */}
      {/* <UserApi /> */}
      {/* <Api /> */}
      {/* <LifeCycleA /> */}
      {/* <FormOne /> */}
      {/* <Form /> */}
      {/* <h2 className='error'>Apply CSS using regular CSS Files</h2>
      <h2 className={styles.success}>Apply CSS using modules</h2> */}
      {/* <InlineStyling /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Welcome firstName="Scott" lastName="Desatnick" title="Manager"/>
      <Welcome firstName="Adam" lastName="Colson" title="Business Analyst"/>
      <Welcome firstName="Tuan" lastName="Bui" title="Tech Boss"/>
      <WelcomeOne /> */}
      {/* <Greeting name="Scott" skill="Manager">
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uma</td>
              <td>uma@uma.com</td>
              <td>Hyd</td>
            </tr>
          </tbody>
        </table>
        <button className='btn btn-primary'>Submit</button>
        <WelcomeOne />
      </Greeting>
      <Greeting name="Adam" skill="Business Analyst">
        <button className='btn btn-warning'>Reset</button>
      </Greeting>
      <Greeting name="Tuan" skill="Tech Boss">
      <button className='btn btn-danger'>Redirect</button>
      </Greeting> */}
      
      {/* <Greet />
      <Named />
      <Arrow />
      <Welcome />
      <Hello />
      <WelcomeOne /> */}
    </div>

  );
}

export default App;
