import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:aid/eye/e1.dart';
import 'package:aid/eye/ass.dart';

Color pc = Colors.black38;
Color sc = Colors.white70;
Color lc = Colors.cyan;

class eye1 extends StatefulWidget {
  @override
  _eye1State createState() => _eye1State();
}

class _eye1State extends State<eye1> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: pc,
      appBar: AppBar(backgroundColor: Colors.transparent,toolbarHeight: 40.0,),

      body: Container(
        alignment: Alignment.topCenter,
        margin: EdgeInsets.symmetric(horizontal: 40),
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                'Select the problem faced in',
                textAlign: TextAlign.center,
                style: GoogleFonts.openSans(color: Colors.white, fontSize: 35,fontWeight: FontWeight.bold),
              ),

              new Padding(padding: const EdgeInsets.all(30.0)),
              RaisedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (_) => e1()));
                },
                color: Colors.deepOrange,
                child: Padding(
                  padding: EdgeInsets.all(10.0),

                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[

                      Text(
                        "Visual Acuity ",
                        style: TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.w500,
                          color: Colors.white,

                        ),
                      ),
                      Icon(
                        Icons.arrow_forward,
                        color: Colors.white,
                      ),


                    ],
                  ),
                ),
              ),


              new Padding(padding: const EdgeInsets.all(15.0)),


              RaisedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (_) => ass()));
                },
                color: Colors.deepOrange,
                child: Padding(
                  padding: EdgeInsets.all(10.0),

                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[

                      Text(
                        "Other Problem  ",
                        style: TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.w500,
                          color: Colors.white,

                        ),
                      ),
                      Icon(
                        Icons.arrow_forward,
                        color: Colors.white,
                      ),

                    ],
                  ),
                ),
              ),

              new Padding(padding: const EdgeInsets.all(30.0)),
            ]
        ),

      ),

    );
  }
}
