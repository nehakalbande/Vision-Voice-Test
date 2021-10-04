import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:aid/third_page.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:aid/eye1.dart';

class amd extends StatefulWidget {
  @override
  _amdState createState() => _amdState();
}

class _amdState extends State<amd> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: EdgeInsets.all(20.0),
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              new Padding(padding: EdgeInsets.all(10.0),),
              Text(
                'To perform the test, remove your glasses and stand back 1 feet from the screen. Clover left eye with your left hand and look closely at the image, then repeat with the right eye.',
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 23.0,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
              new Padding(padding: EdgeInsets.all(10.0),),
              Image.asset(
                'assets/amd.gif',
                height: 300,
              ),

              new Padding(padding: EdgeInsets.all(2.0),),
              new Padding(padding: EdgeInsets.all(15.0),
                child: Text(
                  "Concentrate on the central point in the grid without moving your gaze. Do you see any strong distortions in certain lines?",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 23.0,
                    fontWeight: FontWeight.bold,
                    // backgroundColor: lc,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),


              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                //crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  RaisedButton(
                    onPressed: (){
                      Alert(
                        context: context,
                        type: AlertType.success,
                        title: "Everything is fine",
                        desc: "You are probably not yet Presbyopic or you already have the right correction for near vision.",
                        buttons: [
                          DialogButton(
                            child: Text(
                              "Other Eye test",
                              style: TextStyle(color: Colors.white, fontSize: 20),
                            ),
                            onPressed: (){
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (_) =>eye1()));
                            },
                            width: 120,
                          ),
                          DialogButton(
                            child: Text(
                              "Home",
                              style: TextStyle(color: Colors.white, fontSize: 20),
                            ),
                            onPressed: (){
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (_) =>third_page()));
                            },
                            width: 120,
                          ),

                        ],
                      ).show();
                    },
                    color: Colors.redAccent[200],
                    child: const Text(
                      "NO",
                      style: TextStyle(fontSize: 20,color: Colors.yellow),
                    ),
                  ),
                  RaisedButton(
                    onPressed: (){
                      Alert(
                        context: context,
                        type: AlertType.error,
                        title: "Problem",
                        desc: "You definitely have a vision problem. A comprehensive exam, performed by an optometrist is required.",
                        buttons: [
                          DialogButton(
                            child: Text(
                              "Other Eye test",
                              style: TextStyle(color: Colors.white, fontSize: 20),
                            ),
                            onPressed: (){
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (_) =>eye1()));
                            },
                            width: 120,
                          ),
                          DialogButton(
                            child: Text(
                              "Home",
                              style: TextStyle(color: Colors.white, fontSize: 20),
                            ),
                            onPressed: (){
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (_) =>third_page()));
                            },
                            width: 120,
                          ),

                        ],
                      ).show();
                    },
                    color: Colors.greenAccent,
                    child: const Text(
                      "Yes",
                      style: TextStyle(fontSize: 20,color: Colors.green),
                    ),
                  ),

                ],
              ),

            ],
          ),
        ),
      ),
    );
  }
}
