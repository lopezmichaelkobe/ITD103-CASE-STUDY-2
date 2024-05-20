#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <dht11.h>

#define DHT11PIN D4

dht11 DHT11;

const char* ssid = "kobelopez";       // Your WiFi SSID
const char* wifipassword = "12345678";  // Your WiFi password
const char* serverAddress = "192.168.91.78";  // IP address of the server
const int serverPort = 5000;               // Port number of the server

void setup() {
  Serial.begin(115200); // Starts the serial communication
  
  // Connect to WiFi
  WiFi.begin(ssid, wifipassword);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;

    int chk = DHT11.read(DHT11PIN);


    Serial.print("Humidity (%): ");
    float hm = DHT11.humidity;
    Serial.println(hm, 2);  

    Serial.print("Temperature  (C): ");
    float temp = DHT11.temperature;
    Serial.println(temp, 2);

    // Construct the URL with parameters
    String url = "http://192.168.91.78:5000/addsensordata/?temperature=" + String(temp);
    url += "&humidity=" + String(hm);

    http.begin(client, url);

    int httpResponseCode = http.POST(url); // empty string for POST without payload

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("HTTP Response code: " + String(httpResponseCode));
      Serial.println("Response: " + response);
    } else {
      Serial.print("Error sending data to server. HTTP Response code: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }
  delay(5000); // Delay before next loop iteration (5 seconds)
}
