import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const Menucategory = ({ items, title, Img }) => {
    return (
        <div className="pt-8">
            {
                title && <Cover img={Img} title={title}  ></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-16 mb-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menucategory;