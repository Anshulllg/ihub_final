import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";

const BlogPage = () => {
 const { status, data } = useSession();
 const [name, setName] = useState("");
 const [image, setImage] = useState("");
 const [date, setDate] = useState("");
 const [link, setLink] = useState("");
 const [blogs, setBlogs] = useState([]);
 const [editBlog, setEditBlog] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
   if (status === "unauthenticated") Router.replace("/auth/login");
   axios.get('https://ihub-hbkk.onrender.com/blogs')
     .then(response => setBlogs(response.data))
     .catch(error => console.error(error));
 }, [status]);

 useEffect(() => {
   if (editBlog) {
     setEditBlog({
       ...editBlog,
       name: name,
       image: image,
       date: date,
       link: link
     });
   }
 }, [name, image, date, link]);

 const deleteBlog = (id) => {
   axios.delete(`https://ihub-hbkk.onrender.com/blogs/delete/${id}`)
     .then(res => {
       if (res.status === 200) {
         setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id))
       } else {
         console.error('Error deleting blog');
       }
     })
     .catch(error => console.error(error));
 };

 const addBlog = () => {
    convertBase64(image).then(base64Image => {
   axios.post("https://ihub-hbkk.onrender.com/blogs/add", {
     name: name,
     image: base64Image,
     date: date,
     link: link
   })
     .then(res => {
       console.log(res.data);
     })
     .catch(err => {
       console.error(err);
     });
    })
    alert("Blog Added Successfully")
 };

 const updateBlog = (id, updatedBlog) => {
   axios.put(`https://ihub-hbkk.onrender.com/blogs/${id}`, updatedBlog)
     .then(() => {
       setBlogs(prevBlogs => prevBlogs.map(blog => blog._id === id ? updatedBlog : blog));
       setEditBlog(null);
       setIsModalOpen(false);
     })
     .catch(error => console.error(error));
 };

 const editBlogs = (blog) => {
   setEditBlog(blog);
   setIsModalOpen(true);
 };
 const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

 return (
    <>
      {status === "authenticated" ? (
        <>
          <div className="p-4 my-12">
            <div className="space-y-2 space-x-2">
              
            <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setName(e.target.value)}
  name="name"
  value={name}
  placeholder="Name"
  rows={3} // Adjust the number of rows as needed
></textarea>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={handleImageChange}
  type="file"
/>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="text"
  onChange={(e) => setDate(e.target.value)}
  name="date"
  value={date}
  placeholder="Date"
/>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLink(e.target.value)}
  name="link"
  value={link}
  placeholder="Link"
/>

              <div className="flex justify-between">
                <button className=" bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addBlog}>Add</button>
              </div>
            </div>
          </div>
   
          <div className="my-8 p-8 space-y-2">
            {blogs.map((blog, index) => (
              <div className="grid grid-cols-5 gap-4 text-black" key={index}>
                <p>{blog.name}</p>
                <button className="bg-red-400 text-white p-1" onClick={() => deleteBlog(blog._id)}>Delete</button>
                <button className="bg-blue-400 text-white p-1" onClick={() => editBlogs(blog)}>Edit</button>
              </div>
            ))}
          </div>
   
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content ">
                <button onClick={() => setIsModalOpen(false)}>Close</button>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  updateBlog(editBlog._id, { name: name, image: image, date: date, link: link });
                }}>
                  <input type="text" value={editBlog ? editBlog.name : ''} onChange={(e) => setName(e.target.value)} />
                  {/* <input type="text" value={editBlog ? editBlog.image : ''} onChange={(e) => setImage(e.target.value)} /> */}
                  <input type="date" value={editBlog ? editBlog.date : ''} onChange={(e) => setDate(e.target.value)} />
                  <input type="text" value={editBlog ? editBlog.link : ''} onChange={(e) => setLink(e.target.value)} />
                  <button type="submit">Update</button>
                </form>
              </div>
            </div>
          )}
        </>
      )
      : (<div className="text-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>)}
    </>
   );
   
};

export default BlogPage;
function convertBase64(file) {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        res(fileReader.result)
      };
      fileReader.onerror = (error) => {
        rej(error)
      }
    })
   }
