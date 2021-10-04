import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:path_provider/path_provider.dart';
import 'package:audioplayer/audioplayer.dart';
import 'e1.dart';

import 'package:aid/third_page.dart';
import 'package:rflutter_alert/rflutter_alert.dart';

import 'dart:io';

enum PlayerState { stopped, playing, paused }

class e5 extends StatefulWidget {
  @override
  _e5State createState() => _e5State();
}

class _e5State extends State<e5> {
  String mp3Uri = '';
  void _playSound() {
    AudioPlayer player = AudioPlayer();
    player.play(mp3Uri);
    //
  }

  void _loadSound() async {
    final ByteData data = await rootBundle.load('assets/195_5.wav');
    Directory tempDir = await getTemporaryDirectory();
    File tempFile = File('${tempDir.path}/195_5.wav');
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
                '5 of 5',
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
                  "Are you able to hear 195",
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
                        title: "Your result : 4/5",
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
                      " No ",
                      style: TextStyle(fontSize: 20,color: Colors.yellow),
                    ),
                  ),
                  RaisedButton(
                    onPressed: (){
                      Alert(
                        context: context,
                        type: AlertType.success,
                        title: "Your result : 5/5",
                        desc: "Conratulations! Your acuity for current ear superb",
                        buttons: [

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
                    color: Colors.greenAccent,
                    child: const Text(
                      '  Finish  ',
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






