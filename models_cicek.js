const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(45),
  },
  address: {
    type: DataTypes.STRING(45),
  },
});

const Order = sequelize.define('Order', {
  order_Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  User_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Review = sequelize.define('Review', {
  reviews_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  rating: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(45),
  },
  User_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Color = sequelize.define('Color', {
  color_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  color_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
});

const ProductImage = sequelize.define('Product_Image', {
  product_image_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  Product_product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Color_color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Product_Size_size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const ProductSize = sequelize.define('Product_Size', {
  size_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  hip_girth: {
    type: DataTypes.STRING(45),
  },
  chest_girth: {
    type: DataTypes.STRING(45),
  },
});

const Material = sequelize.define('Material', {
  material_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  material_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
});

const Part = sequelize.define('Part', {
  part_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  part_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
  Product_product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Color_color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Product_Size_size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Material_material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const PartCategory = sequelize.define('Part_Category', {
  part_category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  part_category_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
});

const ProductCategory = sequelize.define('Product_Category', {
  prod_category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  Product_product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Color_color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Product_Material_material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Part_Category_part_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => {
    console.log('Таблицы созданы успешно.');
  })
  .catch((error) => {
    console.error('Ошибка при создании таблиц: ', error);
  });

module.exports = { User, Order, Review, Color, ProductImage, ProductSize, Material, Part, PartCategory, ProductCategory };
