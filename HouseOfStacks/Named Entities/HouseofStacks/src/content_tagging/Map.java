package content_tagging;

import java.math.BigDecimal;

public class Map {
public String location;
public String locationcode;
public synchronized String getLocationcode() {
	return locationcode;
}
public synchronized void setLocationcode(String locationcode) {
	this.locationcode = locationcode;
}
public synchronized String getLocation() {
	return location;
}
public synchronized void setLocation(String location) {
	this.location = location;
}
public synchronized BigDecimal getLatitude() {
	return latitude;
}
public synchronized void setLatitude(BigDecimal latitude) {
	this.latitude = latitude;
}
public synchronized BigDecimal getLongitude() {
	return longitude;
}
public synchronized void setLongitude(BigDecimal longitude) {
	this.longitude = longitude;
}
public BigDecimal latitude;
public BigDecimal longitude;
}
