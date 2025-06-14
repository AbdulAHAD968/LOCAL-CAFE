import img12 from '../pages/images/chai-image-home.webp';
import img13 from '../pages/images/samosa-home.webp';
import img1 from '../pages/images/special-chai.jpg';
import img2 from '../pages/images/doogh-patti.png';
import img3 from '../pages/images/kashmari-chai.jpg';
import img4 from '../pages/images/plain-paratha.webp';
import img5 from '../pages/images/alu-paratha.webp';
import img6 from '../pages/images/chicken-paratha-home.jpg';
import img7 from '../pages/images/cheese-paratha.webp';
import img8 from '../pages/images/chocolate-icecream.jpg';
import img9 from '../pages/images/strawberry-icecream.webp';
import img10 from '../pages/images/flavored-soda.jpg';
import img11 from '../pages/images/chai-preparation.webp';
import img14 from '../pages/images/chickenP+chai.jpg';

export const menuItems = [
  // Chai
  { id: 1, name: 'Special Chai', category: 'chai', price: 60, description: 'Traditional spiced tea', image: img1 },
  { id: 2, name: 'Elaichi Chai', category: 'chai', price: 80, description: 'Cardamom flavored tea', image: img12 },
  { id: 3, name: 'Doodh Patti', category: 'chai', price: 100, description: 'Thick milk tea', image: img2 },
  { id: 4, name: 'Kashmiri Chai', category: 'chai', price: 100, description: 'Pink tea with pistachios', image: img3 },

  // Snacks
  { id: 6, name: 'Samosa', category: 'snacks', price: 70, description: 'Spiced potato filling', image: img13 },

  // Paratha
  { id: 11, name: 'Plain Paratha', category: 'paratha', price: 50, description: 'Crispy flatbread', image: img4 },
  { id: 12, name: 'Aloo Paratha', category: 'paratha', price: 100, description: 'Stuffed with spicy potatoes', image: img5 },
  { id: 13, name: 'Chicken Paratha', category: 'paratha', price: 150, description: 'Stuffed with minced meat', image: img6 },
  { id: 14, name: 'Cheese Paratha', category: 'paratha', price: 200, description: 'Cheesy stuffed paratha', image: img7 },

  // Ice Cream
  { id: 15, name: 'Chocolate Ice Cream', category: 'icecream', price: 100, description: 'Traditional desi ice cream', image: img8 },
  { id: 16, name: 'Strawberry Ice Cream', category: 'icecream', price: 100, description: 'Rose flavored ice cream with Strawberry', image: img9 },

  // Beverages
  { id: 19, name: 'Flavored Soda', category: 'beverages', price: 100, description: 'Tangy soda with multpile flavours ', image: img10 },

  // Combos
  { id: 25, name: 'Chai + Samosa', category: 'combos', price: 100, description: 'Masala Chai with crispy samosa', image: img11 },
  { id: 26, name: 'Chai + Chicken Paratha', category: 'combos', price: 210, description: 'Special Chai with buttered rotti', image: img14 },
  { id: 27, name: 'Cheese Paratha + Ice Cream', category: 'combos', price: 300, description: 'Ice Cream (any) with Cheese Paratha', image: img7 },
];
