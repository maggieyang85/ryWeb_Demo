$(document).ready(function(){
  // Initialize Firebase
  var firebase;
  var config = {
    apiKey: "AIzaSyCaW8LvaliC3wAoVgV8YmpSJHsyxVRl84E",
    authDomain: "rywebsite-data.firebaseapp.com",
    databaseURL: "https://rywebsite-data.firebaseio.com",
    projectId: "rywebsite-data",
    storageBucket: "rywebsite-data.appspot.com",
    messagingSenderId: "789278831323"
  };
  
  firebase.initializeApp(config);
  var db = firebase.firestore();
  
/*
  function setdata() {
    db.collection("News").doc("20190308新消息").set({
    內容: "傳送訊息",
  });
  }

  function getdata() {
    var docRef = db.collection("News").doc("20190306新消息");
    docRef.get().then(function(doc) {
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log("找不到文件");
        }
      })
      .catch(function(error) {
        console.log("提取文件時出錯:", error);
      });
  }

    var $btn_get = $('#btn_get');
    var $btn_set = $('#btn_set');
    

    $btn_get.on('click',function(){
      getdata()
    });

    $btn_set.on('click',function(){
      setdata()
    });*/
  });
  