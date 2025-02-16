import { OrderService } from '@/api/services/(user)/Order';
import Button from '@/components/button/Button';
import CheckoutItem from '@/components/card/CheckoutItem';
import OrderSummaryCollapse from '@/components/collapse/OrderSummaryCollapse';
import Link from 'next/link';
import ErrorPage from './error';

type Params = Promise<{ id: string }>;

async function OrderDetailPage(props: { params: Params }) {
  const params = await props.params;
  const id = Number(params.id);

  const { userOrders } = await OrderService.getOrders();
  const { status, order } = await OrderService.getOrderDetail(id);

  const isValidOrder = userOrders.some((order) => order.id === id);

  if (status === 'error' || !isValidOrder || !order) return <ErrorPage />;

  const orderItemsCount = order?.OrderItems?.length;
  const subtotalPrice = order?.OrderItems?.reduce((prevTotal, item) => {
    return prevTotal + Number(item.price_each) * item.quantity;
  }, 0);
  const shippinFee = order?.shipping_fee;
  const totalPrice = order?.total_price;

  return (
    <div className='mx-auto max-w-screen-lg'>
      <div className='flex flex-col gap-4 lg:flex-row-reverse lg:justify-center'>
        {/* Order Summary */}
        <div className='mx-auto w-full max-w-lg lg:flex-1'>
          <OrderSummaryCollapse
            togglerStyle='down'
            totalPrice={Number(order.total_price)}
          >
            <div>
              {order.OrderItems.map((item) => (
                <CheckoutItem key={item.Product.id} checkoutItem={item} />
              ))}
            </div>
          </OrderSummaryCollapse>
          <div className='flex flex-col gap-2 p-4'>
            <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
              <span>Subtotal • {orderItemsCount} items</span>
              <span>${subtotalPrice.toLocaleString()}</span>
            </div>
            <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
              <span>Shipping</span>
              <span>${shippinFee.toLocaleString()}</span>
            </div>
            <div className='flex items-center justify-between gap-2 text-lg font-bold text-text-darkGray'>
              <span>Totals</span>
              <span>TWD ${totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
        {/* Order Detail Table */}
        <div className='mx-auto grid h-fit w-full max-w-lg grid-cols-2 border border-stone-300 bg-white font-medium lg:flex-1'>
          {/* Header  */}
          <div className='bg-stone-50'>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Order No.
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Order Date
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Total Price
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Status
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Customer Name
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Email
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Address
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Phone
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Shipping Method
            </h3>
            <h3 className='flex h-20 items-center justify-start p-4'>
              Payment
            </h3>
          </div>
          {/*  Body */}
          <div className=''>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              {order.id}
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              {order.order_date}
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              ${totalPrice.toLocaleString()}
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              {order.status}
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              {order.customer_name}
            </p>
            <p className='group relative flex h-20 cursor-help items-center justify-end border-b border-stone-300 p-4'>
              <span className='truncate text-right'>{order.email}</span>
              {/* Tooltip */}
              <span className='absolute right-0 top-16 z-50 hidden w-60 rounded-md border bg-white p-3 text-sm shadow-lg group-hover:block'>
                {order.email}
              </span>
            </p>
            <p className='group relative flex h-20 cursor-help items-center justify-end border-b border-stone-300 p-4'>
              <span className='truncate text-right'>{order.address}</span>
              {/* Tooltip */}
              <span className='absolute right-0 top-16 z-50 hidden w-60 rounded-md border bg-white p-3 text-sm shadow-lg group-hover:block'>
                {order.address}
              </span>
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              {order.phone}
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              {order.shipping_method}
            </p>
            <p className='flex h-20 items-center justify-end p-4'>
              {order.payment_method}
            </p>
          </div>
        </div>
      </div>
      <Link href='/profile/order' className='flex justify-end'>
        <Button
          text='Back to List'
          customClass='mt-5 w-fit bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover  hover:text-white font-medium'
        />
      </Link>
    </div>
  );
}

export default OrderDetailPage;
