import React from "react";
import '../style.css';
import android1 from './images/android1.jpg';
import android2 from './images/android2.jpg';
import android3 from './images/android3.jpg';


const Androidapp = () => {
    return (
        <>
          <h2 class="head">Android development</h2>
          <img src={android1} id="" class="bioimg" alt="ERPUser" />    
          <h2>Android App Development</h2>
          <p>The official language for Android development is Java. Large parts of Android are written in Java and its APIs are designed to be called primarily from Java. It is possible to develop C and C++ app using the Android Native Development Kit (NDK), however it isn't something that Google promotes.</p>
          <p>Android software development is the process by which new applications are created for devices running the Android operating system. Google states that[3] "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible. All non-JVM languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. Some languages/programming tools allow cross-platform app support.</p>
          <img src={android2} id="" class="bodyimg" alt="ERPUser" />    
          <p>Android apps are built as a combination of components that can be invoked individually. For example, an activity is a type of app component that provides a user interface. The "main" activity is what starts when the user taps your app icon, but you can take the user straight into a different activity from other places, such as from a notification or even from a different app. Other components such as broadcast receivers and services also allow your app to perform background tasks without a user interface.</p>
          <p>We specialize in developing Android applications. Our aim is to understand your ideas and needs and convert them to highly efficient applications. We incorporate the latest available features and technology to create best applications, fit for your need. All we require from your end is to interact with our app development team and put in your demands. Our expert developers will develop an app which is a combination of your ideas & demand, latest available technology and their experience in developing Android apps. We’re associate degree app development company that believes in leverage every app store to the fullest, however additionally creating the foremost of the assorted in operation systems out there.</p>
          <p>The smartphone market is evolving very rapidly, at Indglobal, we provide you with expert solutions which help you evolve with this growing market. We develop apps which are cutting edge in technology and are easy to use. We specialize in Android application development and have a dedicated and specialized mobile development and design team. Our services will help you achieve ability to design, develop and deploy successful Android applications which will help you reach millions of Android smartphone users.</p>
          <img src={android3} id="" class="bodyimg" alt="ERPUser" />        
        </>

    );
    
    
  };
  
  export default Androidapp;
  