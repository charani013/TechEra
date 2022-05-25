import {Route, Switch, Redirect} from 'react-router-dom'
import TecheraCourseDetails from './components/TecheraCourseDetails'
import NotFound from './components/NotFound'
import Home from './components/Home'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={TecheraCourseDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
