
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Menucategory from '../MenuCategory/Menucategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>

            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle

                subHeading="Don't miss"
                heading="Todays offer"
            ></SectionTitle>

            <Menucategory items={offered}
            ></Menucategory>
            <Menucategory

                items={desserts}
                title="Dessert"
               Img={dessertImg}

            ></Menucategory>
            <Menucategory
            items={pizza}
            title="Pizza"
            Img={pizzaImg}
            ></Menucategory>
                <Menucategory
            items={salad}
            title="salad"
            Img={saladImg}
            ></Menucategory>
                <Menucategory
            items={soup}
            title="soup"
            Img={soupImg}
            ></Menucategory>
                {/* <Menucategory
            items={salad}
            title="salad"
            Img={saladImg}
            ></Menucategory> */}




        </div>
    );
};

export default Menu;