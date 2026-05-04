import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: UserProfileScreen(),
    );
  }
}

class UserProfileScreen extends StatelessWidget {
  const UserProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("User Profile"),
        backgroundColor: Colors.blueAccent,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const SizedBox(height: 20),
            // 1. Image de profil
            const CircleAvatar(
              radius: 60,
              backgroundImage: AssetImage('assets/photo_profil.jpeg'),
            ),
            const SizedBox(height: 15),
            
            // 2. Nom de l'utilisateur
            const Text(
              "Rassou Jean Israel Kouame",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            
            // 3. Bio/Description
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              child: Text(
                "Flutter developer passionate about creating fluid and modern interfaces.",
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.grey),
              ),
            ),
            
            const Divider(),

            // 4. Section Détails
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "Details",
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  // Email
                  const Row(
                    children: [
                      Icon(Icons.email, color: Colors.blue),
                      SizedBox(width: 10),
                      Text("rassouisrael@gmail.com"),
                    ],
                  ),
                  const SizedBox(height: 10),
                  // Phone
                  const Row(
                    children: [
                      Icon(Icons.phone, color: Colors.green),
                      SizedBox(width: 10),
                      Text("+91 90 40 48 02 36"),
                    ],
                  ),
                ],
              ),
            ),

            // 5. Bouton Follow (UI uniquement)
            ElevatedButton(
              onPressed: () {}, // Pas de fonctionnalité requise
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 15),
              ),
              child: const Text("Follow"),
            ),
          ],
        ),
      ),
    );
  }
}