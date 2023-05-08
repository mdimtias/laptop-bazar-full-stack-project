import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryItem from '../Category/CategoryItem';
import Loading from '../../SharedPage/Loading/Loading';

const AllCategory = () => {
   

    const { data: categories=[], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const { data: products=[] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if(categories.success === false){
        return <div className="text-center font-bold text-xl py-5">Data Load Fail</div>
    }
    return (
        <section className="all-category-section py-10">
            <div className='container mx-auto px-5'>
           <div className="all-category">
             <div>
             <h2 className='text-3xl font-bold pb-8 text-center'>Popular Category</h2>
             </div>
             {/* <div className="grid gap-2 mx-0 grid-cols-3 md:grid-cols-5 lg:grid-cols-10 justify-center"> */}
             <div className="flex flex-wrap gap-3 justify-center">
             {isLoading ? <Loading></Loading>: ""}
             {
                (typeof categories?.data === 'object' && Array.isArray(categories?.data) && typeof products?.data === 'object' && Array.isArray(products?.data)) && categories?.data?.map(category=>{
                    const lengthPd = products?.data?.filter(pd=>pd.categoryName === category.name)
                    const productLength = lengthPd?.length;
                        return <CategoryItem id={category.id} name={category.name} logo={category.logo} key={category._id} totalProduct={productLength}></CategoryItem>
                    })
                }
            </div>
        </div>
        </div>
        </section>
    );
};
export default AllCategory;