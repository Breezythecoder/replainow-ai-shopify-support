/**
 * 📦 DASHBOARD EXAMPLE DATA - ORDERS
 * Order data for dashboard demo
 */

import type { Order } from '@/types/dashboard';

export const exampleOrders: Order[] = [
  {
    id: "order_001",
    shop_id: "shop_123",
    shopify_order_id: "gid://shopify/Order/5678901234",
    order_number: "#12847",
    customer_name: "Sarah Klein",
    email: "sarah.klein@example.com",
    total_price: 139.99,
    currency: "EUR",
    financial_status: "paid",
    fulfillment_status: "FULFILLED",
    gateway: "Stripe",
    line_items: [
      {
        line_item_id: "gid://shopify/LineItem/123",
        id: "gid://shopify/LineItem/123",
        product_id: "prod_nike_001",
        variant_id: "var_001_42",
        title: "Nike Air Zoom Pegasus 40",
        name: "Nike Air Zoom Pegasus 40 - EU 42",
        quantity: 1,
        price: 139.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=90",
        sku: "NIKE-ZOOM-PEG40-42"
      }
    ],
    tracking_info: [
      {
        number: "ABC123456789",
        url: "https://tracking.dhl.de/ABC123456789",
        company: "DHL",
        status: "In Transit"
      }
    ],
    created_at: "2024-11-28T12:00:00Z",
    fulfilled_at: "2024-11-29T08:00:00Z"
  }
];



