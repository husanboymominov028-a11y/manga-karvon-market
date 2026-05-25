import React, { useState } from 'react';
import { Container, Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Telefon Samsung', price: 500000, seller: 'Admin', status: 'Active', category: 'Electronics' },
    { id: 2, name: 'Noutbuk Dell', price: 2000000, seller: 'Admin', status: 'Active', category: 'Electronics' },
    { id: 3, name: 'Aqlli soat', price: 150000, seller: 'Admin', status: 'Active', category: 'Electronics' },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseInt(newProduct.price),
        seller: 'Admin',
        status: 'Active',
        category: newProduct.category || 'Other'
      };
      setProducts([...products, product]);
      handleCloseDialog();
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          🛍️ Admin Panel - Manga Karvon Market
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'gray' }}>
          Savdoqidlar va tovarlarni boshqarish paneli
        </Typography>
      </Box>

      {/* Stats */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 4 }}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Jami Tovarlar</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main' }}>{products.length}</Typography>
        </Paper>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Jami Buyurtmalar</Typography>
          <Typography variant="h4" sx={{ color: 'success.main' }}>0</Typography>
        </Paper>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Kunigi Daromad</Typography>
          <Typography variant="h4" sx={{ color: 'warning.main' }}>0 So'm</Typography>
        </Paper>
      </Box>

      {/* Add Product Button */}
      <Box sx={{ mb: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={handleOpenDialog}
          sx={{ mb: 2 }}
        >
          ➕ Yangi Tovar Qo'shish
        </Button>
      </Box>

      {/* Products Table */}
      <Paper>
        <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>
          📦 Tovarlar Ro'yxati
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Tovar nomi</strong></TableCell>
              <TableCell><strong>Kategor</strong></TableCell>
              <TableCell><strong>Narx (So'm)</strong></TableCell>
              <TableCell><strong>Sotuvchi</strong></TableCell>
              <TableCell><strong>Holat</strong></TableCell>
              <TableCell><strong>Amallar</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell><strong>{product.price.toLocaleString()}</strong></TableCell>
                <TableCell>{product.seller}</TableCell>
                <TableCell>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      backgroundColor: 'success.light',
                      color: 'success.dark',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      display: 'inline-block'
                    }}
                  >
                    {product.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button 
                    size="small" 
                    variant="outlined" 
                    color="error"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    🗑️ O'chirish
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Add Product Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>➕ Yangi Tovar Qo'shish</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Tovar nomi"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Narx (So'm)"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              fullWidth
            />
            <TextField
              label="Kategor"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Bekor qilish</Button>
          <Button onClick={handleAddProduct} variant="contained" color="primary">
            Saqlash
          </Button>
        </DialogActions>
      </Dialog>

      {/* Statistics Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>📊 Statistika</Typography>
        <Paper sx={{ p: 2 }}>
          <Typography>📈 Kuniga: 0 ta buyurtma</Typography>
          <Typography>📈 Haftaliga: 0 ta buyurtma</Typography>
          <Typography>📈 Oyiga: 0 ta buyurtma</Typography>
          <Typography>📈 Yiliga: 0 ta buyurtma</Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
