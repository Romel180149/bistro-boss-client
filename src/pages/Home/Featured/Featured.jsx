import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
      <>
      
      <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle  subHeading="check it out" heading="Featured item" ></SectionTitle>
        
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
            <div>
              <img src={featuredImg} alt="" />  
            </div>
            <div className="md:ml-10">
                <p> Aug 20,2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos vitae libero inventore eaque maiores officiis. Ducimus maxime eos nihil molestiae! Dicta dignissimos vero et perferendis beatae ipsam natus, ullam tenetur quasi tempore dolores omnis minima repellat nesciunt necessitatibus quos sequi assumenda tempora autem, quia odio. Natus non dicta necessitatibus.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
            </div>
        </div>
        </div>
      
      </>
    );
};

export default Featured;