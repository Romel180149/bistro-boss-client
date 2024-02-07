
import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
const Order = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const [menu] =useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
           <Cover img={orderCoverImg}   title="Order Food"   >   </Cover>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUP</Tab>
    <Tab>DESSERT</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
 
  <TabPanel>
    {
      salad.map(item=><FoodCard
        key={item._id}
        item={item}
        ></FoodCard>)
    }

  </TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs> 
   
        </div>
    );
};

export default Order;