/**
 * 👤 DASHBOARD EXAMPLE DATA - CUSTOMERS
 * Customer profiles for dashboard demo
 */

import type { Customer } from '@/types/dashboard';

export const exampleCustomers: Customer[] = [
  {
    id: "cust_001",
    shop_id: "shop_123",
    shopify_customer_id: "gid://shopify/Customer/8177118675180",
    email: "sarah.klein@example.com",
    phone: "+49 123 456 789",
    first_name: "Sarah",
    last_name: "Klein",
    orders_count: 12,
    total_spent: 1284.50,
    currency: "EUR",
    created_at: "2023-05-15T10:00:00Z",
    tags: ["VIP", "Returning"],
    is_vip: true,
    is_verified: true,
    country: "Germany",
    city: "Berlin",
    default_address: {
      address1: "Unter den Linden 21",
      address2: "Apartment 5B",
      city: "Berlin",
      province: "Berlin",
      zip: "10117",
      country: "Germany",
      phone: "+49 123 456 789"
    }
  },
  {
    id: "cust_002",
    shop_id: "shop_123",
    shopify_customer_id: "gid://shopify/Customer/8177118675181",
    email: "michael.s@example.com",
    phone: "+49 987 654 321",
    first_name: "Michael",
    last_name: "Schmidt",
    orders_count: 3,
    total_spent: 342.75,
    currency: "EUR",
    created_at: "2024-03-20T14:30:00Z",
    tags: ["Returning"],
    is_vip: false,
    is_verified: true,
    country: "Germany",
    city: "München"
  },
  {
    id: "cust_003",
    shop_id: "shop_123",
    shopify_customer_id: "gid://shopify/Customer/8177118675182",
    email: "anna.weber@example.com",
    phone: undefined,
    first_name: "Anna",
    last_name: "Weber",
    orders_count: 1,
    total_spent: 59.99,
    currency: "EUR",
    created_at: "2024-11-15T09:00:00Z",
    tags: [],
    is_vip: false,
    is_verified: false,
    country: "Germany",
    city: "Hamburg"
  }
];



