// import { Request, Response } from 'express';
// import { query } from '../src/pgConfig';

// interface OrderBlock {
//   lineNo: number | number[];
//   ProductCode: string;
// }

// interface Order {
//   orderID: string;
//   orderInvoiceNo: string;
//   OrderBlocks: OrderBlock[];
// }

// const isDivisibleByThree = (num: number): boolean => num % 3 === 0;

// const filterOrders = (orders: Order[]): Order[] => {
//   return orders.filter(order =>
//     order.OrderBlocks.some(orderBlock =>
//       Array.isArray(orderBlock.lineNo)
//         ? orderBlock.lineNo.some(lineNo => isDivisibleByThree(lineNo))
//         : isDivisibleByThree(orderBlock.lineNo)
//     )
//   );
// };

// const createOrdersTable = async () => {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS orders (
//       orderID VARCHAR(255) PRIMARY KEY
//     );
//   `;
//   await query(createTableQuery);
// };

// const storeOrderIDs = async (orders: Order[]) => {
//   for (const order of orders) {
//     try {
//       await query('INSERT INTO orders (orderID) VALUES ($1)', [order.orderID]);
//     } catch (error) {
//       console.error(`Failed to insert orderID ${order.orderID}:`, error);
//     }
//   }
// };

// export const filterAndStoreOrders = async (req: Request, res: Response) => {
//   const { items } = req.body;

//   if (!Array.isArray(items)) {
//     return res.status(400).send('Invalid payload format');
//   }

//   try {
//     await createOrdersTable();

//     const filteredOrders = filterOrders(items);
//     await storeOrderIDs(filteredOrders);

//     res.status(200).send('Orders processed successfully');
//   } catch (error) {
//     console.error('Error processing orders:', error);
//     res.status(500).send('Internal server error');
//   }
// };

import { Request, Response } from 'express';
import { query } from "../src/pgConfig"

interface OrderBlock {
  lineNo: number | number[];
  ProductCode: string;
}

interface Order {
  orderID: string;
  orderInvoiceNo: string;
  OrderBlocks: OrderBlock[];
}

const isDivisibleByThree = (num: number): boolean => num % 3 === 0;

const filterOrders = (orders: Order[]): Order[] => {
  return orders.filter(order =>
    order.OrderBlocks.some(orderBlock =>
      Array.isArray(orderBlock.lineNo)
        ? orderBlock.lineNo.some(lineNo => isDivisibleByThree(lineNo))
        : isDivisibleByThree(orderBlock.lineNo)
    )
  );
};

const storeOrderIDs = async (orders: Order[]) => {
  for (const order of orders) {
    try {
      await query('INSERT INTO orders (orderID) VALUES ($1)', [order.orderID]);
      console.log(`Order ID ${order.orderID} inserted successfully`);
    } catch (error) {
      console.error(`Failed to insert order ID ${order.orderID}:`, error);
    }
  }
};

export const filterAndStoreOrders = async (req: Request, res: Response) => {
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).send('Invalid payload format');
  }

  try {
    const filteredOrders = filterOrders(items);
    await storeOrderIDs(filteredOrders);
    res.status(200).send('Orders processed successfully');
  } catch (error) {
    console.error('Error processing orders:', error);
    res.status(500).send('An error occurred while processing orders');
  }
};
