import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const MyOrders = () => {
  useTitle("My Order");
    const {user} = useContext(AuthContext);
    const { data: orders = [] } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/${user?.email}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
        <h2 className="text-3xl mb-5">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SN</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Price</th>
                <th>Pay</th>
              </tr>
            </thead>

            <tbody>
            {(orders.length === 0 || orders.data.length === 0) && <tr><td className="text-center text-bold text-xl py-5">You have no order</td></tr>}
              {orders?.data?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td><img src={order?.image} alt="" className='w-[75px]' /></td>
                  <td>{order?.product_name}</td>
                  <td>{order?.meeting_location}</td>
                  <td>{order?.phone}</td>
                  <td>{order?.price}</td>
                  <td>Pay</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;