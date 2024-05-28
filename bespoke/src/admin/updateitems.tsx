import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  // Container,
} from "@mui/material";
import {
  // ChangeEvent,
  //  FormEvent,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

interface Product {
  _id: string;
  pname: string;
  photo: string;
  StandardPrice: string;
  // priceXS: string;
  // priceS: string;
  // priceM: string;
  // priceL: string;
  // priceXL: string;
  // priceXXL: string;
}

const Updateitems = () => {
  let [items, setItems] = useState<Product[]>([]);
  // const [newProduct, setNewProduct] = useState({
  //   pname: "",
  //   photo: "",
  //   StandardPrice: "",
  // });
  const navigate = useNavigate();

  const getProducts = () => {
    fetch("http://localhost:6451/products")
      .then((response) => response.json())
      .then((productArray) => {
        setItems(productArray);
        // console.log(productArray);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handlePriceChange = (
    field: keyof Product,
    value: string,
    index: number
  ) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      return updatedItems;
    });
  };

  const handleUpdate = (_id: string) => {
    const updatedProductIndex = items.findIndex((item) => item._id === _id);
    if (updatedProductIndex === -1) return;

    const updatedProduct = { ...items[updatedProductIndex] };

    const updatedPrices = {
      StandardPrice: updatedProduct.StandardPrice,
      // priceXS: updatedProduct.priceXS,
      // priceS: updatedProduct.priceS,
      // priceM: updatedProduct.priceM,
      // priceL: updatedProduct.priceL,
      // priceXL: updatedProduct.priceXL,
      // priceXXL: updatedProduct.priceXXL,
    };

    fetch(`http://localhost:6451/products/` + _id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPrices), // Send only the updated prices
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        return response.json();
      })
      .then((_data) => {
        alert("Product Price Updated");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        alert("Error updating product. Please try again later.");
      });
  };

  const handleGoBack = () => {
    navigate("/catalog/Dashboard");
  };

  // const handleNewProductChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setNewProduct((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleNewProductSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:6451/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newProduct),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to add Product");
  //     }
  //     const data = await response.json();
  //     console.log("Product added Successfully", data);
  //     setNewProduct({ pname: "", photo: "", StandardPrice: "" });
  //     getProducts();
  //   } catch (error) {
  //     console.log("Error adding product...");
  //   }
  // };

  // const handleDeleteClick = async (_id: string) => {
  //   if (window.confirm("Are you sure you want to delete this product?")) {
  //     try {
  //       const response = await fetch(`http://localhost:6451/products/${_id}`, {
  //         method: "DELETE",
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to delete product");
  //       }
  //       await response.json();
  //       alert("Product deleted successfully...");
  //       getProducts();
  //     } catch (error) {
  //       console.log("Error deleting product ", error);
  //       alert("Error deletng product. Please try again later.");
  //     }
  //   }
  // };

  return (
    <>
      <Box
        sx={{
          float: "right",
          marginRight: "20px",
          marginBottom: "20px",
        }}
      >
        <IconButton
          color="error"
          size="small"
          sx={{ border: 1 }}
          onClick={handleGoBack}
        >
          {" "}
          <CloseIcon />{" "}
        </IconButton>
      </Box>{" "}
      <br />
      <Typography variant="h6" align="center" sx={{ marginY: "20px" }}>
        {" "}
        Update Items{" "}
      </Typography>
      {/* <Grid container spacing={2}> */}
      <Grid item xs={8}>
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            marginY: "15px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {items.map((product, index) => {
            return (
              <Box
                key={index}
                sx={{
                  margin: "15px",
                  width: "200px",
                  height: "400px",
                  outline: "1px solid black",
                }}
              >
                <Typography variant="h6">{product.pname}</Typography>
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.photo}
                    alt={product.pname}
                    width="200px"
                    height="250px"
                  />
                  <Box sx={{ margin: "0px 10px" }}>
                    <label> Standard Price </label>
                    <TextField
                      size="small"
                      sx={{ margin: "5px" }}
                      value={product.StandardPrice}
                      onChange={(e) =>
                        handlePriceChange(
                          "StandardPrice",
                          e.target.value,
                          index
                        )
                      }
                    />
                    {/* <TextField
                      label=' S '
                      fullWidth
                      size="small"
                      sx={{ margin: "5px" }}
                      value={product.priceS}
                      onChange={(e) => handlePriceChange('priceS', e.target.value, index)}
                    />
                    <TextField
                      label=' M '
                      fullWidth
                      size="small"
                      sx={{ margin: "5px" }}
                      value={product.priceM}
                      onChange={(e) => handlePriceChange('priceM', e.target.value, index)}
                    />
                    <TextField
                      label=' L '
                      fullWidth
                      size="small"
                      sx={{ margin: "5px" }}
                      value={product.priceL}
                      onChange={(e) => handlePriceChange('priceL', e.target.value, index)}
                    />
                    <TextField
                      label=' XL '
                      fullWidth
                      size="small"
                      sx={{ margin: "5px" }}
                      value={product.priceXL}
                      onChange={(e) => handlePriceChange('priceXL', e.target.value, index)}
                    />
                    <TextField
                      label=' XXL '
                      fullWidth
                      size="small"
                      sx={{ margin: "5px" }}
                      value={product.priceXXL}
                      onChange={(e) => handlePriceChange('priceXXL', e.target.value, index)}
                    /> */}
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    console.log(product._id);
                    handleUpdate(product._id);
                  }}
                  sx={{ margin: "7px" }}
                >
                  {" "}
                  Update Price {/* <EditIcon /> */}
                </Button>
                {/* <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      handleDeleteClick(product._id);
                    }}
                  >
                    <DeleteIcon />
                  </Button> */}
              </Box>
            );
          })}
        </Box>
      </Grid>
      {/* <Grid item xs={4}>
          <Container maxWidth="sm">
            <Typography variant="h6" sx={{ marginY: "20px" }}>
              {" "}
              Add New Product{" "}
            </Typography>
            <form onSubmit={handleNewProductSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Product Name"
                    name="pname"
                    value={newProduct.pname}
                    onChange={handleNewProductChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Photo URL"
                    name="photo"
                    value={newProduct.photo}
                    onChange={handleNewProductChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Standard Price"
                    name="StandardPrice"
                    value={newProduct.StandardPrice}
                    onChange={handleNewProductChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Add Product
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Grid> */}
      {/* </Grid> */}
    </>
  );
};

export default Updateitems;
