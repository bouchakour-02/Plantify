import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo'; // Import the Logo component
import { Link } from 'react-router-dom'; 
import Cart from './Cart'; // Import Cart Component
function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenu, setSubMenu] = useState(null);
  const [anchorElSeeds, setAnchorElSeeds] = useState(null); 
  const [anchorElBeds, setAnchorElBeds] = useState(null); 
  const [anchorElFeatures, setAnchorElFeatures] = useState(null); 
  const [anchorElTrees, setAnchorElTrees] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Mock cart items
  const [wishlist, setWishlist] = useState([]);
   // Add to wishlist function
   const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };
  const handleClickSoilCare = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickSeeds = (event) => {
    setAnchorElSeeds(event.currentTarget);
  };

  const handleClickBeds = (event) => {
    setAnchorElBeds(event.currentTarget);
  };

  const handleClickFeatures = (event) => {
    setAnchorElFeatures(event.currentTarget);
  };

  const handleClickTrees = (event) => {
    setAnchorElTrees(event.currentTarget);
  };

  const handleCloseSoilCare = () => {
    setAnchorEl(null);
  };

  const handleCloseSeeds = () => {
    setAnchorElSeeds(null);
  };

  const handleCloseBeds = () => {
    setAnchorElBeds(null);
  };

  const handleCloseFeatures = () => {
    setAnchorElFeatures(null);
  };

  const handleCloseTrees = () => {
    setAnchorElTrees(null);
  };
  // Handle opening and closing cart
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Mock function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <AppBar position="static" color="transparent" elevation={0}>


       <Toolbar>
        {/* Logo redirects to home */}
        <Link to="/">
          <Logo />
        </Link>



        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {/* Garden Beds & Supplies Dropdown */}
          <Button aria-controls="garden-beds-menu" aria-haspopup="true" onClick={handleClickBeds}>
            Garden Beds & Supplies <span className="arrow">▼</span>
          </Button>
          <Menu
            id="garden-beds-menu"
            anchorEl={anchorElBeds}
            open={Boolean(anchorElBeds)}
            onClose={handleCloseBeds}
            sx={{ display: 'flex' }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', minWidth: '200px' }}>
                <MenuItem onClick={handleCloseBeds}><b>Garden Beds</b></MenuItem>
                <MenuItem onClick={handleCloseBeds}>Raised Garden Beds</MenuItem>
                <MenuItem onClick={handleCloseBeds}>Elevated Planters</MenuItem>
                <MenuItem onClick={handleCloseBeds}>Garden Kits</MenuItem>
              </Box>
              <Box sx={{ padding: '40px' }}>
                <img
                  src="https://nextluxury.com/wp-content/uploads/flower-bed-raised-garden-bed-ideas-creatingourfamilygarden.jpg"
                  alt="Garden Beds Best Sellers"
                  width="300"
                  height="300"
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                />
                <Button sx={{ display: 'block', marginTop: '10px', color: '#2E7D32' }}>
                  Shop Best Sellers
                </Button>
              </Box>
            </Box>
          </Menu>

          {/* Seeds & Plants Dropdown */}
          <Button aria-controls="seeds-plants-menu" aria-haspopup="true" onClick={handleClickSeeds}>
            Seeds & Plants <span className="arrow">▼</span>
          </Button>
          <Menu
            id="seeds-plants-menu"
            anchorEl={anchorElSeeds}
            open={Boolean(anchorElSeeds)}
            onClose={handleCloseSeeds}
            sx={{ display: 'flex' }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', minWidth: '200px' }}>
                <MenuItem onClick={handleCloseSeeds}><b>Seeds & Plants</b></MenuItem>
                <MenuItem onClick={handleCloseSeeds}>Vegetable Seeds</MenuItem>
                <MenuItem onClick={handleCloseSeeds}>Herb Seeds</MenuItem>
                <MenuItem onClick={handleCloseSeeds}>Flower Seeds</MenuItem>
                <MenuItem onClick={handleCloseSeeds}>Live Outdoor Plants</MenuItem>
              </Box>
              <Box sx={{ padding: '40px' }}>
                <img
                  src="https://www.smallfootprintfamily.com/wp-content/uploads/Best-Seed-Companies-for-Heirloom-Non-GMO-Seeds.jpg"
                  alt="Seeds Best Sellers"
                  width="300"
                  height="300"
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                />
                <Button sx={{ display: 'block', marginTop: '10px', color: '#2E7D32' }}>
                  Shop Best Sellers
                </Button>
              </Box>
            </Box>
          </Menu>

          {/* Soil Care Dropdown */}
          <Button aria-controls="soil-care-menu" aria-haspopup="true" onClick={handleClickSoilCare}>
            Soil Care <span className="arrow">▼</span>
          </Button>
          <Menu
            id="soil-care-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseSoilCare}
            sx={{ display: 'flex' }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', minWidth: '200px' }}>
                <MenuItem onClick={handleCloseSoilCare}><b>Soil Care</b></MenuItem>
                <MenuItem onClick={handleCloseSoilCare}>Shop All Soil Care</MenuItem>
                <MenuItem onClick={handleCloseSoilCare}>Mulch & Straw</MenuItem>
                <MenuItem onClick={handleCloseSoilCare}>Composting</MenuItem>
                <MenuItem onClick={handleCloseSoilCare}>Organic Fertilizers</MenuItem>
              </Box>
              <Box sx={{ padding: '40px' }}>
                <img
                  src="https://landscapedesignfirm.weebly.com/uploads/1/0/3/0/103097028/published/soil-care-services.jpg?1629458561"
                  alt="Soil Care Best Sellers"
                  width="300"
                  height="300"
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                />
                <Button sx={{ display: 'block', marginTop: '10px', color: '#2E7D32' }}>
                  Shop Best Sellers
                </Button>
              </Box>
            </Box>
          </Menu>

          {/* Features Dropdown */}
          <Button aria-controls="features-menu" aria-haspopup="true" onClick={handleClickFeatures}>
            Features <span className="arrow">▼</span>
          </Button>
          <Menu
            id="features-menu"
            anchorEl={anchorElFeatures}
            open={Boolean(anchorElFeatures)}
            onClose={handleCloseFeatures}
            sx={{ display: 'flex' }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', minWidth: '200px' }}>
                <MenuItem onClick={handleCloseFeatures}><b>Features</b></MenuItem>
                <MenuItem onClick={handleCloseFeatures}>New Arrivals</MenuItem>
                <MenuItem onClick={handleCloseFeatures}>Best Sellers</MenuItem>
                <MenuItem onClick={handleCloseFeatures}>Featured Products</MenuItem>
              </Box>
              <Box sx={{ padding: '40px' }}>
                <img
                  src="https://shop.epicgardening.com/cdn/shop/collections/Screen_Shot_2023-03-07_at_9.42.19_AM.png?height=600&v=1678214149"
                  alt="Features Best Sellers"
                  width="300"
                  height="300"
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                />
                <Button sx={{ display: 'block', marginTop: '10px', color: '#2E7D32' }}>
                  Shop Best Sellers
                </Button>
              </Box>
            </Box>
          </Menu>

          {/* Trees Dropdown */}
          <Button aria-controls="trees-menu" aria-haspopup="true" onClick={handleClickTrees}>
            Trees <span className="arrow">▼</span>
          </Button>
          <Menu
            id="trees-menu"
            anchorEl={anchorElTrees}
            open={Boolean(anchorElTrees)}
            onClose={handleCloseTrees}
            sx={{ display: 'flex' }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', minWidth: '200px' }}>
                <MenuItem onClick={handleCloseTrees}><b>Trees</b></MenuItem>
                <MenuItem onClick={handleCloseTrees}>Fruit Trees</MenuItem>
                <MenuItem onClick={handleCloseTrees}>Shade Trees</MenuItem>
                <MenuItem onClick={handleCloseTrees}>Flowering Trees</MenuItem>
              </Box>
              <Box sx={{ padding: '40px' }}>
                <img
                  src="https://img.freepik.com/premium-photo/young-baby-trees_29092-72.jpg"
                  alt="Trees Best Sellers"
                  width="300"
                  height="300"
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                />
                <Button sx={{ display: 'block', marginTop: '10px', color: '#2E7D32' }}>
                  Shop Best Sellers
                </Button>
              </Box>
            </Box>
          </Menu>
        </Box>

        {/* Icons for Search, Favorites, Account, and Cart */}
        <Box>
          <IconButton><SearchIcon /></IconButton>
          <IconButton><FavoriteIcon />{wishlist.length}</IconButton>
          <IconButton><AccountCircleIcon /></IconButton>
          <IconButton onClick={handleCartToggle}>
            <ShoppingCartIcon />
            </IconButton> {isCartOpen && (
          <Cart
            cartItems={cartItems}
            onClose={handleCartToggle} // Close Cart when clicking the close button
          />
        )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
