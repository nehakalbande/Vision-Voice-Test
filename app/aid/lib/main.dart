import 'package:aid/third_page.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';


Color button = Color(0xff00C853);
Color text = Colors.black;
Color fill = Colors.white;
Color head = Color(0xff006A6A);

void main() async {
  runApp(MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}


class _HomePageState extends State<MyApp> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(

      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage('assets/bg.png'),
              fit: BoxFit.cover)

        ),

        child: Container(

          margin: EdgeInsets.symmetric(horizontal: 40.0),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[

                Image.asset(
                  'assets/1.1.png',
                  height: 300,
                ),

                new Padding(padding: const EdgeInsets.all(30.0)),

                Text(
                  'Welcome to Health App !',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: head, fontSize: 32,fontWeight: FontWeight.bold),
                ),

                new Padding(padding: const EdgeInsets.all(10.0)),

                Text(
                  'Your health, our responsibility',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.black, fontSize: 20,fontWeight: FontWeight.w500),
                ),

                new Padding(padding: const EdgeInsets.all(20.0)),

                RaisedButton(
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (_) => third_page()));
                  },
                  color: button,
                  child: Padding(
                    padding: EdgeInsets.all(10.0),

                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(
                          "Let's Start  ",
                          style: TextStyle(
                            fontSize: 25,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,

                          ),
                        ),
                        Icon(
                          Icons.arrow_forward,
                          color: Colors.white,
                        )
                      ],
                    ),
                  ),
                ),

                new Padding(padding: const EdgeInsets.all(10.0)),

              ],
            ),

          ),
        ),
      ),

    );
  }


}
