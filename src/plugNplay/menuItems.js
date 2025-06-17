import img12 from '../pages/images/chai-image-home.webp';
import img1 from '../pages/images/special-chai.jpg';
import img2 from '../pages/images/doogh-patti.png';
import img3 from '../pages/images/kashmari-chai.jpg';


// PARATHA IMAGES
import img4 from '../pages/images/plain-paratha.webp';
import img5 from '../pages/images/alu-paratha.webp';
import img6 from '../pages/images/chicken-paratha-home.jpg';
import img7 from '../pages/images/cheese-paratha.webp';


// ICE CREAM IMAGES
import img8 from '../pages/images/chocolate-icecream.jpg';
import img9 from '../pages/images/strawberry-icecream.webp';
import img15 from '../pages/images/kulfa-image.jpg';
import img30 from '../pages/images/keema-paratha.jpg';
import img31 from '../pages/images/Anda Paratha.webp';
import img32 from '../pages/images/Anda Aalu Paratha.webp';
import img33 from '../pages/images/Chicken Paratha.jpeg';
import img34 from '../pages/images/Meetha Paratha.jpg';

// ROLL IMAGES
import img70 from '../pages/images/rolls/CHICKEN PARATHA ROLL.jpg';
import img71 from '../pages/images/rolls/CHICKEN CHEESE PARATHA ROLL.webp';


// SODA IMAGES
import img50 from '../pages/images/soda/lemon-soda.jpg';
import img51 from '../pages/images/soda/liche-soda.jpg';
import img52 from '../pages/images/soda/blueberry-soda.jpeg';
import img53 from '../pages/images/soda/imli-soda.jpg';
import img54 from '../pages/images/soda/apple-soda.jpg';
import img55 from '../pages/images/soda/chocolate-soda.jpg';
import img56 from '../pages/images/soda/banana-soda.jpg';
import img57 from '../pages/images/soda/matka-soda.jpg';
import img58 from '../pages/images/soda/mint-margrita.jpg';



// bottle images
import img16 from '../pages/images/coke.jpg';
import img17 from '../pages/images/sprite.webp';
import img18 from '../pages/images/mountain-dew.jpg';
import img19 from '../pages/images/7up.jpg';
import img20 from '../pages/images/marinda.jpg';
import img21 from '../pages/images/fanta3.webp';
import img22 from '../pages/images/sting.webp';
import img23 from '../pages/images/mineral-water.jpg';




export const menuItems = [

  // Chai
  { id: 1, name: 'Special Chai', category: 'chai', price: 100, description: 'Traditional spiced tea', image: img1 },
  { id: 2, name: 'Karak Chai', category: 'chai', price: 70, description: 'Strong brewed tea', image: img12 },
  { id: 3, name: 'Green Tea', category: 'chai', price: 60, description: 'Healthy green tea', image: img2 },
  { id: 4, name: 'Shakar Chai', category: 'chai', price: 80, description: 'Tea with unrefined sugar', image: img3 },

  // Rolls
  { id: 5, name: 'Chicken Paratha Roll', category: 'rolls', price: 160, description: 'Roll with chicken stuffing', image: img70 },
  { id: 6, name: 'Chicken Cheese Paratha Roll', category: 'rolls', price: 200, description: 'Cheesy chicken roll', image: img71 },

  // Paratha
  { id: 7, name: 'Sada Paratha', category: 'paratha', price: 60, description: 'Plain crispy paratha', image: img4 },
  { id: 8, name: 'Aalo Paratha', category: 'paratha', price: 130, description: 'Stuffed with potatoes', image: img5 },
  { id: 9, name: 'Aalu Cheese Paratha', category: 'paratha', price: 160, description: 'Potato and cheese paratha', image: img7 },
  { id: 10, name: 'Chicken Paratha', category: 'paratha', price: 200, description: 'Stuffed with minced chicken', image: img33 },
  { id: 11, name: 'Chicken Cheese Paratha', category: 'paratha', price: 220, description: 'Chicken and cheese stuffing', image: img7 },
  { id: 12, name: 'Keema Paratha', category: 'paratha', price: 250, description: 'Stuffed with spiced mince', image: img30 },
  { id: 13, name: 'Aalu Chicken Paratha', category: 'paratha', price: 230, description: 'Stuffed with potato and chicken', image: img6 },
  { id: 14, name: 'Anda Paratha', category: 'paratha', price: 130, description: 'Sada Paratha with Fried Egg', image: img31 },
  { id: 15, name: 'Anda Aalu Paratha', category: 'paratha', price: 160, description: 'Aluu Paratha with Fried Egg', image: img32 },
  { id: 16, name: 'Meetha Paratha', category: 'paratha', price: 120, description: 'Sweet paratha', image: img34 },

  // Soda Water
  { id: 17, name: 'Lemon Soda', category: 'soda', price: 50, description: 'Fresh lemon soda', image: img50 },
  { id: 18, name: 'Lychee Soda', category: 'soda', price: 50, description: 'Sweet lychee flavor soda', image: img51 },
  { id: 19, name: 'Blue Berry Soda', category: 'soda', price: 50, description: 'Blueberry flavor soda', image: img52 },
  { id: 20, name: 'Imli Soda', category: 'soda', price: 50, description: 'Tamarind soda', image: img53 },
  { id: 21, name: 'Apple Soda', category: 'soda', price: 50, description: 'Tangy apple soda', image: img54 },
  { id: 22, name: 'Chocolate Soda', category: 'soda', price: 60, description: 'Soda with chocolate twist', image: img55 },
  { id: 23, name: 'Banana Soda', category: 'soda', price: 60, description: 'Banana flavored soda', image: img56 },
  { id: 24, name: 'Matka Soda', category: 'soda', price: 70, description: 'Traditional matka soda', image: img57 },
  { id: 25, name: 'Mint Margita', category: 'soda', price: 100, description: 'Minty soda drink', image: img58 },

  // Beverages img16 onwards
  { id: 26, name: 'Coca Cola', category: 'beverages', price: 60, description: 'Chilled Coke', image: img16 },
  { id: 27, name: 'Sprite', category: 'beverages', price: 60, description: 'Chilled Sprite', image: img17 },
  { id: 28, name: 'Dew', category: 'beverages', price: 60, description: 'Chilled Mountain Dew', image: img18 },
  { id: 29, name: '7UP', category: 'beverages', price: 60, description: 'Chilled 7UP', image: img19 },
  { id: 30, name: 'Marinda', category: 'beverages', price: 60, description: 'Chilled Marinda', image: img20 },
  { id: 31, name: 'Fanta', category: 'beverages', price: 60, description: 'Chilled Fanta', image: img21 },
  { id: 32, name: 'Sting', category: 'beverages', price: 70, description: 'Energy drink', image: img22 },
  { id: 33, name: 'Small Mineral Water', category: 'beverages', price: 50, description: 'Bottled mineral water', image: img23 },

  // ICE CREAM
  { id: 34, name: 'Special Khoya Qulfi', category: 'icecream', price: 60, description: 'Traditional Khoya-based frozen dessert', image: img15 },
  { id: 35, name: 'Chocolate Ice Cream', category: 'icecream', price: 60, description: 'Traditional desi ice cream', image: img8 },
  { id: 36, name: 'Strawberry Ice Cream', category: 'icecream', price: 60, description: 'Rose flavored ice cream with Strawberry', image: img9 },
];

