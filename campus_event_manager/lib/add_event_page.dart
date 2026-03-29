import 'package:flutter/material.dart';
import 'event.dart';

class AddEventPage extends StatefulWidget {
  @override
  _AddEventPageState createState() => _AddEventPageState();
}

class _AddEventPageState extends State<AddEventPage> {

  final titleController = TextEditingController();
  final dateController = TextEditingController();
  final descController = TextEditingController();

  void submitEvent(){

    if(titleController.text.isEmpty ||
       dateController.text.isEmpty ||
       descController.text.isEmpty){
      return;
    }

    final newEvent = Event(
      title: titleController.text,
      date: dateController.text,
      description: descController.text,
    );

    Navigator.pop(context,newEvent);
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Add Event"),
      ),

      body: Padding(
        padding: EdgeInsets.all(16),

        child: Column(
          children: [

            TextField(
              controller: titleController,
              decoration: InputDecoration(
                labelText: "Event Title"
              ),
            ),

            TextField(
              controller: dateController,
              decoration: InputDecoration(
                labelText: "Event Date"
              ),
            ),

            TextField(
              controller: descController,
              decoration: InputDecoration(
                labelText: "Description"
              ),
            ),

            SizedBox(height:20),

            ElevatedButton(
              onPressed: submitEvent,
              child: Text("Add Event"),
            )

          ],
        ),
      ),
    );
  }
}