name := """YiFengWeb"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  javaWs,
  "commons-io" % "commons-io" % "2.0",
  "org.apache.httpcomponents" % "httpclient" % "4.3.3",
  "org.apache.httpcomponents" % "httpcore" % "4.3.2",
  "mysql" % "mysql-connector-java" % "5.1.21",
  "me.chanjar" % "weixin-java-mp" % "1.3.3",
  "com.google.zxing" % "core" % "3.0.0",
  "com.google.zxing" % "javase" % "3.0.0",
  "net.sf.uadetector" % "uadetector-resources" % "2014.04"
)
