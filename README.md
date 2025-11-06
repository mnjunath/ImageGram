```markdown
# 🖼️ ImageGram API

**ImageGram** is a **backend-only RESTful API** built using **Node.js**, **Express.js**, and **MongoDB**.  
It powers an image-sharing platform where users can **upload, retrieve, and delete images** with captions — functioning like the backend engine of a minimalist social media application.  

The API supports secure image management and can be tested using **Postman** or any REST client.

---

## 🌐 Live API

🚀 **Deployed on Render:** [https://imagegram-2-443d.onrender.com](https://imagegram-2-443d.onrender.com)

📦 **GitHub Repository:** [https://github.com/mnjunath/ImageGram](https://github.com/mnjunath/ImageGram)

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend Framework** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **File Storage** | Multer (for image uploads) |
| **Runtime Environment** | Node.js |
| **Deployment** | Render |
| **Testing Tool** | Postman |

---

## 📁 Folder Structure

```

ImageGram/
│
├── src/
│   ├── config/        # Database connection setup
│   ├── controllers/   # Business logic for routes
│   ├── models/        # Mongoose schemas for data
│   ├── routes/        # API route definitions
│   └── uploads/       # Directory where uploaded images are stored
│
├── package.json
├── .env               # Environment variables (Mongo URI, port)
└── README.md

```

---

## 🧩 API Endpoints

### 🟢 Base URL  
```

[https://imagegram-2-443d.onrender.com](https://imagegram-2-443d.onrender.com)

````

### 📸 Image Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/images/upload` | Upload an image with caption |
| `GET`  | `/api/images` | Get all uploaded images |
| `GET`  | `/api/images/:id` | Fetch a specific image by ID |
| `DELETE` | `/api/images/:id` | Delete an image by ID |

---

## 📤 Image Upload (Example Request)

**Endpoint:**  
`POST /api/images/upload`

**Form-Data Parameters:**
| Key | Type | Description |
|-----|------|-------------|
| `image` | File | Image file (JPG/PNG) |
| `caption` | String | Caption for the uploaded image |

**Response Example:**
```json
{
  "success": true,
  "message": "Image uploaded successfully!",
  "data": {
    "_id": "672f7bfc1e1a0b998ab3ef23",
    "caption": "Sunset in Bali",
    "imageUrl": "uploads/sunset-bali.jpg",
    "createdAt": "2025-11-05T10:45:00.123Z"
  }
}
````

---

## 🗑️ Delete Image

**Endpoint:**
`DELETE /api/images/:id`

**Response Example:**

```json
{
  "success": true,
  "message": "Image deleted successfully."
}
```

---

## 🧠 Features

* ✅ RESTful API architecture
* ✅ Upload and serve images from local storage
* ✅ MongoDB integration with Mongoose
* ✅ Handles image metadata (caption, timestamps)
* ✅ Supports CRUD operations
* ✅ Deployed and accessible on Render

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

---

## 🧰 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/mnjunath/ImageGram.git

# Navigate to project folder
cd ImageGram

# Install dependencies
npm install

# Run the server (development)
npm run dev

# or (production)
npm start
```

The server runs at:
`http://localhost:3000`

---

## 🧪 Testing the API

You can test all endpoints using **Postman**:

1. Import the base URL.
2. Use form-data to upload an image (`POST /api/images/upload`).
3. Use `GET` and `DELETE` endpoints to verify CRUD functionality.

---

## 🚀 Deployment

Deployed on **Render** with automatic GitHub CI/CD integration.
The live backend URL is accessible at:
👉 [https://imagegram-2-443d.onrender.com](https://imagegram-2-443d.onrender.com)

---

## 📚 Future Enhancements

* 🔐 Add user authentication (JWT-based)
* ☁️ Integrate with Cloudinary for cloud image storage
* 💬 Add comment and like functionality
* 📈 Include pagination and filtering for images

---

## 👨‍💻 Contributors

| Name                   | Role      |
| ---------------------- | --------- |
| **M. Manjunath Reddy** | Developer |

---

## 📄 License

This project is released under the **MIT License**.
Feel free to use, modify, and improve the project.

---
