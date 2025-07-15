import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProductCard = ({ product }) => {
  const handleClick = () => {
    window.location.href = `/products/${product.id}`;
  };

  return (
    <div
      className="bg-white shadow-md shadow-gray-400 p-2  rounded-2xl flex flex-col items-center justify-between h-full w-full  transition-transform duration-300 hover:shadow-lg cursor-pointer hover:-translate-y-2"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className=" w-150 md:w-70 h-70 object-full rounded-t-lg"
        />
        <h2 className="text-lg font-semibold mt-2 text-wrap font-sans text-center">
          {product.title}
        </h2>
        <div className="flex items-center justify-center mt-2">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
            />
          </Stack>
          <span className="ml-1 text-gray-600">
            {product.rating.count} reviews
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 gap-4">
        <p className="text-lg font-bold mt-2">${product.price}</p>

        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              onClick={handleClick}
            >
              Details
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProductCard;
