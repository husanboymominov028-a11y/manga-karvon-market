import 'package:flutter/material.dart';

void main() {
  runApp(const MangaKarvonApp());
}

class MangaKarvonApp extends StatelessWidget {
  const MangaKarvonApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '🛍️ Manga Karvon Market',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
        fontFamily: 'Roboto',
      ),
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  final List<Widget> _screens = [
    const HomeTab(),
    const ProductsTab(),
    const OrdersTab(),
    const ProfileTab(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('🛍️ Manga Karvon Market'),
        centerTitle: true,
        elevation: 0,
      ),
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Bosh',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_bag),
            label: 'Tovarlar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            label: 'Buyurtmalar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profil',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
      ),
    );
  }
}

class HomeTab extends StatelessWidget {
  const HomeTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Xush kelibsiz!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
              ),
              child: const Text('📱 Ro\'yxatdan O\'tish', style: TextStyle(fontSize: 16)),
            ),
            const SizedBox(height: 30),
            const Text(
              'Yangi Tovarlar',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Card(
              child: ListTile(
                leading: const Icon(Icons.shopping_bag),
                title: const Text('Telefon Samsung'),
                subtitle: const Text('500,000 So\'m'),
                trailing: ElevatedButton(
                  onPressed: () {},
                  child: const Text('Buyurtma'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ProductsTab extends StatelessWidget {
  const ProductsTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              decoration: InputDecoration(
                hintText: 'Tovar qidirish...',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
            const SizedBox(height: 20),
            Card(
              child: ListTile(
                leading: const Icon(Icons.shopping_bag),
                title: const Text('Noutbuk Dell'),
                subtitle: const Text('2,000,000 So\'m'),
                trailing: ElevatedButton(
                  onPressed: () {},
                  child: const Text('Tanlash'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class OrdersTab extends StatelessWidget {
  const OrdersTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: const [
          Text(
            'Buyurtmalarim',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 20),
          Card(
            child: Padding(
              padding: EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Buyurtma holati: Yangi'),
                  Text('Tovar: Telefon'),
                  Text('Narx: 500,000 So\'m'),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ProfileTab extends StatelessWidget {
  const ProfileTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          CircleAvatar(
            radius: 50,
            child: const Text('👤'),
            backgroundColor: Colors.grey[300],
          ),
          const SizedBox(height: 20),
          const Text(
            'Profil ma\'lumotlari',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 20),
          const ListTile(
            leading: Icon(Icons.phone),
            title: Text('Telefon: +998 90 123 45 67'),
          ),
          const ListTile(
            leading: Icon(Icons.location_on),
            title: Text('Viloyat: Tashkent'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Chiqish'),
          ),
        ],
      ),
    );
  }
}
