import { motion } from "framer-motion";

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick(product)}
      className="cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="bg-gray-100 h-48 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="mt-1 text-base font-semibold text-gray-900">
          ₹ {product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
