import 'package:flutter/material.dart';
import 'event.dart';
import 'add_event_page.dart';

void main() {
  runApp(CampusEventApp());
}

class CampusEventApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Campus Events',
      home: EventHomePage(),
    );
  }
}

class EventHomePage extends StatefulWidget {
  @override
  _EventHomePageState createState() => _EventHomePageState();
}

class _EventHomePageState extends State<EventHomePage> {

  List<Event> events = [
    Event(
      title: "Tech Workshop",
      date: "20 April",
      description: "Flutter development workshop"
    ),
    Event(
      title: "Music Night",
      date: "25 April",
      description: "Live music on campus"
    )
  ];

  void addEvent(Event event){
    setState(() {
      events.add(event);
    });
  }

  void deleteEvent(int index){
    setState(() {
      events.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Campus Events (${events.length})"),
      ),

      body: ListView.builder(
        itemCount: events.length,
        itemBuilder: (context,index){

          return Card(
            child: ListTile(
              title: Text(events[index].title),
              subtitle: Text(events[index].date),
              trailing: IconButton(
                icon: Icon(Icons.delete),
                onPressed: (){
                  deleteEvent(index);
                },
              ),
            ),
          );
        },
      ),

      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () async {

          final newEvent = await Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context)=> AddEventPage()
            ),
          );

          if(newEvent != null){
            addEvent(newEvent);
          }

        },
      ),
    );
  }
}