# Welcome to Happy Bakery Website!

<!-- ![前台](./src/assets/images/user.gif)

![後台](./src/assets/images/admin.gif) -->

## Features

Store Front

1. User can register, login and start shopping.
2. User can browse all products, new arrivals, and products by category; with a sorting dropdown menu to sort items by price or release date.
3. User can search products by clicking the magnifying glass icon in the header, displaying product pages based on search terms.
4. Product detail pages show product photos and descriptions. User can select quantity to add to cart or buy now to proceed directly to checkout.
5. Login is required to access cart page, checkout page and profile.
6. After adding to cart, user can view cart item count on the top right shopping bag icon. Click to view cart page.
7. User can edit cart items: modify quantities or delete items in cart page.
8. After entering complete shipping and payment information, view order history in profile via the user icon in header.
9. User can update personal information and password in the profile setting section.

<!-- 後台

1. 只有admin帳號可以登入—— 帳號：root@example.com 密碼：12345678
2. 可以觀看所有產品或分類顯示產品
3. 點選產品可以看到產品資料並修改
4. 可以新增產品、上傳產品照片至多4張
5. 預設可以看到7天前至今天的訂單，點選右上角日期可以修改日期區間，瀏覽不同時間的訂單
6. 點選訂單表格表頭可以做篩選或排序
7. 點選訂單check icon可以觀看訂單詳細資料，並做訂單編輯：修改狀態或撰寫備註
8. dashboard可以看到訂單銷售金額以及週月年的銷售額表
9. Best Sellers可點選右上角點點按鈕切換銷售量或銷售額排序 -->

## Installation and Execution

### Run the application locally

1. Download Happy Bakery Project and Install Dependencies

```bash
  git clone https://github.com/Yoruyeh/happy-bakery-nextjs.git
  cd api npm install
  cd client npm install
```

2. Create Database in SQL WorkBench

```
create database ecommerce_bakery
```

3. Run Database Migration and Seeder in Terminal

```bash
# model migration
npx sequelize db:migrate

# generate seed
npx sequelize db:seed:all
```

4. Create .env File in both api and client

```bash
# api
IMGUR_CLIENT_ID= your password
JWT_SECRET= your password
```

```bash
# client
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

5. Start both api and client server in Terminal

```bash
# api
npm run start

# client
npm run build
npm run start
```

6. Open Browser and Access http://localhost:8800
