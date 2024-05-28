import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -18,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

// interface CartItem {
//   _id: string;
//   Back_Jacket_length: string;
//   Back_Width: string;
//   BreastStyle: string;
//   ButtonStyle: string;
//   Chest_Circumference: string;
//   Front_Jacket_length: string;
//   Head_Circumference: string;
//   Height: string;
//   Hip_Circumference: string;
//   Inside_Length: string;
//   Message: string;
//   Neck_Circumference: string;
//   ShoulderType: string;
//   Sleeve_length: string;
//   Trouser_Length: string;
//   Type: string;
//   VentStyle: string;
//   Waist_Circumference: string;
//   bodyType: string;
//   item: string;
//   bodyFitting: string;
//   fabric: string;
//   lapelStyle: string;
//   trousePleat: string;
//   trouserBuckle: string;
//   trouserLoop: string;
//   trouserPocket: string;
// }

interface products {
  pname: string;
  StandardPrice: string;
}

interface DeliveryOption {
  deliveryType: string;
  price: string;
  handlingFee: string;
  tax: string;
  days: string;
}

interface Discountoption {
  discountName: string;
  discountPrice: string;
}

export default function BasketPage() {
  let [cartItem, setCartItem] = useState<any[]>([]);
  let [productItems, setProductItems] = useState<any[]>([]);
  let [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);
  let [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState<DeliveryOption | null>(null);
  let [discount, setDiscount] = useState<Discountoption[]>([]);
  const navigate = useNavigate();

  const getCartItems = async () => {
    await fetch("http://localhost:6451/cartlist")
      .then((res) => res.json())
      .then((cartItems) => {
        setCartItem(cartItems);
        // console.log(cartItems);
      })
      .catch((error) => console.error("Error fetching cart API:", error));
  };

  const getProductItems = async () => {
    await fetch("http://localhost:6451/products")
      .then((res) => res.json())
      .then((products) => {
        setProductItems(products);
        // console.log(products);
      })
      .catch((error) => console.error("Error fetching product API:", error));
  };

  const getDiscount = async () => {
    await fetch("http://localhost:6451/discount")
      .then((res) => res.json())
      .then((discountlist) => {
        setDiscount(discountlist);
        // console.log(discountlist);
      })
      .catch((error) => console.error("Error fetching Discount API:", error));
  };

  const deleteItem = async (id: string) => {
    let url = "http://localhost:6451/cartlist/" + id;
    let postdata = { method: "delete" };
    await fetch(url, postdata)
      .then((response) => response.json())
      .then((_serverres) => {
        alert("Item Deleted successfully ");
        getCartItems();
      });
  };

  const calculatePrice = (product: products) => {
    let price = 0;

    if (product.pname === "Trouser") {
      price = parseFloat(product.StandardPrice);
    } else if (
      product.pname === "Regular Blazer" ||
      product.pname === "Tuxedo Blazer"
    ) {
      price = parseFloat(product.StandardPrice);
    } else if (
      product.pname === "Suit (3piece)" ||
      product.pname === "Tuxedo (3piece)"
    ) {
      const blazerProduct = productItems.find(
        (product) =>
          product.pname === "Regular Blazer" ||
          product.pname === "Tuxedo Blazer"
      );
      const waistCoat = productItems.find(
        (product) => product.pname === "Waist Coat"
      );
      const trouserProduct = productItems.find(
        (product) => product.pname === "Trouser"
      );

      price +=
        parseFloat(blazerProduct.StandardPrice) +
        parseFloat(trouserProduct.StandardPrice) +
        parseFloat(waistCoat.StandardPrice);
    } else if (
      product.pname === "Suit (2piece)" ||
      product.pname === "Tuxedo (2piece)"
    ) {
      const blazerProduct = productItems.find(
        (product) =>
          product.pname === "Regular Blazer" ||
          product.pname === "Tuxedo Blazer"
      );
      const trouserProduct = productItems.find(
        (product) => product.pname === "Trouser"
      );

      price +=
        parseFloat(blazerProduct.StandardPrice) +
        parseFloat(trouserProduct.StandardPrice);
    }

    return price;
  };

  // const calculatePrice = ( product: products) => {
  //   // item: CartItem,
  //   // const backJacketLength = parseFloat(item.Back_Jacket_length);
  //   // const chestCircumference = parseFloat(item.Chest_Circumference);
  //   // const waistCircumference = parseFloat(item.Waist_Circumference);
  //   // const insideLength = parseFloat(item.Inside_Length);

  //   let price = 0;
  //   if (product.pname === "Trouser") {
  //     price = parseFloat(product.StandardPrice);
  //     // let priceByWaist, priceByInside = 0;

  //     // if (waistCircumference <= 76.5) {
  //     //   priceByWaist = product.priceXS;
  //     // } else if (waistCircumference > 76.5 && waistCircumference <= 81.5) {
  //     //   priceByWaist = product.priceS;
  //     // } else if (waistCircumference > 81.5 && waistCircumference <= 86.5) {
  //     //   priceByWaist = product.priceM;
  //     // } else if (waistCircumference > 86.5 && waistCircumference <= 91.5) {
  //     //   priceByWaist = product.priceL;
  //     // } else if (waistCircumference > 91.5 && waistCircumference <= 96.5) {
  //     //   priceByWaist = product.priceXL;
  //     // } else {
  //     //   priceByWaist = product.priceXXL;
  //     // }

  //     // if (insideLength <= 76.5) {
  //     //   priceByInside = product.priceXS;
  //     // } else if (insideLength > 76.5 && insideLength <= 79) {
  //     //   priceByInside = product.priceS;
  //     // } else if (insideLength > 79 && insideLength <= 81.5) {
  //     //   priceByInside = product.priceM;
  //     // } else if (insideLength > 81.5 && insideLength <= 84) {
  //     //   priceByInside = product.priceL;
  //     // } else if (insideLength > 84 && insideLength <= 86.5) {
  //     //   priceByInside = product.priceXL;
  //     // } else {
  //     //   priceByInside = product.priceXXL;
  //     // }

  //     // if (priceByWaist >= priceByInside) {
  //     //   price = priceByWaist;
  //     // } else {
  //     //   price = priceByInside;
  //     // }
  //   } else if (product.pname === "Regular Blazer" || product.pname === "Tuxedo Blazer") {

  //     price = parseFloat(product.StandardPrice);

  //     // let priceByChest, priceByBack;

  //     // if (chestCircumference <= 91.5) {
  //     //   priceByChest = product.priceXS;
  //     // } else if (chestCircumference > 91.5 && chestCircumference <= 96.5) {
  //     //   priceByChest = product.priceS;
  //     // } else if (chestCircumference > 96.5 && chestCircumference <= 102) {
  //     //   priceByChest = product.priceM;
  //     // } else if (chestCircumference > 102 && chestCircumference <= 107) {
  //     //   priceByChest = product.priceL;
  //     // } else if (chestCircumference > 107 && chestCircumference <= 112) {
  //     //   priceByChest = product.priceXL;
  //     // } else {
  //     //   priceByChest = product.priceXXL;
  //     // }

  //     // if (backJacketLength <= 69.5) {
  //     //   priceByBack = product.priceXS;
  //     // } else if (backJacketLength > 69.5 && backJacketLength <= 72.5) {
  //     //   priceByBack = product.priceS;
  //     // } else if (backJacketLength > 72.5 && backJacketLength <= 77.5) {
  //     //   priceByBack = product.priceM;
  //     // } else if (backJacketLength > 77.5 && backJacketLength <= 78.5) {
  //     //   priceByBack = product.priceL;
  //     // } else if (backJacketLength > 78.5 && backJacketLength <= 81.5) {
  //     //   priceByBack = product.priceXL;
  //     // } else {
  //     //   priceByBack = product.priceXXL;
  //     // }

  //     // if (priceByChest >= priceByBack) {
  //     //   price = priceByChest;
  //     // } else {
  //     //   price = priceByBack;
  //     // }

  //   } else if (product.pname === "Suit (3piece)" || product.pname === "Tuxedo (3piece)") {
  //     const blazerProduct = productItems.find((product) => product.pname === "Regular Blazer" || product.pname === "Tuxedo Blazer");
  //     const waistCoat = productItems.find((product) => product.pname === "Waist Coat");
  //     const trouserProduct = productItems.find((product) => product.pname === "Trouser");

  //     price += blazerProduct.StandardPrice + waistCoat.StandardPrice + trouserProduct.StandardPrice;

  //     // let blazerPriceByChest = 0, blazerPriceByBack = 0;
  //     // let waistCoatPriceByChest = 0, waistCoatPriceByBack = 0;
  //     // let trouserPriceByWaist = 0, trouserPriceByInside = 0;

  //     // if (blazerProduct && waistCoat) {
  //     //   if (chestCircumference <= 91.5) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceXS);
  //     //     waistCoatPriceByChest = parseFloat(waistCoat.priceXS);
  //     //   } else if (chestCircumference > 91.5 && chestCircumference <= 96.5) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceS);
  //     //     waistCoatPriceByChest = parseFloat(waistCoat.priceS);
  //     //   } else if (chestCircumference > 96.5 && chestCircumference <= 102) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceM);
  //     //     waistCoatPriceByChest = parseFloat(waistCoat.priceM);
  //     //   } else if (chestCircumference > 102 && chestCircumference <= 107) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceL);
  //     //     waistCoatPriceByChest = parseFloat(waistCoat.priceL);
  //     //   } else if (chestCircumference > 107 && chestCircumference <= 112) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceXL);
  //     //     waistCoatPriceByChest = parseFloat(waistCoat.priceXL);
  //     //   } else {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceXXL);
  //     //     waistCoatPriceByChest = parseFloat(waistCoat.priceXXL);
  //     //   }

  //     //   if (backJacketLength <= 69.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceXS);
  //     //     waistCoatPriceByBack = parseFloat(waistCoat.priceXS);
  //     //   } else if (backJacketLength > 69.5 && backJacketLength <= 72.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceS);
  //     //     waistCoatPriceByBack = parseFloat(waistCoat.priceS);
  //     //   } else if (backJacketLength > 72.5 && backJacketLength <= 77.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceM);
  //     //     waistCoatPriceByBack = parseFloat(waistCoat.priceM);
  //     //   } else if (backJacketLength > 77.5 && backJacketLength <= 78.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceL);
  //     //     waistCoatPriceByBack = parseFloat(waistCoat.priceXL);
  //     //   } else if (backJacketLength > 78.5 && backJacketLength <= 81.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceXL);
  //     //     waistCoatPriceByBack = parseFloat(waistCoat.priceXL);
  //     //   } else {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceXXL);
  //     //     waistCoatPriceByBack = parseFloat(waistCoat.priceXXL);
  //     //   }
  //     // }

  //     // if (trouserProduct) {
  //     //   if (waistCircumference <= 76.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceXS);
  //     //   } else if (waistCircumference > 76.5 && waistCircumference <= 81.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceS);
  //     //   } else if (waistCircumference > 81.5 && waistCircumference <= 86.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceM);
  //     //   } else if (waistCircumference > 86.5 && waistCircumference <= 91.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceL);
  //     //   } else if (waistCircumference > 91.5 && waistCircumference <= 96.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceXL);
  //     //   } else {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceXXL);
  //     //   }

  //     //   if (insideLength <= 76.5) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceXS);
  //     //   } else if (insideLength > 76.5 && insideLength <= 79) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceS);
  //     //   } else if (insideLength > 79 && insideLength <= 81.5) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceM);
  //     //   } else if (insideLength > 81.5 && insideLength <= 84) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceL);
  //     //   } else if (insideLength > 84 && insideLength <= 86.5) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceXL);
  //     //   } else {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceXXL);
  //     //   }

  //     // }

  //     // const blazerPrice = Math.max(blazerPriceByChest, blazerPriceByBack);
  //     // const waistCoatPrice = Math.max(waistCoatPriceByChest, waistCoatPriceByBack);
  //     // const trouserPrice = Math.max(trouserPriceByWaist, trouserPriceByInside);

  //     // price += blazerPrice + waistCoatPrice + trouserPrice;

  //   } else if (product.pname === "Suit (2piece)" || product.pname === "Tuxedo (2piece)") {
  //     const blazerProduct = productItems.find((product) => product.pname === "Regular Blazer" || product.pname === "Tuxedo Blazer");
  //     const trouserProduct = productItems.find((product) => product.pname === "Trouser");

  //     price += blazerProduct.StandardPrice + trouserProduct.StandardPrice;
  //     // let blazerPriceByChest = 0, blazerPriceByBack = 0;
  //     // let trouserPriceByWaist = 0, trouserPriceByInside = 0;

  //     // if (blazerProduct) {
  //     //   if (chestCircumference <= 91.5) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceXS);
  //     //   } else if (chestCircumference > 91.5 && chestCircumference <= 96.5) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceS);
  //     //   } else if (chestCircumference > 96.5 && chestCircumference <= 102) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceM);
  //     //   } else if (chestCircumference > 102 && chestCircumference <= 107) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceL);
  //     //   } else if (chestCircumference > 107 && chestCircumference <= 112) {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceXL);
  //     //   } else {
  //     //     blazerPriceByChest = parseFloat(blazerProduct.priceXXL);
  //     //   }

  //     //   if (backJacketLength <= 69.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceXS);
  //     //   } else if (backJacketLength > 69.5 && backJacketLength <= 72.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceS);
  //     //   } else if (backJacketLength > 72.5 && backJacketLength <= 77.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceM);
  //     //   } else if (backJacketLength > 77.5 && backJacketLength <= 78.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceL);
  //     //   } else if (backJacketLength > 78.5 && backJacketLength <= 81.5) {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceXL);
  //     //   } else {
  //     //     blazerPriceByBack = parseFloat(blazerProduct.priceXXL);
  //     //   }
  //     // }

  //     // if (trouserProduct) {
  //     //   if (waistCircumference <= 76.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceXS);
  //     //   } else if (waistCircumference > 76.5 && waistCircumference <= 81.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceS);
  //     //   } else if (waistCircumference > 81.5 && waistCircumference <= 86.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceM);
  //     //   } else if (waistCircumference > 86.5 && waistCircumference <= 91.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceL);
  //     //   } else if (waistCircumference > 91.5 && waistCircumference <= 96.5) {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceXL);
  //     //   } else {
  //     //     trouserPriceByWaist = parseFloat(trouserProduct.priceXXL);
  //     //   }

  //     //   if (insideLength <= 76.5) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceXS);
  //     //   } else if (insideLength > 76.5 && insideLength <= 79) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceS);
  //     //   } else if (insideLength > 79 && insideLength <= 81.5) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceM);
  //     //   } else if (insideLength > 81.5 && insideLength <= 84) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceL);
  //     //   } else if (insideLength > 84 && insideLength <= 86.5) {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceXL);
  //     //   } else {
  //     //     trouserPriceByInside = parseFloat(trouserProduct.priceXXL);
  //     //   }
  //     // }
  //     // const blazerPrice = Math.max(blazerPriceByChest, blazerPriceByBack);
  //     // const trouserPrice = Math.max(trouserPriceByWaist, trouserPriceByInside);

  //     // price += blazerPrice + trouserPrice;
  //   }
  //   return price;
  // }

  const applyDiscount = (price: number, discount: string) => {
    const discountPercentage = parseFloat(discount.replace("%", "")) / 100;
    return price + price * discountPercentage;
  };

  const calculateSubtotal = () => {
    return cartItem.reduce((subtotal, item) => {
      const product = productItems.find(
        (product) => product.pname === item.Type
      );
      if (!product) return subtotal;

      let price = calculatePrice(product);

      if (
        [
          "Suit (2piece)",
          "Tuxedo (2piece)",
          "Suit (3piece)",
          "Tuxedo (3piece)",
        ].includes(item.Type)
      ) {
        const ItemDiscount = discount.find(
          (d) =>
            d.discountName ===
            (item.Type.includes("2piece")
              ? "2-Piece Discount"
              : "3-Piece Discount")
        );
        if (ItemDiscount) {
          price = applyDiscount(price, ItemDiscount.discountPrice);
        }
      }

      return (subtotal += price);
    }, 0);
  };

  const getDeliveryOptions = async () => {
    await fetch("http://localhost:6451/deliveryprice")
      .then((res) => res.json())
      .then((data) => {
        setDeliveryOptions(data);
        // console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching delivery options:", error)
      );
  };

  const handleDeliveryOptionChange = (option: DeliveryOption) => {
    setSelectedDeliveryOption(option);
  };

  const calculateTotal = () => {
    let subtotal = parseFloat(calculateSubtotal());
    let total = subtotal;

    if (selectedDeliveryOption) {
      total += parseFloat(
        selectedDeliveryOption.price.replace(/[^0-9.-]+/g, "")
      );
      total += parseFloat(
        selectedDeliveryOption.handlingFee.replace(/[^0-9.-]+/g, "")
      );
      total += parseFloat(selectedDeliveryOption.tax.replace(/[^0-9.-]+/g, ""));
    }

    return total.toFixed(2);
  };

  const handleCheckout = () => {
    const grandTotal = calculateTotal();
    const deliveryType = selectedDeliveryOption
      ? selectedDeliveryOption.deliveryType
      : "Standard Delivery";

    if (!deliveryType) {
      console.error("Delivery type is not selected");
      return;
    }

    if (!grandTotal) {
      console.error("Grand total is not calculated");
      return;
    }

    Promise.all(
      cartItem.map((item) => {
        const itemId = item._id;

        return fetch(`http://localhost:6451/cartlist/${itemId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ grandTotal, deliveryType }),
        });
      })
    )
      .then((responses) => {
        const allResponsesOk = responses.every((response) => response.ok);
        if (allResponsesOk) {
          navigate("/checkout");
        } else {
          throw new Error("Error while processing checkout");
        }
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
      });
  };

  useEffect(() => {
    getCartItems();
    getProductItems();
    getDeliveryOptions();
    getDiscount();
  }, []);

  if (cartItem.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4">Your Cart is empty</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          width: "80%",
          margin: "40px auto",
        }}
      >
        <Box
          sx={{
            margin: "20px 30px",
            border: "1px solid red",
            borderRadius: "10px",
            padding: "10px 30px",
          }}
        >
          <Typography variant="body2">
            <p>Note:</p>
            <ol>
              {deliveryOptions.map((option, index) => (
                <li key={index}>
                  Estimated <b>{option.deliveryType}</b> - {option.days}
                </li>
              ))}
              <li>
                Please expect a delay of approximately 3 days due to any
                unavoidable conditions.
              </li>
              <li>
                <Typography variant="body2" fontWeight={"bold"} color={"blue"}>
                  1% of every payment will be donated to patients.
                </Typography>
                {/* <span >
                  <b></b>
                </span> */}
              </li>
            </ol>
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sl.No</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Design</TableCell>
                <TableCell align="center">Fabric</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem.map((item, index) => {
                const product = productItems.find(
                  (product) => product.pname === item.Type
                );
                let price = product ? calculatePrice(product) : 0;
                let discountBadge = null;

                if (["Suit (2piece)", "Tuxedo (2piece)"].includes(item.Type)) {
                  const ItemDiscount = discount.find(
                    (d) => d.discountName === "2-Piece Discount"
                  );
                  if (ItemDiscount) {
                    price = applyDiscount(price, ItemDiscount.discountPrice);
                    discountBadge = ItemDiscount.discountPrice;
                  }
                }

                if (["Suit (3piece)", "Tuxedo (3piece)"].includes(item.Type)) {
                  const ItemDiscount = discount.find(
                    (d) => d.discountName === "3-Piece Discount"
                  );
                  if (ItemDiscount) {
                    price = applyDiscount(price, ItemDiscount.discountPrice);
                    discountBadge = ItemDiscount.discountPrice;
                  }
                }
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="center">{item.item}</TableCell>
                    <TableCell align="center">{item.Type}</TableCell>
                    <TableCell align="center">{item.fabric}</TableCell>
                    <TableCell align="right">
                      {discountBadge ? (
                        <StyledBadge
                          badgeContent={discountBadge}
                          color="primary"
                        >
                          $ {price}
                        </StyledBadge>
                      ) : (
                        `$${price}`
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => deleteItem(item._id)}>
                        <Delete sx={{ color: "red" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container>
          <Grid item xs={6}>
            <TableContainer component={Paper} variant={"outlined"}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>Shipping fee*</TableCell>
                    <TableCell align="right">
                      {deliveryOptions.map((option, index) => (
                        <div key={index}>
                          <Checkbox
                            checked={selectedDeliveryOption === option}
                            onChange={() => handleDeliveryOptionChange(option)}
                          />
                          {option.deliveryType} - {option.price}
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={6}>
            <TableContainer component={Paper} variant={"outlined"}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>Unit Price</TableCell>
                    <TableCell align="right">$ {calculateSubtotal()}</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell colSpan={2}>Total (Tailoring Price + Shipping Price)</TableCell>
                    <TableCell align="right">
                      {(parseFloat(calculateSubtotal()) + (selectedDeliveryOption ? parseFloat(selectedDeliveryOption.price) : 0)).toFixed(2)}$
                    </TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell colSpan={2}>Handling Fee</TableCell>
                    <TableCell align="right">
                      {selectedDeliveryOption?.handlingFee || "0.00"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Value Added Tax</TableCell>
                    <TableCell align="right">
                      {selectedDeliveryOption?.tax || "0.00"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Grand Total</TableCell>
                    <TableCell align="right">$ {calculateTotal()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              size="large"
              fullWidth
              disabled={!selectedDeliveryOption}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
