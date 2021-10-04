import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'eyei.dart';
import 'eari.dart';

Color pc = Colors.black38;
Color sc = Colors.white70;
Color lc = Colors.cyan;


class third_page extends StatefulWidget {
  @override
  _third_pageState createState() => _third_pageState();
}

class _third_pageState extends State<third_page> {
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
                'Select To Continue',
                textAlign: TextAlign.center,
                style: GoogleFonts.openSans(color: Colors.white, fontSize: 35,fontWeight: FontWeight.bold),
              ),

              new Padding(padding: const EdgeInsets.all(30.0)),
              RaisedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (_) => eyei()));
                },
                color: Colors.deepOrange,
                child: Padding(
                  padding: EdgeInsets.all(10.0),

                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[

                      Text(
                        "  EYE  ",
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

                      Text("    "),

                      Image.asset(
                        'assets/eye.png',
                        height: 40,
                      ),
                    ],
                  ),
                ),
              ),


              new Padding(padding: const EdgeInsets.all(15.0)),

              RaisedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (_) => eari()));
                },
                color: Colors.deepOrange,
                child: Padding(
                  padding: EdgeInsets.all(10.0),

                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[

                      Text(
                        "  EAR  ",
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
                      Text("    "),
                      Image.asset(
                        'assets/ear.png',
                        height: 40,
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
