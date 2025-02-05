🚀 E-Commerce Backend with NodeJS & MongoDB

   

This is a NodeJS-based backend API that powers an e-commerce platform with MongoDB as the database. The backend provides user authentication, product management, and CRUD operations through well-structured REST APIs.

📌 Features

🔹 User Authentication (CRUD operations for users)

🔹 Product Management (CRUD operations for products)

🔹 RESTful API structure

🔹 MongoDB Database Integration

🔹 JSON-based API responses

🔹 Hosted on Render

🛠️ Tech Stack

Backend Framework: NodeJS

Database: MongoDB

Hosting: Render

API Client: Postman / ThunderClient

🔧 Installation & Setup

1️⃣ Clone the Repository

 git clone https://github.com/your-username/ecommerce-backend.git
 cd ecommerce-backend

📌 Available API Endpoints

🔹 User APIs

### 🔹 User APIs
| Method  | Endpoint            | Description          |
|---------|---------------------|----------------------|
| `POST`  | `/get_user_email`   | Fetch user by email |
| `GET`   | `/get_all_users`    | Get all users       |
| `POST`  | `/post_new_user`    | Add a new user      |
| `PUT`   | `/update_user`      | Update user details |
| `DELETE`| `/delete_user`      | Delete a user       |

### 🔹 Product APIs
| Method  | Endpoint            | Description          |
|---------|---------------------|----------------------|
| `GET`   | `/get_all_products` | Fetch all products  |
| `POST`  | `/post_product`     | Add a new product   |
| `PUT`   | `/update_product`   | Update product details |
| `DELETE`| `/delete_product`   | Delete a product    |


🔍 Testing the API with Postman

Open Postman and import the provided postman_collection.json file.

Set the base URL as http://127.0.0.1:5000 (or your hosted API URL).

Start testing various endpoints!

🤝 Contributing

Contributions are welcome! If you have ideas or improvements, feel free to fork this repository and submit a pull request.

Steps to Contribute:

Fork the repo

Create a new branch (git checkout -b feature-branch)

Commit changes (git commit -m "Added a new feature")

Push the branch (git push origin feature-branch)

Create a Pull Request

👨‍💻 Author

Dhruv (dhruv1472005@gmail.com)

⭐ Don't forget to star the repo if you like it! ⭐
