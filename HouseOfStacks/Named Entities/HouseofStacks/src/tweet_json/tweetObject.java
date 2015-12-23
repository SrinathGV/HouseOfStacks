package tweet_json;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;

import twitter4j.ExtendedMediaEntity;
import twitter4j.GeoLocation;
import twitter4j.HashtagEntity;
import twitter4j.MediaEntity;
import twitter4j.Place;
import twitter4j.RateLimitStatus;
import twitter4j.Scopes;
import twitter4j.Status;
import twitter4j.SymbolEntity;
import twitter4j.URLEntity;
import twitter4j.User;
import twitter4j.UserMentionEntity;

public class tweetObject{


	public ArrayList<String> getTweet_hashtags() {
		// TODO Auto-generated method stub
		return this.Tweet_hashtags;
	}
	public ArrayList<String> Tweet_hashtags;
	
	public void addHashTag(String tag)
	{
		if(Tweet_hashtags == null)
		{
			Tweet_hashtags = new ArrayList<String>();
		}
		Tweet_hashtags.add(tag);
	}
		
	public ArrayList<String> getTweet_urls()
	{
		return this.Tweet_urls;
	}
	
	public void addURLEntity(String URL)
	{
		if(Tweet_urls == null)
		{
			Tweet_urls = new ArrayList<String>();
		}
		Tweet_urls.add(URL);
	}
	
	public ArrayList<String> Tweet_urls; 
	
	public String getCreated_at() {
		// TODO Auto-generated method stub
		return this.Created_at;
	}
	public String Created_at;
	public Double latitude;
	public Double longitude;
	public String miniprofileurl;
	public synchronized String getMiniprofileurl() {
		return miniprofileurl;
	}

	public synchronized void setMiniprofileurl(String miniprofileurl) {
		this.miniprofileurl = miniprofileurl;
	}
	public String locationcode;

	public synchronized String getLocationcode() {
		return locationcode;
	}

	public synchronized void setLocationcode(String locationcode) {
		this.locationcode = locationcode;
	}

	public synchronized Double getLatitude() {
		return latitude;
	}

	public synchronized void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public synchronized Double getLongitude() {
		return longitude;
	}

	public synchronized void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getId() {
		// TODO Auto-generated method stub
		return this.Id;
	}

	public String Id;
	
	public long getFollowers_count() {
		// TODO Auto-generated method stub
		return this.Followers_count;
	}

	public long Followers_count;

	public String getLang() {
		// TODO Auto-generated method stub
		return this.Lang;
	}
	
	public String Lang;
	
	public String getLocation() {
		// TODO Auto-generated method stub
		return this.Location;
	}
	
	public String Location;
	
	


	public String getText() {
		// TODO Auto-generated method stub
		return this.Text;
	}

	public String Text;
	
	public String getText_en() {
		// TODO Auto-generated method stub
		return this.Text_en;
	}

	public String Text_en;
	public String Text_ar;
	public synchronized String getText_ar() {
		return Text_ar;
	}

	public synchronized void setText_ar(String text_ar) {
		Text_ar = text_ar;
	}

	public synchronized String getText_fr() {
		return Text_fr;
	}

	public synchronized void setText_fr(String text_fr) {
		Text_fr = text_fr;
	}
	public String Text_fr;
	
	public String getText_ru() {
		// TODO Auto-generated method stub
		return this.Text_ru;
	}

	public String Text_ru;
	public long retweetCount;
	
	public synchronized long getRetweetCount() {
		return retweetCount;
	}

	public synchronized void setRetweetCount(long retweetCount) {
		this.retweetCount = retweetCount;
	}

	public String getText_de() {
		// TODO Auto-generated method stub
		return this.Text_de;
	}

	public String Text_de;
	public String Author;

	
	
	public synchronized String getAuthor() {
		return Author;
	}

	public synchronized void setAuthor(String author) {
		Author = author;
	}


	class user {
	    public String location;

		public synchronized String getLocation() {
			return location;
		}

		public synchronized void setLocation(String location) {
			this.location = location;
		}
	   
	}
	 
	
	

}
