import './app.css'
import Card from './card';
import Header from './header';

export function App() {
  return (
    <div className='container'>
      <Header/>

      <Card title="Work" currentValue="32hrs" lastWeekValue="36hrs" icon="icon-work" color="--light-red-work"/>
      <Card title="Play" currentValue="10hrs" lastWeekValue="8hrs" icon="icon-play" color="--soft-blue"/>
      <Card title="Study" currentValue="4hrs" lastWeekValue="7hrs" icon="icon-study" color="--light-red-study"/>

      <Card title="Exercise" currentValue="4hrs" lastWeekValue="5hrs" icon="icon-exercise" color="--lime-green"/>
      <Card title="Social" currentValue="5hrs" lastWeekValue="10hrs" icon="icon-social" color="--desaturated-blue"/>
      <Card title="Self Care" currentValue="2hrs" lastWeekValue="2hrs" icon="icon-self-care" color="--soft-orange"/>

    </div>
  );
}
