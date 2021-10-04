import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'eye1.dart';

Color pc = Colors.black38;
Color sc = Colors.white70;
Color lc = Colors.cyan;
class eyei extends StatefulWidget {
  @override
  _eyeiState createState() => _eyeiState();
}

class _eyeiState extends State<eyei> {
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

              Image.asset(
                'assets/eye.png',
                height: 100,
              ),

              new Padding(padding: const EdgeInsets.all(10.0)),

              Text(
                'Instructions',
                textAlign: TextAlign.center,
                style: GoogleFonts.openSans(color: Colors.white, fontSize: 35,fontWeight: FontWeight.bold),
              ),

              new Padding(padding: const EdgeInsets.all(25.0)),

              Text(
                '1. Place yourself 1 meter from the\n    screen.\n'
                '\n2. If you have glasses, then keep\n    them on.\n'
                '\n3. Without pressing on the eyelid,\n    cover your left/right eye with\n    your hand.\n'
                '\n4. Enter text you see in given text\n     box.\n',
                textAlign: TextAlign.left,
                style: GoogleFonts.openSans(color: Colors.white, fontSize: 20,fontWeight: FontWeight.bold),
              ),

              new Padding(padding: const EdgeInsets.all(10.0)),

              RaisedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (_) => eye1()));
                },
                color: Colors.deepOrange,
                child: Padding(
                  padding: EdgeInsets.all(10.0),

                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[

                      Text(
                        "  Continue  ",
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
