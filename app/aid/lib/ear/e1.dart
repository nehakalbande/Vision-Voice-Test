import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:path_provider/path_provider.dart';
import 'package:audioplayer/audioplayer.dart';
import 'e2.dart';
import 'package:aid/third_page.dart';
import 'package:rflutter_alert/rflutter_alert.dart';

import 'dart:io';

enum PlayerState { stopped, playing, paused }

class e1 extends StatefulWidget {
  @override
  _e1State createState() => _e1State();
}

class _e1State extends State<e1> {
  String mp3Uri = '';
  void _playSound() {
    AudioPlayer player = AudioPlayer();
    player.play(mp3Uri);
    //
  }

  void _loadSound() async {
    final ByteData data = await rootBundle.load('assets/077_1.wav');
    Directory tempDir = await getTemporaryDirectory();
    File tempFile = File('${tempDir.path}/077_1.wav');
    await tempFile.writeAsBytes(data.buffer.asUint8List(), flush: true);
    mp3Uri = tempFile.uri.toString();
  }

  @override
  void initState() {
    super.initState();
    _loadSound();
  }

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
                '1 of 5',
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 20.0,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),

              new Padding(padding: EdgeInsets.all(10.0),),
              RaisedButton(
                onPressed: () => _playSound(),
                color: Colors.lightBlueAccent,
                child: Padding(
                  padding: EdgeInsets.all(10.0),

                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,

                    children: <Widget>[

                      Icon(
                        Icons.play_arrow,
                        color: Colors.white,
                        size: 100.0,
                      )
                    ],
                  ),
                ),
              ),


              new Padding(padding: EdgeInsets.all(15.0),
                child: Text(
                  "Are you able to hear 077",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 25.0,
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
                        type: AlertType.error,
                        title: "Your result : 0/5",
                        desc: "You seem to have problem.",
                        buttons: [
                          DialogButton(
                            child: Text(
                              "Try Again",
                              style: TextStyle(color: Colors.white, fontSize: 20),
                            ),
                            onPressed: (){
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (_) =>e1()));
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
                          )
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
                      Navigator.push(context,
                          MaterialPageRoute(builder: (_) =>e2()));
                    },
                    color: Colors.greenAccent,
                    child: const Text(
                      '  YES  ',
                      style: TextStyle(fontSize: 20,color: Colors.green,),

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


