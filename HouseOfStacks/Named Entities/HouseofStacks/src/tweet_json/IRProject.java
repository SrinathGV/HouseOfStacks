package tweet_json;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.GeocodeResponse;
import com.google.code.geocoder.model.GeocoderAddressComponent;
import com.google.code.geocoder.model.GeocoderRequest;
import com.google.code.geocoder.model.GeocoderResult;

import content_tagging.Map;
import twitter4j.JSONArray;
import twitter4j.JSONException;
import twitter4j.JSONObject;
import twitter4j.Query;
import twitter4j.QueryResult;
import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.URLEntity;
import twitter4j.User;
import twitter4j.api.*;
import twitter4j.conf.ConfigurationBuilder;




/**
 * 
 */

/**
 * @author gouds_000
 *
 */
public class IRProject {

	/**
	 * @param args
	 * @throws TwitterException 
	 */
	public static void main(String[] args) throws TwitterException {
		// TODO Auto-generated method stub
		ConfigurationBuilder cb = new ConfigurationBuilder();

		Date d = new Date();
		String[] days = new String[]{"2015-11-14","2015-11-15","2015-11-16","2015-11-17","2015-11-18","2015-11-19","2015-11-20","2015-11-21","2015-11-22","2015-11-23","2015-11-24","2015-11-25","2015-11-26","2015-11-27","2015-11-28"};
		DateFormat format = new SimpleDateFormat("dd-MMM-yyyy-hh-mm");
		String[] searchTerms = new String[]{"Paris attacks","Syrian refugees","Kenya bombings","Lebanon attacks","terrorist attacks","ISIS bombings"};
		String[] langs = new String[]{"fr","ar"};
		cb.setDebugEnabled(true)
		.setOAuthConsumerKey("qjp3wbRJqR1NolcPQoijIxDNh")
		.setOAuthConsumerSecret("dmO7YKaXOLBNFF8PyZKqDj9DZJ9a302y2TnPSUOjkv4z03ky6n")
		.setOAuthAccessToken("134787020-NidLKxvLxybboalIeV4D865hY1lG7qY2eddwK6mb")
		.setOAuthAccessTokenSecret("DTHqZkVzsYSUMYI31Jd9QSJIlZaGzp71K0IjJrxQsKjfh");
		TwitterFactory tf = new TwitterFactory(cb.build());
		Twitter twitter = tf.getInstance();
		ArrayList<Status> listOfTweets = new ArrayList();
		long lastRetrievdId = 0;
		Date lastQueryTime;
		FileOutputStream fw;
		
		try {
			File outFile =  new File("tweets\\"+format.format(d));
			fw = new FileOutputStream(outFile);
			OutputStreamWriter bw = new OutputStreamWriter(fw,"UTF-8");
			for(String lang : langs)
			{
				
				System.out.println("#####crawling for Lang######## : "+lang);
				int dayIndex = 0;
				int requiredCount = 100;
				int currentCount = 0;
				int CountforCurrentDay = 0;
				String fileName = d.toString();

				
				
				Query query = new Query();
				String currentDay = "";
				query.setSince(days[dayIndex]);
				query.setUntil(days[dayIndex+1]);
				int requiredForDay = (requiredCount / days.length);
				int retryCount  = 0;
				while(listOfTweets.size() < (requiredCount * langs.length))
				{	
					if(CountforCurrentDay >= requiredForDay || retryCount > 2)
					{
						CountforCurrentDay 	= 0;
						retryCount = 0;
						requiredForDay = (requiredCount / days.length);
						
						if(dayIndex < days.length - 2 )
						{
							dayIndex++;
							currentDay = days[dayIndex];
							query.setSince(days[dayIndex]);
							query.setUntil(days[dayIndex+1]);
						}
						else if(dayIndex+1 == days.length - 1)
						{
							dayIndex++;
							currentDay = days[dayIndex];
							requiredForDay = requiredCount - listOfTweets.size();
						}
						else{
							break;
						}
					}



					currentCount = (requiredForDay - CountforCurrentDay);

					System.out.println("required count for "+currentDay+" "+currentCount+" at "+ (new Date()).toString());
					query.setCount(currentCount > 100 ? 100 : currentCount);
					
					query.setLang(lang);
					
					for (String searchTerm : searchTerms) {
						query.setQuery(searchTerm);
						try{
							QueryResult result = twitter.search(query);

							int lengthBefore = CountforCurrentDay;

							for(Status s: result.getTweets())
							{
								if(!s.isRetweet())
								{
									CountforCurrentDay++;
									listOfTweets.add(s);
								}
							}

							if(lengthBefore == CountforCurrentDay)
							{
								retryCount++;
							}
						}

						catch(TwitterException ex)
						{
							if(ex.getErrorCode() == 88)
							{
								int limit = ex.getRateLimitStatus().getSecondsUntilReset() + 60;
								try {
									System.out.println("sleeping for "+limit+" at "+ (new Date()).toString());
									Thread.currentThread().sleep(limit * 1000);
								} catch (InterruptedException e) {
									// TODO Auto-generated catch block
									e.printStackTrace();
								}
							}
						}
					}					
					



				}
				
			}
			for(Status s : listOfTweets)
			{				
				//tweetObject t = parseObject(s);
				JSONObject obj = new JSONObject(s);
				bw.write(obj.toString());
				bw.write('\n');		    	
			}
			bw.close();


			RemoveDuplicates rd = new RemoveDuplicates();
			//rd.main(null);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		}
	}

public static Map get_coordinates(String s ){
	final Geocoder geocoder = new Geocoder();
	Map mp=new Map();
	GeocoderRequest geocoderRequest = new GeocoderRequestBuilder().setAddress(s).setLanguage("en").getGeocoderRequest();
	if(geocoderRequest.getAddress()!=null){
		
	
	GeocodeResponse geocoderResponse = geocoder.geocode(geocoderRequest);
	
	//System.out.println(geocoderResponse);
	
	List<GeocoderResult> results = geocoderResponse.getResults();
	
//	System.out.println(results.size());

	if(results.size()>0){
	GeocoderResult geores = results.get(0);
	
	//for( GeocoderResult geores: results ){
		//results[0].

	    if( geores.getTypes().contains("locality") ){
	    	
	    	String country[] =  geores.getFormattedAddress().split(",");
	    	int len=country.length;
	    	
	       // System.out.println( "Address: " + country[len-1]);
	      //  System.out.println("lat" +geores.getGeometry().getLocation().getLat());
	     //   System.out.println("lat" +geores.getGeometry().getLocation().getLng());
	        mp.latitude=geores.getGeometry().getLocation().getLat();
		    mp.longitude=(BigDecimal)geores.getGeometry().getLocation().getLng();
		    if(len>=1)
		    mp.location=country[len-1].trim(); 
		   // System.out.println( geores.getFormattedAddress());
		 //   System.out.println( geores.getGeometry().getViewport());
	    }
	    /*if (geores.getTypes().contains("country"))
	    	  System.out.println(component.getShortName());*/
	    
	
		}}
	return mp;
	
	
}
	public static tweetObject parseObject(Status str)
	{
		TimeZone tz = TimeZone.getTimeZone("UTC");
		DateFormat solrFormat = new SimpleDateFormat("YYYY-MM-dd'T'hh:mm:ss'Z'");
	//	Thu Dec 10 11:04:14 UTC 2015
		solrFormat.setTimeZone(tz);
		tweetObject tw = new tweetObject();
		try
		{

			JSONObject obj = new JSONObject(str);
			DateFormat formatter = new SimpleDateFormat("E MMM dd HH:mm:ss Z yyyy");
			Date date = (Date)formatter.parse((String) obj.get("createdAt"));

			JSONObject usrObj = obj.getJSONObject("user");
			tw.Created_at = solrFormat.format(date);
			tw.Id = obj.get("id").toString();
			tw.Lang = obj.getString("lang").toString();
			tw.Location=obj.getString("location").toString();
		//	tw.Author = usrObj.getString("name").toString();
			//tw.Location = usrObj.getString("location").toString();
			//tw.Followers_count = usrObj.getLong("Followers_count");
			
			if(tw.Lang.equalsIgnoreCase("en"))
			{
				tw.Text_en = obj.getString("text").toString();
			}
			else if(tw.Lang.equalsIgnoreCase("de"))
			{
				tw.Text_de = obj.getString("text").toString();
			}
			else if(tw.Lang.equalsIgnoreCase("ru"))
			{
				tw.Text_ru = obj.getString("text").toString();
			}
			else
			{
				tw.Text = obj.getString("text").toString();
			}

			JSONArray hashTags = obj.getJSONArray("hashtagEntities");

			for(int i=0;i < hashTags.length();i++)
			{
				tw.addHashTag(hashTags.getJSONObject(i).getString("text"));
			}

			JSONArray URLTags = obj.getJSONArray("URLEntities");

			for(int i=0;i < URLTags.length();i++)
			{
				tw.addURLEntity(URLTags.getJSONObject(i).getString("expandedURL"));
			}
		}
		catch(Exception e)
		{
			return tw;
		}

		return tw;
	}
	public static String date_utc(Date dd){
		SimpleDateFormat ff= new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		 ff.setTimeZone(TimeZone.getTimeZone("UTC"));
		String utc= ff.format(dd);
		return utc;
	}
	public static tweetObject parseObject(String str)
	{
		
		//System.out.println("string is"+str);
		TimeZone tz = TimeZone.getTimeZone("UTC");
		
		DateFormat solrFormat = new SimpleDateFormat("YYYY-MM-dd'T'hh:mm:ss'Z'");
		solrFormat.setTimeZone(tz);
		tweetObject tw = new tweetObject();
	
		try
		{

			JSONObject obj = new JSONObject(str);
			String d=obj.get("createdAt").toString();
			//System.out.println(d);
			DateFormat formatter = new SimpleDateFormat("E MMM dd HH:mm:ss Z yyyy");
			Date date = (Date)formatter.parse((String) obj.get("createdAt")) ;
					
			//tw.Created_at =  solrFormat.format(obj.get("createdAt").toString());//
			tw.Created_at=solrFormat.format(date).toString();
			//solrFormat.format(tw.Created_at);
			tw.Id = obj.get("id").toString();
			tw.Lang = obj.getString("lang").toString();
			tw.Author = obj.getJSONObject("user").get("name").toString();
		//	Boolean x = obj.getJSONObject("user").has("location");
			//System.out.println(x);
			int k=0;
			if(obj.has("place")){
				k++;
			if(obj.getJSONObject("place").get("country").toString().length()>0){
				//tw.Location = obj.getJSONObject("place").get("country").toString();
				//tw.latitude=(Double) obj.getJSONObject("geoLocation").get("latitude");
				//tw.longitude= (Double) obj.getJSONObject("geoLocation").get("longitude");
				tw.locationcode=obj.getJSONObject("place").get("countryCode").toString();
			}
			}
			
			tw.retweetCount=Long.parseLong(obj.getString("retweetCount").toString());
			tw.Followers_count=Long.parseLong(obj.getJSONObject("user").get("followersCount").toString());
			tw.miniprofileurl=obj.getJSONObject("user").get("miniProfileImageURL").toString();
			/*else if(obj.getJSONObject("user").get("location").toString().length()>0){
			Map mp=get_coordinates(obj.getJSONObject("user").get("location").toString());
			tw.Location = mp.getLocation();
			tw.longitude=mp.getLongitude();
			tw.latitude=mp.getLatitude();
			
			}*/
			
			//obj.getJSONObject("user").getJSONObject("location")
			//System.out.println("location "+tw.Location);
			//tw.Followers_count = obj.getLong("Followers_count");
			if(tw.Lang.equalsIgnoreCase("en"))
			{
				tw.Text_en = obj.getString("text").toString();
			}
			else if(tw.Lang.equalsIgnoreCase("de"))
			{
				tw.Text_de = obj.getString("text").toString();
			}
			else if(tw.Lang.equalsIgnoreCase("ru"))
			{
				tw.Text_ru = obj.getString("text").toString();
			}
			else if(tw.Lang.equalsIgnoreCase("ar"))
			{
				tw.Text_ar = obj.getString("text").toString();
			}
			else if(tw.Lang.equalsIgnoreCase("fr"))
			{
				tw.Text_fr = obj.getString("text").toString();
			}
			else
			{
				tw.Text = obj.getString("text").toString();
			}

			JSONArray hashTags = obj.getJSONArray("hashtagEntities");

			for(int i=0;i < hashTags.length();i++)
			{
				tw.addHashTag(hashTags.getJSONObject(i).getString("text"));
			}

			JSONArray URLTags = obj.getJSONArray("URLEntities");

			for(int i=0;i < URLTags.length();i++)
			{
				tw.addURLEntity(URLTags.getJSONObject(i).getString("expandedURL"));
			}
		//System.out.println(k);
		}
		catch(Exception e)
		{
			System.out.println("exception is "+e);
			return tw;
		}

		return tw;
	}


}
