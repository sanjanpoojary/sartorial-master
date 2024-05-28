import {
  Button,
  TextField,
  TextareaAutosize,
  CircularProgress,
  Box,
} from "@mui/material";
import {
  MailOutline as MailOutlineIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { useState } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(false);
  // const [attachment, setAttachment] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formDataToSend = new FormData(e.target as HTMLFormElement);

      // if (attachment) {
      //   formDataToSend.append("attachment", attachment);
      // }

      const response = await fetch("http://localhost:6451/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formDataToSend)),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }

      const data = await response.json();
      if (data.success === true) {
        successToast();
      } else if (data.success === false) {
        errorToast();
      }
    } catch (error) {
      console.log("Error", error);

      errorToast();
    } finally {
      setLoading(false);
    }
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setAttachment(e.target.files[0]);
  //   }
  // };

  const successToast = () => toast.success("Email sent successfully");
  const errorToast = () => toast.error("Failed to send email");

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <div style={{ padding: "1rem", margin: "auto", maxWidth: "600px" }}>
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Customer Support e-Mail Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold" }}>Customer Name :</label>
            <TextField
              type="text"
              placeholder="Customer name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
              InputProps={{
                startAdornment: <AccountCircleIcon />,
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "normal", opacity: 50 }}>
              To :support@talossolutionsllc.com
            </label>
            <br />
            <label style={{ fontWeight: "bold" }}>Customer mail id :</label>
            <TextField
              type="email"
              placeholder="customermail@xyz.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              InputProps={{
                startAdornment: <MailOutlineIcon />,
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold" }}>Subject :</label>
            <TextField
              type="text"
              placeholder="Enter the subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold" }}>Content :</label>
            <TextareaAutosize
              placeholder="Enter the content..."
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              minRows={5}
              style={{ width: "100%", padding: "0.5rem", resize: "vertical" }}
            />
          </div>
          {/* <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold" }}>Attachment :</label>
            <input
              type="file"
              // id="attachment"
              name="attachment"
              accept=".txt,.pdf,.jpeg,.png"
              onChange={handleFileChange}
              disabled={loading}
            />
          </div> */}
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              style={{ marginTop: "1rem" }}
            >
              {loading ? <CircularProgress size={24} /> : "Send mail"}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}

export default App;
