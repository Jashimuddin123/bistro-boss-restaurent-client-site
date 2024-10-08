import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../Components/Cover";
import Navbar from "../Components/Navbar";
import orderedImg from "../assets/shop/orderedFood.jpg";
import { useState } from "react";

const OrderedFood = () => {
    const  [ menu] = useMenu();
    const dessert  = menu.filter(item=>item.category ==='dessert')
    const soup = menu.filter(item=>item.category ==='soup')
    const salad = menu.filter(item=>item.category ==='salad')
    const pizza = menu.filter(item=>item.category ==='pizza')
    const offered = menu.filter(item=>item.category ==='offered')
    // Initialize state for the tab index, defaulting to 0 (first tab)
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Navbar />
            <Cover img={orderedImg} title={"Ordered Food"} />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                
                
                   
          
            </Tabs>
        </div>
    );
};

export default OrderedFood;
